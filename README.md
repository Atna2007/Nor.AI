# 🤖 Nor.AI — Automatización Inteligente para Negocios

**Nor.AI** es una plataforma de automatización inteligente con chatbot integrado, construida con Make.com y OpenAI. Disponible 24/7, responde consultas, genera cotizaciones automáticas y se conecta con WhatsApp, Google Sheets y más — sin sistemas complicados.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Make](https://img.shields.io/badge/Make.com-6D00CC?style=for-the-badge&logo=make&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github)

---

## 🚀 Demo en Vivo

🌐 **[https://atna2007.github.io/Nor.AI/](https://atna2007.github.io/Nor.AI/)**

| Página | Descripción | Link |
|--------|-------------|------|
| 🏠 Principal | Landing page de Nor.AI | [index.html](https://atna2007.github.io/Nor.AI/) |
| 💬 Chatbot | Chat con IA en tiempo real | [chatbot.html](https://atna2007.github.io/Nor.AI/chatbot.html) |
| 💰 Planes | Precios y planes | [planes.html](https://atna2007.github.io/Nor.AI/planes.html) |
| 📋 Cotización | Formulario de cotización | [Cotizacion.html](https://atna2007.github.io/Nor.AI/Cotizacion.html) |

---

## ✨ ¿Qué hace Nor.AI?

- 🚀 **Automatización inteligente** — Envío de mensajes, registros, cotizaciones y más, sin código complejo
- 💬 **Atención al cliente 24/7** — Respuestas automáticas personalizadas con OpenAI GPT
- ⏱️ **Ahorro de tiempo real** — Elimina tareas rutinarias para que te enfoques en crecer
- 🔗 **Integraciones nativas** — WhatsApp, Google Sheets, CRMs y más via webhooks de Make.com
- 📊 **Dashboard de métricas** — Visualización de datos con Chart.js
- 📋 **Cotizaciones automáticas** — Formulario que genera cotizaciones al instante

---

## 👥 El Equipo

| Personaje | Rol | Descripción |
|-----------|-----|-------------|
| **Nilo** | 🎨 Diseño UX/UI | Crea experiencias visuales atractivas e intuitivas |
| **Onix** | 🧠 Cerebro Técnico | Gestiona la lógica del chatbot y las automatizaciones |
| **Rami** | 🛠️ Soporte Técnico | Asegura que todo funcione correctamente día tras día |

---

## 🏗️ Arquitectura del Sistema

```
Usuario
   │
   ▼
index.html / chatbot.html
   │
   ▼ (HTTP POST via fetch)
Make.com Webhook
   │
   ▼
OpenAI GPT (procesamiento del mensaje)
   │
   ▼
Respuesta JSON → UI actualizada en tiempo real
   │
   ▼ (opcional)
Google Sheets / CRM / WhatsApp
```

---

## 📁 Estructura del Proyecto

```
Nor.AI/
├── 📄 index.html          — Página principal y landing
├── 📄 planes.html         — Planes y precios
├── 📄 chatbot.html        — Chatbot integrado con OpenAI
├── 📄 Cotizacion.html     — Formulario de cotización automática
├── 📁 Css/                — Hojas de estilo
├── 📁 Js/                 — Lógica JavaScript
└── 📁 Img/                — Imágenes y assets
```

---

## 🛠️ Tech Stack

```
┌─────────────────────────────────────────┐
│              Frontend                    │
├─────────────────────────────────────────┤
│  HTML5  ·  CSS3  ·  JavaScript ES6+     │
│  Google Fonts (Poppins, Montserrat)     │
│  Chart.js                               │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│           Automatización                 │
├─────────────────────────────────────────┤
│  Make.com (Webhooks + Scenarios)        │
│  OpenAI API (GPT)                       │
│  Google Sheets (storage de leads)       │
└─────────────────────────────────────────┘
```

---

## 📦 Uso Local

```bash
# Clona el repositorio
git clone https://github.com/Atna2007/Nor.AI.git

# Opción 1: Abrir directamente
# Doble clic en index.html

# Opción 2: Con servidor local (recomendado para evitar CORS)
npx serve .
# → http://localhost:3000
```

> ⚠️ **Nota:** El chatbot requiere un webhook de Make.com activo para funcionar. Configura el tuyo en `chatbot.html` en la función `fetch()`.

---

## ⚙️ Configuración del Webhook

Para usar tu propio backend de IA, edita la URL del webhook en `chatbot.html`:

```javascript
// Encuentra esta línea y reemplaza con tu webhook
const response = await fetch("https://hook.us2.make.com/TU_WEBHOOK_AQUI", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMessage })
});
```

---

## 🌐 Deploy en GitHub Pages

1. Ve a **Settings** → **Pages**
2. **Source:** `main` branch, carpeta `/ (root)`
3. Guarda — disponible en: `https://atna2007.github.io/Nor.AI/`

---

## 📬 Contacto

- **Email:** [suportnor.ai@gmail.com](mailto:suportnor.ai@gmail.com)
- **Instagram:** [@nor.ai_official](https://www.instagram.com/nor.ai_official)
- **GitHub:** [@Atna2007](https://github.com/Atna2007)

---

> ⭐ Si te resulta útil, dale una estrella al repositorio
