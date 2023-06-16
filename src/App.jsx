import './App.css';
import AnimeList from './components/AnimeList/AnimeList';
import DataAnime from './components/DataAnime/DataAnime';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/data-anime" element={<DataAnime />} />
      </Routes>
    </Router>
  );
}

export default App;