# 🎓 Guía de Estudio para la Presentación Final

Este documento es un resumen rápido para que sepas exactamente dónde está cada funcionalidad cuando el profesor te pregunte. ¡Mucho éxito!

---

## 🚀 Puntos del Proyecto y su Ubicación

### **Punto 12: Búsqueda con Debounce**
*   **Archivo:** `src/App.jsx` (Líneas 32-37)
*   **Qué decir:** "Usamos un `useEffect` con un `setTimeout` de 300ms para que la búsqueda no se ejecute con cada tecla, sino cuando el usuario deja de escribir. Esto mejora el rendimiento".

### **Punto 13: Coloreo Dinámico de Filas**
*   **Archivo:** `src/App.jsx` (Línea 29) y `src/components/PlayerTable.jsx` (Líneas 24-30)
*   **Qué decir:** "El estado `rowColors` define si pintamos las filas pares o impares. En la tabla, usamos el índice del `.map()` para aplicar la clase de BEM correspondiente".

### **Punto 14: Paginación Dinámica**
*   **Archivo:** `src/App.jsx` (Líneas 58-62) y `src/components/Pagination.jsx`
*   **Qué decir:** "Calculamos qué jugadores mostrar según la página actual. Si el usuario busca algo nuevo, la app lo regresa automáticamente a la página 1 para evitar errores".

### **Punto 16: Modo Oscuro (useState + useEffect + localStorage)**
*   **Archivo:** `src/App.jsx` (Líneas 16, 66-73)
*   **Qué decir:** "Gestionamos el tema con un booleano. Usamos `useEffect` para guardar la elección en el `localStorage`, de modo que si refrescas la página, se mantiene tu preferencia".

### **Punto 17: Estadísticas en Tiempo Real (useMemo)**
*   **Archivo:** `src/components/StatsPanel.jsx` (Líneas 4-35)
*   **Qué decir:** "Usamos `useMemo` para calcular promedios y el máximo goleador. Esto asegura que los cálculos pesados solo se repitan si la lista de jugadores filtrados cambia".

### **Punto 18: Modal de Detalles (useState + Eventos)**
*   **Archivo:** `src/App.jsx` (Línea 23, 170) y `src/components/Modal.jsx`
*   **Qué decir:** "Al hacer clic en el ojo de la tabla, guardamos ese jugador en el estado `selectedPlayer` y el modal se abre automáticamente para mostrar su ficha técnica".

### **Punto 19: Sistema de Favoritos (useState + useEffect + localStorage)**
*   **Archivo:** `src/App.jsx` (Líneas 20, 81-96, 70-72)
*   **Qué decir:** "Permite marcar jugadores como favoritos desde la tabla o el modal. Los cambios se guardan en `localStorage` (en la clave `players_data`) para que sean persistentes".

### **Punto 20: Historial de Búsquedas (useState + useEffect)**
*   **Archivo:** `src/App.jsx` (Líneas 22, 40-47)
*   **Qué decir:** "Cada vez que el `debouncedSearch` cambia, agregamos el término a un array de historial. Limitamos la lista a las últimas 5 búsquedas para mantener la UI limpia".

### **Punto 21: Componentes Reutilizables (Arquitectura)**
*   **Ubicación:** Carpeta `src/components/`
*   **Qué decir:** "Dividimos la interfaz en componentes pequeños y especializados (Modal, Tabla, Buscador, etc.). Esto hace que el código sea fácil de mantener y escalar".

---

## 🎨 Metodologías de Diseño
*   **BEM:** Clases como `.player-table__row--even-colored` para evitar conflictos de estilos.
*   **Bootstrap 5:** Usamos el sistema de rejilla (`row`, `col`), botones y espaciado para que sea responsivo.
*   **SEO:** Configuramos las etiquetas `meta` en el `index.html` (autor, descripción, palabras clave).

---
**¡Dale con toda, Santiago! Tienes un proyecto excelente.**
