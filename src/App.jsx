import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbars/Navbar.jsx';
import Hero from "./Hero.jsx"
import ShopingCategary from './ShopingCategary.jsx';
import BestSales from './Components/BestSales.jsx';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopingCategary />
      <BestSales />
    </div>
  );
}

export default App;
