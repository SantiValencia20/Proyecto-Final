# ⚽ Soccer Player Dashboard

## 📝 Descripción del Proyecto
Este proyecto es una aplicación web interactiva desarrollada con **React** que permite gestionar y visualizar estadísticas de jugadores de fútbol en tiempo real. La aplicación ofrece funcionalidades avanzadas como filtrado con *debounce*, paginación dinámica, un sistema de favoritos y un panel de estadísticas optimizado. El diseño sigue una estética premium utilizando **Bootstrap 5** y la metodología **BEM** para un CSS organizado.

---

## 💿 Instrucciones de Instalación

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
4.  **Abrir en el navegador:**
    Visita `http://localhost:5173` para ver la aplicación.

---

## 🎣 Hooks Utilizados y Propósito

*   **`useState`**: Utilizado para gestionar todos los estados dinámicos de la aplicación, como la lista de jugadores, el término de búsqueda, la página actual de la paginación, el historial de búsquedas y el jugador seleccionado para el modal.
*   **`useEffect`**: 
    *   Implementación de la técnica de **Debounce** para optimizar la búsqueda.
    *   Persistencia del **Modo Oscuro** (Theme) mediante `localStorage`.
    *   Sincronización del historial de búsqueda.
*   **`useMemo`**: Utilizado en el componente `StatsPanel` para realizar cálculos estadísticos (promedios, máximos goleadores) de forma eficiente, recalculándose únicamente cuando la lista de jugadores filtrados cambia.

---

## 🗂️ Estructura de Carpetas y Componentes

```text
src/
├── components/           # Componentes reutilizables
│   ├── Modal.jsx         # Ventana emergente de detalles
│   ├── Pagination.jsx    # Control de páginas
│   ├── PlayerRow.jsx     # Fila individual de la tabla
│   ├── PlayerTable.jsx   # Estructura de la tabla principal
│   ├── SearchBar.jsx     # Campo de entrada de búsqueda
│   ├── SearchHistory.jsx # Lista de búsquedas recientes
│   ├── StatsPanel.jsx    # Panel superior de estadísticas
│   └── ThemeToggle.jsx   # Botón de cambio de modo claro/oscuro
├── data/
│   └── players.js        # Dataset inicial de jugadores
├── App.jsx               # Componente principal (Cerebro de la App)
├── main.jsx              # Punto de entrada de React
└── index.css             # Estilos globales y BEM
```

---

## 📸 Capturas de Pantalla

*Próximamente se añadirán capturas de pantalla de las funcionalidades principales:*
*   *Dashboard Principal en Modo Oscuro*
*   *Buscador en acción e Historial*
*   *Modal de detalles de jugador*
*   *Estadísticas dinámicas*

---

## 👥 Integrantes
*   **Santiago Valencia Londoño** - Desarrollador Principal

---

## 🔗 Link al Deploy de Netlify
[🚀 Ver Aplicación en Vivo](https://tu-proyecto.netlify.app)

---

## 🤖 Créditos de IA
Este proyecto fue desarrollado con el apoyo de **Antigravity**, una IA potente diseñada por Google Deepmind para la asistencia en codificación avanzada.

---
**Desarrollado como proyecto final de práctica en React.**
