+# FLUX SLAUERS BOT (Reclutamiento y Soporte)
+
+Bot de Telegram pensado para reclutar jugadores y brindar soporte rápido. Diseñado para ejecutarse en **Termux** con Python.
+
+## ✅ Requisitos
+
+- Termux instalado en Android.
+- Python 3.11+.
+- Un bot de Telegram (token de @BotFather).
+
+## 🚀 Instalación en Termux
+
+```bash
+pkg update -y
+pkg install -y python git
+python -m venv .venv
+source .venv/bin/activate
+pip install -r requirements.txt
+```
+
+## 🔧 Configuración
+
+1. Copia el archivo de ejemplo:
+
+```bash
+cp .env.example .env
+```
+
+2. Edita `.env` y agrega tu token:
+
+```dotenv
+TELEGRAM_BOT_TOKEN=TU_TOKEN_AQUI
+SUPPORT_USERNAME=@TuSoporte
+CLAN_NAME=FLUX SLAUERS
+RECRUIT_FORM_URL=https://tu-formulario.com
+```
+
+## ▶️ Ejecutar
+
+```bash
+source .venv/bin/activate
+python bot.py
+```
+
+## ✨ Comandos principales
+
+- `/start` → Bienvenida y menú.
+- `/reclutar` → Requisitos y formulario.
+- `/soporte` → Canales de soporte.
+- `/faq` → Preguntas frecuentes.
+
+## 🧩 Personalización rápida
+
+Puedes editar `bot_config.py` para cambiar textos, requisitos o mensajes.
+
+---
+
+**Nota:** Este bot está listo para crecer con más comandos o integración con bases de datos.
