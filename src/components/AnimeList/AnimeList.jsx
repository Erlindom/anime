/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import '../AnimeList/animeList.css'
import axios from 'axios';
import TopAnime from '../TopAnime/TopAnime';

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetchAnime()
  }, [])

  async function fetchAnime() {
    const response = await axios.get("https://api.jikan.moe/v4/anime")
    setAnimeList(response.data.data);
  }

  return (
    <>
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
