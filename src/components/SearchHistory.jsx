export function SearchHistory({ history, onHistoryClick }) {
    return (
        <div className="bg-white p-3 rounded shadow-sm h-100 d-flex flex-column">
            <p className="text-uppercase text-secondary fw-bold mb-2" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Historial de búsquedas</p>
            <div className="d-flex gap-2 flex-wrap">
                {history.length === 0 ? (
                    <small className="text-muted">No hay búsquedas recientes.</small>
                ) : (
                    history.map((term, index) => (
                        <span key={index} className="badge bg-light text-dark border p-2"
                            style={{ cursor: 'pointer' }}
                            onClick={() => onHistoryClick(term)} // Al hacer clic, busca esta palabra
                        ><i className="bi bi-search me-1"></i>{term}</span>
                    ))
                )}
            </div>
        </div>
    );
}

