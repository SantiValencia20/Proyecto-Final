# 📚 Bitácora de Aprendizaje: React Hooks y Persistencia

Este documento explica los conceptos fundamentales de React aplicados en este proyecto, utilizando ejemplos reales extraídos del código.

---

## a) ¿Qué es `useState` y cuándo usarlo?

**Explicación teórica:**
`useState` es un Hook que permite añadir el "estado" de React a componentes funcionales. Se usa para almacenar datos que, al cambiar, deben provocar que el componente se vuelva a renderizar (se actualice la vista).

**Ejemplos en el proyecto:**
1.  **Modo Oscuro:** Controla si la interfaz se ve clara u oscura.
    ```javascript
    const [darkMode, setDarkMode] = useState(false);
    ```
2.  **Lista de Jugadores:** Almacena el array principal de datos que se muestra en la tabla.
    ```javascript
    const [players, setPlayers] = useState(initialPlayers);
    ```
3.  **Término de Búsqueda:** Captura lo que el usuario escribe en tiempo real.
    ```javascript
    const [searchTerm, setSearchTerm] = useState("");
    ```

---

## b) ¿Qué es `useEffect` y sus casos de uso?

**Explicación del ciclo de vida:**
`useEffect` permite ejecutar "efectos secundarios" en componentes funcionales (peticiones a APIs, suscripciones, timers).
*   **`[]` (Array vacío):** Se ejecuta solo **una vez** al montar el componente (como `componentDidMount`).
*   **`[dep]` (Con dependencias):** Se ejecuta al montar y **cada vez que la dependencia cambie**.
*   **Sin array:** Se ejecuta en **cada renderizado**.

**Ejemplo de Cleanup Function:**
Se usa para "limpiar" procesos antes de que el componente se destruya o el efecto se vuelva a ejecutar.
```javascript
useEffect(() => {
    const timer = setTimeout(() => { /* lógica */ }, 300);
    return () => clearTimeout(timer); // <--- Cleanup function
}, [searchTerm]);
```

---

## c) ¿Qué es `useMemo` y cuándo usarlo?

**Diferencia con `useCallback`:**
*   `useMemo`: Memoriza un **valor** calculado (un objeto, un array, un número).
*   `useCallback`: Memoriza una **definición de función** para evitar que se cree una nueva en cada render.

**Ejemplo de optimización en el proyecto:**
En `StatsPanel.jsx`, usamos `useMemo` para no recalcular las estadísticas (promedios, máximos) si la lista de jugadores no ha cambiado.
```javascript
const stats = useMemo(() => {
    // Cálculos pesados (promedios, búsquedas de goleador)
    return { avgGoals, avgAge, topScorer };
}, [players]); // Solo se recalcula si 'players' cambia
```

---

## d) ¿Cómo funciona el cleanup en `useEffect`?

**Explicación con el Debounce del proyecto:**
Cuando el usuario escribe "Messi", el `useEffect` lanza un cronómetro de 300ms. Si el usuario escribe la siguiente letra antes de que pasen esos 300ms, la **cleanup function** (`clearTimeout`) cancela el cronómetro anterior y empieza uno nuevo. Esto evita que se realicen 5 búsquedas seguidas, haciendo solo la última.

---

## e) ¿Cómo funciona `localStorage` con React?

**Ejemplo de persistencia:**
Usamos `localStorage` para que la preferencia de Modo Oscuro del usuario no se pierda al refrescar la página.

1.  **Lectura (al cargar):**
    ```javascript
    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        if (saved) setDarkMode(JSON.parse(saved));
    }, []);
    ```
2.  **Escritura (al cambiar):**
    ```javascript
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);
    ```

---

## 🤖 Créditos de IA
Este documento y el código asociado fueron desarrollados con la asistencia de **Antigravity**, una IA de codificación avanzada de Google Deepmind.

---
**Documento de aprendizaje para el Proyecto Final de React.**
