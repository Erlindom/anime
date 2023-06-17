import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AnimeList/animeList.css';
import axios from 'axios';
import TopAnime from '../TopAnime/TopAnime';
import { useDebounce } from 'use-debounce';
import Logo from "../img/logo.png"

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAnime();
  }, [debouncedSearch]);

  async function fetchAnime() {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${debouncedSearch}`);
    setAnimeList(response.data.data);
  }

  const animeSearch = (event) => {
    const searcher = event.target.value;
    setSearch(searcher);
  };

  const handleAnimeClick = (item) => {
    navigate(`/data-anime`, { state: { item } });
  };

  console.log(animeList);

  return (
    <>
      <nav className="nav">
        <img src={Logo} alt="" className='logo'/>
        <input
          type="search"
          placeholder="Buscar..."
          onChange={animeSearch}
          className='search'
        />
      </nav>
      <div className="contentpro">
        <TopAnime />
        <div>
          <h3>Lista de animes</h3>
          <div className="anime_container">
            {animeList.map((item) => (
              <div key={item.mal_id} className="anime" onClick={() => handleAnimeClick(item)}>
                <p>{item.title}</p>
                <img src={item.images.jpg.large_image_url} className="anime_img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeList;
