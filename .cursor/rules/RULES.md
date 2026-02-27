---
description: Estándares de código para el portfolio personal
alwaysApply: true
---

# Estándares generales del proyecto

- **Lenguaje principal**: Usar React con componentes funcionales y Hooks.
- **Estilo visual**: Mantener un diseño limpio, minimalista y con tema oscuro por defecto.
- **Responsive**: Cualquier nueva sección o componente debe verse bien en móvil, tablet y escritorio.
- **Rendimiento**: Evitar cálculos costosos en cada render; usar inicializadores de `useState`, `useMemo` o `useCallback` cuando tenga sentido.

# Convenciones de React

- **Componentes**:
  - **Nombre**: PascalCase (`StarBackground`, `Home`, `AboutMe`).
  - **Tipo**: Siempre componentes funcionales, no clases.
  - **Props**: Tipar y documentar props importantes (usando JSDoc o TypeScript si se introduce después).
- **Estado**:
  - Generar datos "pesados" dentro del inicializador de `useState` (como en `StarBackground`) para que se ejecuten solo una vez.
  - Evitar estados innecesarios si algo se puede derivar de props o de otros estados.

# TailwindCSS y clases

- **Uso de clases**:
  - Priorizar clases utilitarias de Tailwind para layout, spacing y colores.
  - Mantener las clases legibles, agrupando por tipo (posición, tamaño, color, animación).
- **Animaciones**:
  - Definir animaciones globales (como `meteor`, `pulse`, etc.) en los ficheros de estilos/Tailwind en lugar de inline siempre que sea posible.
  - Reutilizar clases para estrellas, meteoritos y otros elementos animados, evitando duplicar estilos.

# Organización del código

- **Estructura de carpetas**:
  - `src/components`: Componentes reutilizables (como `StarBackground`).
  - `src/pages`: Páginas principales (`Home`, `Projects`, etc.).
  - Mantener los nuevos componentes en la carpeta correspondiente y evitar crear carpetas sin necesidad.
- **Nombres descriptivos**:
  - Usar nombres claros para componentes, funciones y variables (`generateStars`, `generateMeteors`, `numberOfStars`, etc.).
  - Evitar abreviaturas crípticas.

# Buenas prácticas de animación y rendimiento

- **Cálculo de elementos gráficos**:
  - Calcular el número de elementos en función del tamaño de pantalla para equilibrar estética y rendimiento.
  - Limitar la cantidad de elementos animados (por ejemplo, número fijo o máximo de meteoritos).
- **Animaciones CSS**:
  - Usar animaciones suaves, con duraciones y delays variados para dar naturalidad.
  - Evitar animaciones que bloqueen el hilo principal o que afecten al scroll.

# Calidad de código y herramientas

- **ESLint**:
  - No desactivar reglas de ESLint sin un motivo claro.
  - Corregir advertencias y errores antes de hacer commit.
- **Consistencia**:
  - Seguir siempre el mismo estilo de comillas, sangrado y formato (apoyarse en Prettier si está configurado).
  - Mantener el código limpio, sin `console.log` innecesarios en producción.

# Documentación

- **README**:
  - Mantener el `README` actualizado cuando se añadan secciones nuevas importantes (nuevas páginas, cambios en el stack, nuevos comandos).
- **Comentarios**:
  - Solo añadir comentarios para explicar decisiones no obvias (p.ej. por qué se limita el número de meteoritos), no para describir lo que ya se entiende leyendo el código.
