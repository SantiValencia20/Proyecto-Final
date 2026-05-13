export function Pagination({ currentPage, setCurrentPage, itemsPerPage, setItemsPerPage, totalItems, indexOfFirstItem, indexOfLastItem }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Evitar que el número final sea mayor que el total de elementos reales
    const currentLastItem = indexOfLastItem > totalItems ? totalItems : indexOfLastItem;

    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

            {/* Izquierda: Selector de Items y Texto Info */}
            <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center">
                    <label className="text-uppercase text-secondary fw-bold small me-2" style={{ letterSpacing: '1px', fontSize: '0.7rem' }}>Mostrar</label>
                    <select
                        className="form-select form-select-sm border-0 shadow-sm fw-bold"
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1); // Reset al cambiar cantidad
                        }}
                    >
                        <option value={5}>5 por página</option>
                        <option value={10}>10 por página</option>
                        <option value={20}>20 por página</option>
                    </select>
                </div>
                {totalItems > 0 && (
                    <span className="text-muted small fw-bold">
                        Mostrando {indexOfFirstItem + 1}-{currentLastItem} de {totalItems} registros
                    </span>
                )}
            </div>

            {/* Derecha: Botones de Navegación */}
            {totalPages > 1 && (
                <ul className="pagination pagination-sm m-0 shadow-sm">
                    {/* Primera */}
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link text-dark fw-bold" onClick={() => setCurrentPage(1)}>«</button>
                    </li>
                    {/* Anterior */}
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link text-dark fw-bold" onClick={() => setCurrentPage(currentPage - 1)}>‹</button>
                    </li>

                    {/* Números de página */}
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                                <button
                                    className={`page-link fw-bold ${currentPage === pageNumber ? 'bg-warning text-dark border-warning' : 'text-dark'}`}
                                    onClick={() => setCurrentPage(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            </li>
                        );
                    })}

                    {/* Siguiente */}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link text-dark fw-bold" onClick={() => setCurrentPage(currentPage + 1)}>›</button>
                    </li>
                    {/* Última */}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link text-dark fw-bold" onClick={() => setCurrentPage(totalPages)}>»</button>
                    </li>
                </ul>
            )}
        </div>
    );
}
