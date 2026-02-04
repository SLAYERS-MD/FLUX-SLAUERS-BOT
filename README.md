# FLUX SLAUERS BOT (WhatsApp Reclutamiento y Soporte)

Bot de WhatsApp para reclutar jugadores y brindar soporte rápido. Funciona en **Termux** usando WhatsApp Web (QR o código de emparejamiento).

---

## ✅ Requisitos

* Termux instalado en Android
* Node.js 18+
* Cuenta de WhatsApp activa en tu teléfono

---

## 🚀 Instalación en Termux

```bash
pkg update -y
pkg install -y nodejs git
npm install
```

---

## 🔧 Configuración

1. Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Edita `.env` con tus datos:

```dotenv
CLAN_NAME=FLUX SLAUERS
SUPPORT_NUMBER=+11111111111
RECRUIT_FORM_URL=https://tu-formulario.com
TRYOUTS_URL=https://tu-formulario.com/pruebas
RULES_URL=https://tu-reglamento.com
DISCORD_URL=https://discord.gg/tu-invitacion
STAFF_HOURS=Lun-Vie 18:00-22:00
SERVER_REGION=LATAM
SERVER_PLATFORM=Mobile
WELCOME_MESSAGE=¡Bienvenido! Soy el bot oficial de reclutamiento y soporte.
MIN_AGE=16
MIN_LEVEL=30
MIN_HOURS_WEEK=8
MIN_KDR=1.0
WHATSAPP_PHONE_NUMBER=+11111111111
```

> `WHATSAPP_PHONE_NUMBER` es opcional.
> Si lo defines, el bot intentará generar un **código de emparejamiento** (cuando WhatsApp Web lo permita).
> Si no, se usará **QR**.

---

## ▶️ Ejecutar

```bash
npm start
```

Al iniciar, verás un **QR en la terminal**. Escanéalo desde WhatsApp:

```
WhatsApp > Dispositivos vinculados > Vincular dispositivo
```

---

## ✨ Comandos (por texto)

Los jugadores pueden escribir cualquiera de estos comandos al bot:

### 📌 Información General

* `hola` → Mensaje de bienvenida
* `info` → Información del clan
* `horarios` → Horarios del staff
* `región` → Región y plataforma del servidor

### 🧾 Reclutamiento

* `reclutar` → Enlace al formulario de reclutamiento
* `pruebas` → Información y link de tryouts
* `requisitos` → Requisitos mínimos para postular
* `edad` → Edad mínima
* `nivel` → Nivel mínimo requerido
* `kdr` → K/D mínimo requerido

### 📜 Normas

* `reglas` → Reglamento oficial del clan
* `conducta` → Normas de comportamiento

### 💬 Soporte

* `soporte` → Contacto directo con staff
* `staff` → Horarios y disponibilidad
* `ayuda` → Lista de comandos disponibles

### 🌐 Comunidad

* `discord` → Invitación al servidor oficial
* `redes` → Redes sociales del clan (si aplica)

---

## 🛡️ Notas Importantes

* El bot **no guarda mensajes privados**.
* Funciona solo mientras Termux esté activo.
* Recomendado usar un **número exclusivo** para el bot.
* Compatible con **clanes esports y ligas competitivas**.

---

## 🏆 Uso recomendado

✔ Reclutamiento automático
✔ Filtro inicial de jugadores
✔ Respuestas rápidas 24/7
✔ Imagen profesional para FLUX SLAUERS
