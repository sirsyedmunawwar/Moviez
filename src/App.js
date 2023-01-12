import './App.css';
// import {CssBaseline} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Actors from './components/Actors/Actors';
import Movies from './components/Movies/Movies';  
import MoviesInformation from './components/MoviesInformation/MoviesInformation'; 
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
function App() {
  return (
   
    <BrowserRouter>
    
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Movies />} />
        <Route path='/movie/:id' element={<MoviesInformation />} />
        <Route path='/actors/:id' element={<Actors />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
   
  </BrowserRouter>
  );
}

export default App;
