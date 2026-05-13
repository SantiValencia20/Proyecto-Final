export function PlayerRow({ player, rowClass, onViewPlayer, onToggleFavorite }) {
  return (
    <tr className={rowClass}>
      <td>
        <span 
          style={{ cursor: 'pointer', fontSize: '1.2rem' }} 
          onClick={() => onToggleFavorite(player.id)}
        >
          {player.isFavorite ? '⭐' : '☆'}
        </span>
      </td>
      <td className="fw-bold">{player.name}</td>
      <td className="text-primary">{player.club}</td>
      <td><span className="badge bg-info text-dark">{player.position}</span></td>
      <td>{player.country}</td>
      <td>{player.age}</td>
      <td className="fw-bold text-success">{player.goals}</td>
      <td>{player.assists}</td>
      <td>
        <span className="badge bg-warning text-dark">{player.rating}</span>
      </td>
      <td>
        <button 
          className="btn btn-outline-primary btn-sm rounded-circle" 
          onClick={() => onViewPlayer(player)}
          title="Ver detalles"
        >
          👁️
        </button>
      </td>
    </tr>
  );
}
