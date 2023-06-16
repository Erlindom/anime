/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TopAnime/topAnime.css'
import axios from 'axios';

function TopAnime() {
  const [topAnime, setTopAnime] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopAnime();
  }, [])

  async function fetchTopAnime() {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime?q&limit=15")
    setTopAnime(response.data.data);
  }

  const handleClick = (item) => {
    navigate(`/data-anime`, { state: { item } });
  }

  return (
    <>{}
      <div className='nav-popular'>
        <h3>Más pupular</h3>
        {topAnime.map((item) => (
          <p key={item.mal_id} onClick={() => handleClick(item)}>{item.title}</p>
        ))}
      </div>
    </>
  )
}

export default TopAnime;
