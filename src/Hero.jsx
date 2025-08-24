import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import custom styles
import './Hero.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>

        <div className='small-text'>
          <p>MODERN EVERYDAY LOOKS</p>
          <h1>Soft Comfort Bold Looks</h1>
          <button className='btn'>Shop Collection</button>
        </div>
  <img 
    src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_s1.webp?v=1748226426&width=910" 
    alt="Product Banner" 
    style={{
      width: "100%",
      height: "90%",
      position: 'absolute',
    }}
    
  />
  {/* <img src='https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=720'/> */}
</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}
