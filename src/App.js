import React from 'react';
import './App.css';
import Header from '../src/Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Pages/Home';
import ShoppingCart from '../src/Components/Pages/cart/ShoppingCart';
import About from '../src/Components/Pages/About';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='cart' element={<ShoppingCart />}></Route>
      <Route path='about' element={<About />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
