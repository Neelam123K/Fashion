import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbars/Navbar.jsx';
import Hero from "./Hero.jsx"
import ShopingCategary from './ShopingCategary.jsx';
import BestSales from './Components/BestSales.jsx';
import Popular from "./Populars/Popular.jsx";
import Carousel from './Components/Carousel.jsx';
import Shop from './Populars/Shop.jsx';
import Home from './Home.jsx';
function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/Shop" element={<Shop />} />
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
