export function ThemeToggle({ darkMode, onToggle }) {
    return (
        <button
            className={`btn rounded-pill px-4 fw-bold ${darkMode ? 'btn-light text-dark' : 'btn-warning text-dark'}`}
            onClick={onToggle}
        >
            {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
    );
}
