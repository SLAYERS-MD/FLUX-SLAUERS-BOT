+import dotenv from "dotenv";
+
+dotenv.config();
+
+const toNumber = (value, fallback) => {
+  const parsed = Number.parseInt(value ?? "", 10);
+  return Number.isNaN(parsed) ? fallback : parsed;
+};
+
+const config = {
+  clanName: process.env.CLAN_NAME ?? "FLUX SLAUERS",
+  supportNumber: process.env.SUPPORT_NUMBER ?? "+11111111111",
+  recruitFormUrl: process.env.RECRUIT_FORM_URL ?? "https://tu-formulario.com",
+  tryoutsUrl: process.env.TRYOUTS_URL ?? "https://tu-formulario.com/pruebas",
+  rulesUrl: process.env.RULES_URL ?? "https://tu-reglamento.com",
+  discordUrl: process.env.DISCORD_URL ?? "https://discord.gg/tu-invitacion",
+  staffHours: process.env.STAFF_HOURS ?? "Lun-Vie 18:00-22:00",
+  serverRegion: process.env.SERVER_REGION ?? "LATAM",
+  serverPlatform: process.env.SERVER_PLATFORM ?? "Mobile",
+  welcomeMessage:
+    process.env.WELCOME_MESSAGE ??
+    "¡Bienvenido! Soy el bot oficial de reclutamiento y soporte.",
+  minAge: toNumber(process.env.MIN_AGE, 16),
+  minLevel: toNumber(process.env.MIN_LEVEL, 30),
+  minHoursWeek: toNumber(process.env.MIN_HOURS_WEEK, 8),
+  minKdr: process.env.MIN_KDR ?? "1.0",
+  whatsappPhoneNumber: process.env.WHATSAPP_PHONE_NUMBER ?? "",
+};
+
+const buildRequirements = () => `
+✅ *Requisitos para ${config.clanName}*
+- Edad mínima: ${config.minAge}
+- Nivel mínimo: ${config.minLevel}
+- Horas semanales: ${config.minHoursWeek}+
+- K/D mínimo: ${config.minKdr}
+`.trim();
+
+const buildServerInfo = () =>
+  [
+    "🌎 *Información del servidor*",
+    `Región: ${config.serverRegion}`,
+    `Plataforma: ${config.serverPlatform}`,
+  ].join("\n");
+
+export { config, buildRequirements, buildServerInfo };
