import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Popular.css"; 


const Popular = () => {
  return (
    <div className="popular-container">
      <div className="popular-header">
        <h1>Popular Picks</h1>
        <p>
          Unmatched design—superior performance and customer satisfaction in one.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="product-list">
            <div className="product-sale">
              <img
                alt="sale"
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
              />
              <img
                alt="sale hover"
                className="over-image"
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_4_45faf918-dd6f-4e39-be59-dc66e7becead.webp?v=1742481531&width=660"
              />
            </div>
            <div className="product-details">
              <h2>High Neck Jumper</h2>
              <p>$250.00</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="product-list">
            <div className="product-sale">
              <video
                src="https://demo-milano.myshopify.com/cdn/shop/videos/c/vp/1c125896d5bd4a2cab0b37320373b210/1c125896d5bd4a2cab0b37320373b210.HD-1080p-2.5Mbps-51137723.mp4?v=0"
                autoPlay
                loop
                muted
                playsInline
                className="product-video"
              />
              <img
                alt="preview"
                src="https://demo-milano.myshopify.com/cdn/shop/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915"
              />
            </div>
            <div className="product-details">
              <h2>Basic Blazer</h2>
              <p>$225.00</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="product-list">
            <div className="product-sale">
              <img
                alt="sale"
                src="https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315"
              />
              <img
                alt="sale hover"
                className="over-image"
                src="https://demo-milano.myshopify.com/cdn/shop/files/13_7_5b152aaa-fad5-4d7d-bfbe-3f498bd4fe67.webp?v=1742479315&width=660"
              />
            </div>
            <div className="product-details">
              <h2>Belted Blazer Dress</h2>
              <p>$280.00</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Popular;
