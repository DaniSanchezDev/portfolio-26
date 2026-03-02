# Portfolio Personal - Daniel Sánchez Vázquez

Portfolio web moderno, responsivo y totalmente funcional desarrollado con React y Vite. Showcasing de proyectos, habilidades técnicas y experiencia profesional con diseño elegante y animaciones fluidas.

## ✨ Características Principales

- **Footer Profesional**: Información personal, enlaces rápidos y redes sociales con diseño coherente
- **Descarga de CV**: Botón funcional para descargar currículum en PDF
- **Scroll Suave Premium**: Implementado con Lenis para una experiencia de scroll fluida y continua
- **Tema Oscuro por Defecto**: Modo nocturno como tema inicial (preserva preferencia del usuario)
- **Formulario de Contacto Funcional**: Envío de emails reales mediante EmailJS con notificaciones toast
- **Diseño Moderno y Responsivo**: Interfaz limpia, minimalista y adaptada a todos los dispositivos
- **Animaciones Fluidas**: Fondo dinámico con estrellas parpadeantes y meteoritos, transiciones suaves en componentes
- **Navegación Inteligente**: Navbar sticky con navegación suave entre secciones
- **Rendimiento Optimizado**: Build rápido con Vite, lazy loading de componentes
- **Código Limpio**: Seguimiento de mejores prácticas, ESLint configurado, componentes reutilizables

## 🛠️ Stack Tecnológico

**Frontend:**

- React 18 con Hooks
- Vite (build tool)
- TailwindCSS (estilos)
- React Router (navegación)
- Lucide Icons (iconografía)
- Lenis (scroll suave)

**Desarrollo:**

- ESLint (linting)
- CSS3 (animaciones)
- JavaScript ES6+

**Servicios:**

- EmailJS (envío de emails desde el formulario)

**Herramientas:**

- Git/GitHub (control de versiones)
- Figma (diseño)
- Cursor (desarrollo)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                     # Componentes UI reutilizables (Toast)
│   │   ├── toast.jsx
│   │   └── toaster.jsx
│   ├── StarBackground.jsx      # Fondo animado (estrellas + meteoritos)
│   ├── Navbar.jsx              # Barra de navegación sticky
│   ├── Hero.jsx                # Sección principal con presentación
│   ├── About.jsx               # Sección sobre mí con descarga de CV
│   ├── Skills.jsx              # Carrusel interactivo de habilidades
│   ├── Projects.jsx            # Grid de proyectos con enlaces
│   ├── Contact.jsx             # Formulario de contacto con EmailJS
│   ├── Footer.jsx              # Footer profesional con info y redes
│   ├── ThemeToggle.jsx         # Toggle de tema claro/oscuro
│   └── ...
├── hooks/
│   ├── use-toast.js            # Hook para sistema de notificaciones
│   └── useLenis.js             # Hook para scroll suave con Lenis
├── pages/
│   ├── Home.jsx                # Página principal (integra todos los componentes)
│   └── NotFound.jsx            # Página 404
├── lib/
│   └── utils.js                # Utilidades (cn function)
├── App.jsx                     # Componente raíz con rutas
├── index.css                   # Estilos globales y animaciones
└── main.jsx                    # Punto de entrada
```

## 🎨 Componentes Principales

### StarBackground

Fondo animado con:

- **Estrellas**: Generadas dinámicamente (1 por cada 10,000 píxeles)
  - Tamaño: 1-4px
  - Opacidad: 0.5-1.0
  - Animación de parpadeo sutil
  - Responsive al redimensionar ventana
- **Meteoritos**: 4 unidades con movimiento diagonal
  - Tamaño: 0.5-2.5px × 25-125px (forma alargada)
  - Posición inicial: -30% a 20% (fuera de pantalla)
  - Duración: 3-7 segundos
  - Delay: 0-3 segundos
  - Efecto fade in/out

### About

Sección sobre mí con:

- **Presentación profesional**: Descripción de experiencia y enfoque
- **Tarjetas de valor**: 3 tarjetas destacando habilidades (Desarrollo, UX, Colaboración)
- **CTA dual**: Botón de contacto + descarga de CV
- **Diseño coherente**: Mismos estilos de tarjetas que el resto del portfolio

### Contact

Formulario de contacto completamente funcional:

- **Integración EmailJS**: Envío de emails sin backend propio
- **Validación de campos**: Nombre, email y mensaje requeridos
- **Notificaciones Toast**: Feedback visual de éxito/error
- **Información de contacto**: Email, teléfono, localización con iconos
- **Links a redes sociales**: LinkedIn y GitHub
- **Estilos coherente**: Mismo diseño que las tarjetas de proyectos
- **Seguridad**: Credenciales en variables de entorno (`.env`)

**Configuración EmailJS:**

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar servicio de email y plantilla
3. Agregar credenciales al archivo `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

### Toast Notifications

Sistema de notificaciones implementado con Radix UI:

- **Componentes**: Toast, ToastProvider, ToastViewport
- **Hook personalizado**: `useToast()` para gestionar notificaciones
- **Variantes**: Default, Success (verde), Destructive (rojo)
- **Animaciones**: Entrada/salida suaves con transiciones
- **Uso**: Feedback de formularios y acciones del usuario

### Navbar

- Navegación sticky con enlaces a secciones
- Links suavizados con scroll behavior
- Responsive en móvil

### Hero

- Presentación principal con animaciones fade-in
- Nombre destacado con gradiente
- CTA "Ver Proyectos" con botón interactivo
- Indicador de scroll animado

### Skills

- Carrusel interactivo de habilidades
- Filtrado por categoría: Frontend, Backend, Tools
- Navegación con botones y gestos táctiles
- Auto-rotación cada 5 segundos
- Barras de nivel de competencia

