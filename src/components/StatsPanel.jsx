import { useMemo } from 'react';

export function StatsPanel({ players }) {
    // === PUNTO 17: Cálculos con useMemo ===
    const stats = useMemo(() => {
        // Si no hay jugadores, devolvemos ceros
        if (!players || players.length === 0) {
            return { total: 0, avgGoals: 0, avgAge: 0, topScorer: null, positions: {}, favorites: 0 };
        }

        const total = players.length;
        let sumGoals = 0;
        let sumAge = 0;
        let topScorer = players[0];
        const positions = {};
        let favorites = 0;

        players.forEach(p => {
            sumGoals += p.goals;
            sumAge += p.age;
            if (p.isFavorite) favorites++;
            if (p.goals > topScorer.goals) topScorer = p;
            // Contamos la cantidad por posición para el gráfico
            positions[p.position] = (positions[p.position] || 0) + 1;
        });

        return {
            total,
            favorites,
            avgGoals: (sumGoals / total).toFixed(1),
            avgAge: Math.round(sumAge / total),
            topScorer,
            positions
        };
    }, [players]); // Solo se recalcula si la lista de jugadores cambia

    if (stats.total === 0) return <p>No hay jugadores para mostrar.</p>;

    // === DISEÑO BEM Y BOOTSTRAP (Idéntico a la imagen) ===
    return (
        <>

            {/* Tarjeta Amarilla (Jugadores y Favoritos) */}
            <div className="bg-warning text-dark p-3 rounded d-flex flex-column justify-content-center" style={{ flex: '1 1 0' }}>
                <p className="text-uppercase fw-bold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Jugadores en tabla</p>
                <h2 className="fw-bold mb-1">{stats.total}</h2>
                <div><span className="badge bg-dark rounded-pill">Favoritos: {stats.favorites}</span></div>
            </div>

            {/* Promedio de Goles */}
            <div className="p-3 d-flex flex-column justify-content-center" style={{ flex: '1 1 0' }}>
                <p className="text-uppercase text-secondary fw-bold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Promedio de Goles</p>
                <h4 className="fw-bold m-0">{stats.avgGoals}</h4>
            </div>

            {/* Promedio de Edad */}
            <div className="p-3 d-flex flex-column justify-content-center" style={{ flex: '1 1 0' }}>
                <p className="text-uppercase text-secondary fw-bold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Promedio de Edad</p>
                <h4 className="fw-bold m-0">{stats.avgAge} años</h4>
            </div>

            {/* Máximo Goleador (Tarjeta Oscura) */}
            <div className="bg-dark text-white p-3 rounded d-flex flex-column justify-content-center" style={{ flex: '1 1 0' }}>
                <p className="text-uppercase text-secondary fw-bold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Máximo Goleador</p>
                <h5 className="fw-bold m-0">{stats.topScorer.name}</h5>
                <small className="text-warning">{stats.topScorer.goals} goles</small>
            </div>

        </>
    );
}
