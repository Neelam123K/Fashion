import React from 'react';
import Hero from "./Hero.jsx"
import ShopingCategary from './ShopingCategary.jsx';
import BestSales from './Components/BestSales.jsx';
import Popular from "./Populars/Popular.jsx";
import Carousel from './Components/Carousel.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopingCategary />
      <BestSales />
      <Popular />
      <Carousel />
    </div>
  );
}

export default Home;
