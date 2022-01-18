import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing';
import Games from './Components/Games';
import Gifts from './Components/Gifts';
import Letter from './Components/Letter';
import Music from './Components/Music';
import Shows from './Components/Shows';
import Header from './Components/Header';

function App() {
  return (
    <Router>
    <div>
      <Header></Header>
      <Routes>
      <Route path = '/szbday2022/' exact element={<Landing/>}/>
      <Route path = '/szbday2022/games' exact element={<Games/>}/>
      <Route path = '/szbday2022/gifts' exact element={<Gifts/>}/>
      <Route path = '/szbday2022/letter' exact element={<Letter/>}/>
      <Route path = '/szbday2022/music' exact element={<Music/>}/>
      <Route path = '/szbday2022/shows' exact element={<Shows/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
