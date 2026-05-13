export function SearchBar({ searchTerm, setSearchTerm, resultCount }) {
    return (
        <div className="text-start">
            <label className="text-uppercase text-secondary fw-bold small mb-2" style={{ letterSpacing: '1px' }}>
                Buscar Jugadores
            </label>
            <div className="input-group input-group-lg shadow-sm rounded overflow-hidden">
                <span className="input-group-text bg-warning border-0 text-dark">
                    🔍
                </span>
                <input
                    type="text"
                    className="form-control border-0 px-3"
                    placeholder="Escribe un nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Botón X que solo aparece si hay texto escrito */}
                {searchTerm && (
                    <button
                        className="btn btn-light border-0 text-secondary"
                        onClick={() => setSearchTerm('')}
                        title="Limpiar búsqueda"
                    >
                        ❌
                    </button>
                )}
            </div>
            <p className="text-muted small mt-2 fw-bold">Mostrando {resultCount} resultados</p>
        </div>
    );
}
