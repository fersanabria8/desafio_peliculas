import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import './App.css';
import { Home } from './components/Home';
import { Populares } from './components/Populares';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={ <Home/>} />
        <Route exact path='/populares' element={ <Populares/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
