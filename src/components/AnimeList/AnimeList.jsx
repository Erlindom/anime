import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AnimeList/animeList.css';
import axios from 'axios';
import TopAnime from '../TopAnime/TopAnime';
import { useDebounce } from 'use-debounce';

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

  const handleAnimeClick = (anime) => {
    navigate(`/data-anime`, { state: { anime } });
  };

  console.log(animeList);

  return (
    <>
      <div className="search-box">
        <input
          type="search"
          placeholder="Search your anime"
          onChange={animeSearch}
        />
      </div>
      <div className="contentpro">
        <TopAnime />
        <div className="anime_container">
          {animeList.map((item) => (
            <div key={item.mal_id} className="anime" onClick={() => handleAnimeClick(item)}>
              <p>{item.title}</p>
              <img src={item.images.jpg.large_image_url} className="anime_img" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AnimeList;
