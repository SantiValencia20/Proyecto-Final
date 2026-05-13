export function Modal({ player, onClose, onToggleFavorite }) {
    // Si player es null, no dibujamos nada en pantalla
    if (!player) return null;

    return (
        // El fondo oscuro semitransparente
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0 shadow-lg">
                    
                    {/* Cabecera del modal */}
                    <div className="modal-header bg-dark text-white border-0 align-items-center">
                        <h5 className="modal-title fw-bold m-0">Detalles del Jugador</h5>
                        
                        <div className="ms-auto d-flex gap-3 align-items-center">
                            {/* NUEVO: Botón de favorito en el modal */}
                            <button 
                                className={`btn btn-sm ${player.isFavorite ? 'btn-warning text-dark' : 'btn-outline-warning text-white'}`}
                                onClick={() => onToggleFavorite(player.id)}
                            >
                                {player.isFavorite ? '★ Quitar Favorito' : '☆ Añadir Favorito'}
                            </button>
                            
                            {/* Botón de cerrar (la X) */}
                            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                        </div>
                    </div>

                    {/* Cuerpo del modal */}
                    <div className="modal-body text-center p-4">
                        <img src={player.image} alt={player.name} className="rounded-circle mb-3 shadow" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                        <h3 className="fw-bold">{player.name}</h3>
                        <p className="text-muted text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.9rem' }}>
                            {player.position}
                        </p>
                        
                        <div className="row mt-4">
                            <div className="col-4">
                                <h4 className="fw-bold text-primary mb-0">{player.age}</h4>
                                <small className="text-secondary">Años</small>
                            </div>
                            <div className="col-4 border-start border-end">
                                <h4 className="fw-bold text-success mb-0">{player.goals}</h4>
                                <small className="text-secondary">Goles</small>
                            </div>
                            <div className="col-4">
                                <h4 className="fw-bold text-warning mb-0">{player.rating || "N/A"}</h4>
                                <small className="text-secondary">Rating</small>
                            </div>
                        </div>
                    </div>

                    {/* Pie del modal */}
                    <div className="modal-footer bg-light border-0 justify-content-center">
                        <button type="button" className="btn btn-secondary px-4" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}