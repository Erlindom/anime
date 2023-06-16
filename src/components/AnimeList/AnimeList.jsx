/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import '../AnimeList/animeList.css'
import axios from 'axios';
import TopAnime from '../TopAnime/TopAnime';
import { useDebounce } from "use-debounce";

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 500)

  useEffect(() => {
    fetchAnime()
  }, [debounceSearch])

  async function fetchAnime() {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${debounceSearch}`)
    setAnimeList(response.data.data);
  }

  const animeSearch = (event) => {
    const searcher = event.target.value;
    setSearch(searcher);
  }

  return (
    <>
    <div className="search-box">
      <input type="search" placeholder="Search your anime"
        onChange={animeSearch}
      />
    </div>
    <div className='contentpro'>
    <TopAnime />
      <div className='anime_container'>
        {animeList.map((item) => (
          <div key={item.mal_id} className='anime'>
            <p>{item.title}</p>
            <img src={item.images.jpg.large_image_url} className='anime_img'/>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default AnimeList;
