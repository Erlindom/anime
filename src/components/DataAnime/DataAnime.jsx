import { useLocation, Link } from 'react-router-dom';

function DataAnime() {
  const location = useLocation();
  const anime = location.state.anime;

  return (
    <div>
      <h2>DataAnime</h2>
      <Link to="/">Volver al inicio</Link>
      {anime && (
        <div>
          <p>hola</p>
        </div>
      )}
    </div>
  );
}

export default DataAnime;