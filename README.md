# Prueba Técnica: Lista Filtrable

## Descripción

Este proyecto es una aplicación React con TypeScript que permite filtrar una lista de usuarios y mostrar detalles adicionales. Está optimizado para accesibilidad, modularidad y buenas prácticas de desarrollo.

## Decisiones Técnicas

1. **Modularidad**: Dividí la aplicación en componentes reutilizables (`SearchBar`, `UserList`, `UserDetails`, etc.). Más adelante se puede pensar en una arquitectura como por ejemplo, atom design.

2. **Optimización**:
   - `useMemo` para evitar cálculos innecesarios en el filtrado.
   - `React.memo` en componentes para prevenir re-renderizados.
  PD: El uso de estos en realidad no es tan necesario en una app tan pequeña ya antes que sumar resta, sin embargo en algunos de los componentes se implementó.

3. **Accesibilidad**:
   - Etiquetas semánticas (`<form>`, `<ul>`, `<li>`).
   - `aria-live` para notificar cambios dinámicos.
   - Navegación mediante teclado.

4. **Estilo**: Usé **TailwindCSS** para un diseño limpio, responsivo y consistente.

## Escalabilidad
- Implementación de paginación
- Soporte tema oscuro

## Cómo Ejecutar
1. Clonar el repositorio.
2. Instalar dependencias con `npm install`.
3. Ejecutar el proyecto con `npm run dev`.
---
