import { PlayerRow } from './PlayerRow';

export function PlayerTable({ players, rowColors, darkMode, onViewPlayer, onToggleFavorite, sortConfig, onSort }) {
  // Función para mostrar la flechita según el estado
  const getSortIcon = (key) => {
    if (sortConfig.key !== key || sortConfig.direction === 'none') return '';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <div className="table-responsive">
      <table className={`table ${darkMode ? 'table-dark' : 'table-light'} table-hover align-middle mb-0`}>
        <thead>
          <tr className="text-uppercase small">
            <th>Fav</th>
            <th onClick={() => onSort('name')} style={{ cursor: 'pointer' }}>Jugador{getSortIcon('name')}</th>
            <th>Club</th>
            <th onClick={() => onSort('position')} style={{ cursor: 'pointer' }}>Posición{getSortIcon('position')}</th>
            <th>País</th>
            <th onClick={() => onSort('age')} style={{ cursor: 'pointer' }}>Edad{getSortIcon('age')}</th>
            <th onClick={() => onSort('goals')} style={{ cursor: 'pointer' }}>Goles{getSortIcon('goals')}</th>
            <th>Asistencias</th>
            <th onClick={() => onSort('rating')} style={{ cursor: 'pointer' }}>Rating{getSortIcon('rating')}</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            const esPar = index % 2 === 0;
            let rowClass = "";

            if (rowColors === 'pares' && esPar) {
              rowClass = "player-table__row--even-colored";
            } else if (rowColors === 'impares' && !esPar) {
              rowClass = "player-table__row--odd-colored";
            }

            return (
              <PlayerRow 
                key={player.id} 
                player={player} 
                rowClass={rowClass} 
                onViewPlayer={onViewPlayer} 
                onToggleFavorite={onToggleFavorite}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
