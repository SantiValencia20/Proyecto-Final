export function PlayerRow({ player, index, rowClass, onViewPlayer, onToggleFavorite }) {
    return (
        <tr className={rowClass}>
            <td>
                <button 
                  className={`btn btn-sm ${player.isFavorite ? 'btn-warning' : 'btn-outline-warning'} rounded-1 p-1`}
                  onClick={() => onToggleFavorite(player.id)}
                >
                    <span style={{ fontSize: '0.8rem' }}>⭐</span>
                </button>
            </td>
            <td className="fw-bold">{player.name}</td>
            <td className="text-primary">{player.club}</td>
            <td className="text-danger">{player.position}</td>
            <td>{player.country}</td>
            <td>{player.age}</td>
            <td>{player.goals}</td>
            <td>{player.assists}</td>
            <td>{player.rating}</td>

            {/* NUEVO: La celda con el botón para ver al jugador */}
            <td>
                <button
                    className="btn btn-sm btn-outline-info"
                    onClick={() => onViewPlayer(player)}
                >
                    <i className="bi bi-eye"></i> Ver
                </button>
            </td>
        </tr>
    );
}
