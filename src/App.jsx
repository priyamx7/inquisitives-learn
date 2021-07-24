import './App.css';
import React from 'react'
import { 
  Routes,
  Route,
  Link 
} from 'react-router-dom'
import vidliblogo from '../src/images/vidliblogo.png'
import Home from './pages/home'
import Likes from './pages/likes'
import Playlists from './pages/playlists'
import WatchLater from './pages/watchlater'
import Video from './pages/video'


function App() {
  return (
    <div className="App">
      <div className="navBar">
        <div className="navLogoAndTitle">
        <Link to="/"><img className="logoImg" src={vidliblogo} alt="logo" /></Link>
        </div>
        <div className="navOptions">
        <Link className="navOption" to="likes">Likes</Link>
        <Link className="navOption" to="playlists">Playlists</Link>
        <Link className="navOption" to="watchLater">Watch Later</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="likes" element={<Likes />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="watchLater" element={<WatchLater />} />
        <Route path="/video/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
