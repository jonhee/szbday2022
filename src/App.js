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
      <Route path = '/' exact element={<Landing/>}/>
      <Route path = '/games' exact element={<Games/>}/>
      <Route path = '/gifts' exact element={<Gifts/>}/>
      <Route path = '/letter' exact element={<Letter/>}/>
      <Route path = '/music' exact element={<Music/>}/>
      <Route path = '/shows' exact element={<Shows/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