### Projects

- Grid responsivo (1-3 columnas según pantalla)
- 3 proyectos destacados con descripción
- Enlaces a demo y repositorio GitHub
- Tags de tecnologías usadas
- Efecto hover con escala y sombra

### ThemeToggle

- Toggle de tema claro/oscuro
- **Tema oscuro por defecto**: Primera visita siempre en modo nocturno
- Persistencia en localStorage
- Transición suave de colores

### Footer

Footer profesional con tres columnas:

- **Información personal**: Nombre y descripción profesional
- **Enlaces rápidos**: Navegación en línea a todas las secciones
- **Redes sociales**: GitHub, LinkedIn y Email con iconos
- **Copyright**: Año dinámico y créditos
- **Diseño coherente**: Mismos estilos que el resto del portfolio

### Scroll Suave (Lenis)

Implementación de scroll premium con Lenis:

- **Transición fluida**: Scroll continuo sin saltos bruscos
- **Easing exponencial**: Aceleración y desaceleración naturales
- **Compatible con touch**: Funciona en móvil y desktop
- **60fps**: Animación fluida sin lag

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:5173)
npm run dev

# Build para producción
npm run build

# Previsualizar build
npm run preview

# Linting
npm run lint
```

## 📊 Secciones del Portfolio

- ✅ **Contact**: Formulario funcional con envío de emails (EmailJS + Toast notifications)
- ✅ **Hero**: Presentación principal con animaciones
- ✅ **About**: Información personal con descarga de CV
- ✅ **Skills**: Carrusel interactivo de habilidades
- ✅ **Projects**: 3 proyectos destacados (Pawtopia, EcoVibe, AppFluence)
- ✅ **Footer**: Footer profesional con info, enlaces y redes sociales
- ✅ **Navbar**: Navegación entre secciones
- ✅ **Theme Toggle**: Tema oscuro por defecto con toggle

## 💻 Habilidades Técnicas Showcased

**Frontend:**

- HTML (90%)
- CSS (85%)
- React (85%)
- JavaScript (80%)
- TypeScript (70%)
- TailwindCSS (70%)
- Next.js (50%)

**Backend:**

- Spring Boot (85%)
- Java (70%)
- PostgreSQL (70%)
- Node.js (70%)
- MongoDB (65%)

**Tools:**

- Git/GitHub (85%)
- Figma (70%)
- Cursor (70%)

## 🎯 Proyectos Destacados

### 1. Pawtopia

Plataforma de adopción responsable y bienestar animal

- **Tech**: HTML, CSS, JavaScript, TailwindCSS
- **Equipo**: 4 personas
- **URL**: https://pawtopia-nine.vercel.app/

### 2. EcoVibe

Web de sostenibilidad y hábitos responsables

- **Tech**: HTML, CSS, JavaScript, Bootstrap
- **Equipo**: 2 personas
- **URL**: https://eco-vibe.vercel.app/

### 3. AppFluence

Página web de podcast con reproductor integrado

- **Tech**: HTML, CSS, JavaScript, Spotify API
- **URL**: https://danisanchezdev.github.io/P5_Podcast/html/index.html

## 🔮 Futuras Funcionalidades

Ideas y mejoras planificadas para futuras versiones del portfolio:

### IA y Chatbot

- **Asistente Virtual Personal**: Bot conversacional integrado que responda preguntas sobre mi experiencia, habilidades, proyectos y disponibilidad
- **Integración con OpenAI/Claude**: Uso de APIs de IA para respuestas inteligentes y contextuales
- **Ventana de Chat Flotante**: Widget de chat accesible desde cualquier sección del portfolio
- **FAQ Inteligente**: Sistema que aprenda de las preguntas más frecuentes y mejore sus respuestas

### Performance y Accesibilidad

- **Multi-idioma**: Soporte completo en español e inglés
- **Modo Alto Contraste**: Mejor accesibilidad para usuarios con discapacidad visual
- **Optimización SEO**: Meta tags dinámicos, sitemap, schema.org

## 🎨 Personalización

### Colores y Tema

Modificar en `src/index.css`:

- Variables CSS en `:root` y `.dark`
- Colores primarios, fondos, bordes, etc.

### Animaciones

- Keyframes personalizadas en `src/index.css`
- Duración y timing en componentes individuales
- TailwindCSS utilities para transiciones

### Contenido

- Información personal en `Hero.jsx`
- Proyectos en `Projects.jsx`
- Habilidades en `Skills.jsx`
- Descripción en `About.jsx`

## 📱 Responsive Design

- **Mobile**: Optimizado para pantallas pequeñas
- **Tablet**: Layout adaptado para tablets
- **Desktop**: Experiencia completa con todas las características
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

⚠️ **Importante**: El archivo `.env` está en `.gitignore` y no se sube al repositorio.

### ESLint

Configuración en `eslint.config.js` con reglas estrictas para código limpio.

## 🤝 Contribuciones

Este es un proyecto personal en desarrollo activo. Para sugerencias o mejoras:

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/improvement`)
3. Commit cambios (`git commit -m 'Add improvement'`)
4. Push al branch (`git push origin feature/improvement`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Daniel Sánchez Vázquez**

- **Portfolio**: [https://portfolio-26.vercel.app](https://portfolio-26.vercel.app)
- **GitHub**: [@DaniSanchezDev](https://github.com/DaniSanchezDev)
- **Email**: danielsanchezvazquez5@gmail.com

---

**Última actualización**: Marzo 2026  
**Versión**: 1.2.0  
**Estado**: ✅ Funcional y en desarrollo activo
