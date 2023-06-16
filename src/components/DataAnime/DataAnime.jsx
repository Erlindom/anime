import { useLocation, Link } from 'react-router-dom';
import "../DataAnime/dataAnime.css"

function DataAnime() {
  const location = useLocation();
  const item = location.state.item;
console.log(item);
  return (
    <>
      <h2>DataAnime</h2>
      <Link to="/">Volver al inicio</Link>
      <div className='content_data'>
        {item && (
          <div>
            <div>
              <p>Nombre: {item.title}</p>
              <p>Trailer</p>
            </div>
            <div className='side-info'>
              <div>
                <iframe src={item.trailer.embed_url} frameBorder="0" width={735} height={470} className='iframe-container'></iframe>
              </div>
              <div className='noticies'>
                <p>Noticias</p>
                {
               Array(5).fill().map(() => (
                // eslint-disable-next-line react/jsx-key
                <div className='box-notice'>
                  <img src={item.images.jpg.large_image_url} alt="" className='image_notice'/>
                  <div>
                    <p>Total de episodios: {item.episodes}</p>
                    <p>{item.source}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DataAnime;