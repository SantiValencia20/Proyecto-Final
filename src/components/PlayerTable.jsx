import { PlayerRow } from './PlayerRow';

export function PlayerTable({ players, rowColors, darkMode, onViewPlayer, onToggleFavorite }) {
  return (
    <div className="table-responsive">
      <table className={`table ${darkMode ? 'table-dark' : 'table-light'} table-hover align-middle mb-0`}>
        <thead>
          <tr className="text-uppercase small">
            <th>Fav</th>
            <th>Jugador</th>
            <th>Club</th>
            <th>Posición</th>
            <th>País</th>
            <th>Edad</th>
            <th>Goles</th>
            <th>Asistencias</th>
            <th>Rating</th>
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
