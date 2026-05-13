import { useState, useEffect } from 'react';
import { initialPlayers } from './data/players';
import './index.css';

// Importamos todas nuestras piezas de lego :DD
import { ThemeToggle } from './components/ThemeToggle';
import { StatsPanel } from './components/StatsPanel';
import { SearchBar } from './components/SearchBar';
import { SearchHistory } from './components/SearchHistory';
import { PlayerTable } from './components/PlayerTable';
import { Pagination } from './components/Pagination';
import { Modal } from './components/Modal';

function App() {
  // Aquí guardaremos el estado de nuestra aplicación (si es modo oscuro o claro)
  const [darkMode, setDarkMode] = useState(false);

  // cerebro de nuestra aplicacion :D
  const [players, setPlayers] = useState(initialPlayers);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [history, setHistory] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  // punto 14: Paginacion dinamica 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  //Por defecto 5  
  // Punto 13 - Estado para colorear filas
  const [rowColors, setRowColors] = useState('none'); // 'none', 'pares', 'impares'

  // === PUNTO 12: Búsqueda con Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Cuando buscamos algo, regresar a la página 1 automáticamente y guardar en el historial (Punto 14)
  useEffect(() => {
    setCurrentPage(1);

    if (debouncedSearch.trim() !== "" && !history.includes(debouncedSearch)) {
      // Tomamos el historial anterior, agregamos la nueva búsqueda al inicio, 
      // y cortamos a un máximo de 5 elementos para que no crezca al infinito
      setHistory(prevhistory => [debouncedSearch, ...prevhistory].slice(0, 5));
    }

  }, [debouncedSearch]);

  // Filtramos a los jugadores usando el valor "debounced"
  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );


  // === CÁLCULOS MATEMÁTICOS DE PAGINACIÓN ===
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Estos son los jugadores cortados que realmente se verán en la tabla
  const currentPlayers = filteredPlayers.slice(indexOfFirstItem, indexOfLastItem);

  // 1. Al cargar la página, recuperar la preferencia guardada
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);

  // 2. Cada vez que cambie darkMode, guardarlo en el navegador
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Función para alternar el modo oscuro
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // NUEVO: Función para marcar/desmarcar favoritos
  const toggleFavorite = (playerId) => {
    setPlayers(prevPlayers => 
      prevPlayers.map(player => {
        if (player.id === playerId) {
          const updatedPlayer = { ...player, isFavorite: !player.isFavorite };
          
          // Truco: Si el modal está abierto con este mismo jugador, también actualizamos el modal
          if (selectedPlayer && selectedPlayer.id === playerId) {
            setSelectedPlayer(updatedPlayer);
          }
          return updatedPlayer;
        }
        return player;
      })
    );
  };

  return (
    <div className={`min-vh-100 pb-5 ${darkMode ? 'bg-black text-white' : 'bg-light text-dark'}`} style={{ transition: 'all 0.3s' }}>
      
      <div className="container pt-4">
        {/* 1. Cabecera Header (Dentro del container para que tenga márgenes) */}
        <header className="dashboard-header p-4 shadow-lg text-white">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '2px' }}>TOP CLUB SOCCER</span>
              <h1 className="fw-bold m-0" style={{ fontSize: '2.5rem' }}>Dashboard de Jugadores</h1>
              <p className="text-light opacity-75 m-0 small">Gestiona tus estrellas favoritas, analiza estadísticas y descubre talentos.</p>
            </div>
            <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />
          </div>
        </header>

        {/* 2. Cuerpo del Dashboard (Fondo gris oscuro del centro) */}
        <main className={`dashboard-body p-4 shadow-lg ${darkMode ? '' : 'bg-white text-dark'}`}>
          
          {/* Buscador */}
          <div className="mb-4">
            <SearchBar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              resultCount={filteredPlayers.length} 
            />
          </div>

          {/* Panel de Estadísticas e Historial */}
          <div className="d-flex gap-4 w-100 mb-4 align-items-stretch">
            <StatsPanel players={filteredPlayers} />
            <div className="d-flex flex-column justify-content-center" style={{ flex: '1 1 0' }}>
              <SearchHistory history={history} onHistoryClick={(search) => setSearchTerm(search)} />
            </div>
          </div>

          {/* Botones de Coloreo */}
          <div className="mb-3 d-flex gap-2">
            <button className={`btn btn-outline-warning btn-sm ${rowColors === 'pares' ? 'active' : ''}`} onClick={() => setRowColors('pares')}>Pintar filas pares</button>
            <button className={`btn btn-outline-warning btn-sm ${rowColors === 'impares' ? 'active' : ''}`} onClick={() => setRowColors('impares')}>Pintar filas impares</button>
            <button className={`btn btn-outline-secondary text-white btn-sm ${rowColors === 'none' ? 'active' : ''}`} onClick={() => setRowColors('none')}>Limpiar color</button>
          </div>

          {/* Tabla de Jugadores */}
          <div className="card shadow-sm mb-4 border-0 rounded-3 overflow-hidden">
            <div className={`card-body p-0 ${darkMode ? 'bg-secondary text-white' : ''}`}>
              <PlayerTable 
                players={currentPlayers} 
                rowColors={rowColors} 
                darkMode={darkMode} 
                onViewPlayer={(jugador) => setSelectedPlayer(jugador)} 
                onToggleFavorite={toggleFavorite}
              />
            </div>
          </div>

          {/* Paginación */}
          <div className="mb-2">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              totalItems={filteredPlayers.length}
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
            />
          </div>
        </main>
      </div>

      {/* Modal */}
      <Modal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} onToggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;