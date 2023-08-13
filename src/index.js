import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Instagram from './pages/instagram';
import Marvel from './pages/marvel';
import PaginaPokemon from './pages/pokemon';
import Filmes from './pages/filmesQuery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/instagram' element={<Instagram/>}/>
        <Route path='/marvel' element={<Marvel/>} />
        <Route path='/pokemon' element={<PaginaPokemon/>} />
        <Route path='/imdbfilmes' element={<Filmes/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);