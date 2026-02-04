+import qrcode from "qrcode-terminal";
+import { Client, LocalAuth } from "whatsapp-web.js";
+
+import { config, buildRequirements, buildServerInfo } from "./config.js";
+
+const client = new Client({
+  authStrategy: new LocalAuth(),
+  puppeteer: {
+    args: ["--no-sandbox", "--disable-setuid-sandbox"],
+  },
+});
+
+const buildMenu = () =>
+  [
+    `*${config.clanName}* - Menú principal`,
+    config.welcomeMessage,
+    "",
+    "1️⃣ Reclutamiento",
+    "2️⃣ Soporte",
+    "3️⃣ FAQ",
+    "4️⃣ Reglas",
+    "5️⃣ Entrenamientos",
+    "6️⃣ Estado de aplicación",
+    "7️⃣ Staff",
+    "",
+    "Responde con el número o escribe:",
+    "- *reclutar*",
+    "- *soporte*",
+    "- *faq*",
+    "- *reglas*",
+    "- *entrenos*",
+    "- *estado*",
+    "- *staff*",
+  ].join("\n");
+
+const buildSupport = () =>
+  [
+    "🆘 *Soporte para jugadores*",
+    `Contacto: ${config.supportNumber}`,
+    "",
+    "Incluye en tu mensaje:",
+    "- ID del jugador",
+    "- Fecha/hora",
+    "- Evidencia (si aplica)",
+  ].join("\n");
+
+const buildFaq = () =>
+  [
+    "❓ *Preguntas frecuentes*",
+    "",
+    "1. ¿Cómo me uno?",
+    "   Escribe *reclutar* y completa el formulario.",
+    "",
+    "2. ¿Cuánto tarda la respuesta?",
+    "   Normalmente 24-48h.",
+    "",
+    "3. ¿Qué pasa si no cumplo requisitos?",
+    "   Puedes intentarlo más adelante cuando cumplas.",
+    "",
+    "4. ¿Hay pruebas?",
+    "   Sí, pide *entrenos* para ver fechas.",
+    "",
+    "5. ¿Dónde están las reglas?",
+    "   Escribe *reglas* para el enlace.",
+  ].join("\n");
+
+const buildRecruit = () =>
+  [
+    buildRequirements(),
+    "",
+    buildServerInfo(),
+    "",
+    "📝 *Formulario de ingreso:*",
+    config.recruitFormUrl,
+    "",
+    "🎯 *Pruebas/tryouts:*",
+    config.tryoutsUrl,
+    "",
+    "¿Listo para aplicar? ¡Te esperamos!",
+  ].join("\n");
+
+const buildRules = () =>
+  [
+    "📜 *Reglamento del clan*",
+    config.rulesUrl,
+    "",
+    "Lee las reglas antes de aplicar.",
+  ].join("\n");
+
+const buildTryouts = () =>
+  [
+    "🏋️ *Entrenamientos y pruebas*",
+    `Horario del staff: ${config.staffHours}`,
+    "",
+    "Para coordinar pruebas, responde con:",
+    "- Tu zona horaria",
+    "- Tu horario disponible",
+    "",
+    `Formulario de pruebas: ${config.tryoutsUrl}`,
+  ].join("\n");
+
+const buildStatus = () =>
+  [
+    "📬 *Estado de aplicación*",
+    "Responde con:",
+    "- Tu nickname",
+    "- Fecha de envío del formulario",
+    "",
+    "Un reclutador te responderá en 24-48h.",
+  ].join("\n");
+
+const buildStaff = () =>
+  [
+    "👥 *Staff disponible*",
+    `Soporte principal: ${config.supportNumber}`,
+    `Discord: ${config.discordUrl}`,
+    "",
+    "Si es urgente, marca tu mensaje como *URGENTE*.",
+  ].join("\n");
+
+const matchIntent = (text) => {
+  const normalized = text.trim().toLowerCase();
+  if (["1", "reclutar", "reclutamiento"].includes(normalized)) return "recruit";
+  if (["2", "soporte", "support"].includes(normalized)) return "support";
+  if (["3", "faq", "preguntas"].includes(normalized)) return "faq";
+  if (["4", "reglas", "reglamento"].includes(normalized)) return "rules";
+  if (["5", "entrenos", "entrenamientos", "tryouts"].includes(normalized))
+    return "tryouts";
+  if (["6", "estado", "aplicacion", "aplicación"].includes(normalized))
+    return "status";
+  if (["7", "staff", "equipo"].includes(normalized)) return "staff";
+  if (["menu", "menú", "inicio", "start"].includes(normalized)) return "menu";
+  return "menu";
+};
+
+client.on("qr", (qr) => {
+  console.log("Escanea este QR con WhatsApp para vincular:");
+  qrcode.generate(qr, { small: true });
+});
+
+client.on("authenticated", () => {
+  console.log("✅ Sesión autenticada.");
+});
+
+client.on("ready", async () => {
+  console.log("🤖 Bot listo.");
+  if (config.whatsappPhoneNumber) {
+    try {
+      const code = await client.requestPairingCode(config.whatsappPhoneNumber);
+      console.log(`Código de emparejamiento: ${code}`);
+    } catch (error) {
+      console.warn("No se pudo generar el código de emparejamiento.", error);
+    }
+  }
+});
+
+client.on("message", async (message) => {
+  const intent = matchIntent(message.body);
+
+  if (intent === "recruit") {
+    await message.reply(buildRecruit());
+    return;
+  }
+
+  if (intent === "support") {
+    await message.reply(buildSupport());
+    return;
+  }
+
+  if (intent === "faq") {
+    await message.reply(buildFaq());
+    return;
+  }
+
+  if (intent === "rules") {
+    await message.reply(buildRules());
+    return;
+  }
+
+  if (intent === "tryouts") {
+    await message.reply(buildTryouts());
+    return;
+  }
+
+  if (intent === "status") {
+    await message.reply(buildStatus());
+    return;
+  }
+
+  if (intent === "staff") {
+    await message.reply(buildStaff());
+    return;
+  }
+
+  await message.reply(buildMenu());
+});
+
+client.initialize();
