# Grupo Preventivo

Sitio web corporativo profesional para **Grupo Preventivo**, empresa de ingeniería en mantenimiento industrial en Costa Rica.

## Tecnologías

- React 18
- Vite 5
- Tailwind CSS 3
- React Router 6
- React Helmet Async
- Framer Motion
- Lucide React

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
cd /Users/manu/CascadeProjects/grupo-preventivo
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abra `http://localhost:5173` en su navegador.

## Compilación para producción

```bash
npm run build
npm run preview
```

## Configuración recomendada antes de publicar

1. **Reemplazar datos de contacto** en `src/data/constants.js`:
   - Teléfono
   - Correo
   - WhatsApp
   - Dirección
2. **Actualizar Google Analytics** en `src/components/Analytics.jsx` con el ID real.
3. **Reemplazar imágenes placeholder** por fotografías reales de la empresa.
4. **Configurar envío de formularios** en `ContactForm.jsx` y `QuoteForm.jsx` (Netlify Forms, Formspree, EmailJS, backend propio, etc.).
5. **Actualizar Google Maps** en `src/pages/Contact.jsx` con la ubicación real.
6. **Reemplazar logos de clientes** en `src/pages/Clients.jsx` por imágenes reales autorizadas.
7. **Integrar reseñas de Google Business** en `src/pages/Projects.jsx` y `src/pages/Clients.jsx`.
8. **Publicar el sitio** en Netlify, Vercel, Cloudflare Pages o el hosting de su preferencia.

## Estructura de carpetas

```
src/
  components/   # Componentes reutilizables
  data/         # Datos, contenido y constantes
  pages/        # Páginas del sitio
  sections/     # Secciones de la Home
  App.jsx
  main.jsx
  index.css
```

## Licencia

Proyecto privado para Grupo Preventivo.
