# Portfolio Personal - Daniel Sánchez Vázquez

Portfolio web moderno, responsivo y totalmente funcional desarrollado con React y Vite. Showcasing de proyectos, habilidades técnicas y experiencia profesional con diseño elegante y animaciones fluidas.

## ✨ Características Principales

- **Diseño Moderno y Responsivo**: Interfaz limpia, minimalista y adaptada a todos los dispositivos
- **Animaciones Fluidas**: Fondo dinámico con estrellas parpadeantes y meteoritos, transiciones suaves en componentes
- **Tema Oscuro/Claro**: Toggle de tema integrado con persistencia
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

**Desarrollo:**

- ESLint (linting)
- CSS3 (animaciones)
- JavaScript ES6+

**Herramientas:**

- Git/GitHub (control de versiones)
- Figma (diseño)
- Cursor (desarrollo)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── StarBackground.jsx      # Fondo animado (estrellas + meteoritos)
│   ├── Navbar.jsx              # Barra de navegación sticky
│   ├── Hero.jsx                # Sección principal con presentación
│   ├── About.jsx               # Sección sobre mí
│   ├── Skills.jsx              # Carrusel interactivo de habilidades
│   ├── Projects.jsx            # Grid de proyectos con enlaces
│   ├── ThemeToggle.jsx         # Toggle de tema claro/oscuro
│   └── ...
├── pages/
│   ├── Home.jsx                # Página principal (integra todos los componentes)
│   └── NotFound.jsx            # Página 404
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
- Persistencia en localStorage
- Transición suave de colores

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

- ✅ **Hero**: Presentación principal con animaciones
- ✅ **About**: Información personal
- ✅ **Skills**: Carrusel interactivo de habilidades
- ✅ **Projects**: 3 proyectos destacados (Pawtopia, EcoVibe, AppFluence)
- ✅ **Navbar**: Navegación entre secciones
- ✅ **Theme Toggle**: Tema claro/oscuro

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

Crear `.env.local` si es necesario:

```env
VITE_APP_TITLE=Daniel Sánchez - Portfolio
```

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
**Versión**: 1.0.0  
**Estado**: ✅ Funcional y en desarrollo activo
