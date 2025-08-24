import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./BestSales.css";

// import required modules
import { Navigation } from "swiper/modules";

function NewArrival({ Arrival }) {
  return (
    <section className="arrival-section">
      {Arrival.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="Arrival Banner" />
          <div className="arrival-overlay"></div>

          <div className="arrival-content">
            <p>{item.category}</p>
            <h2>{item.title}</h2>

            <div className="arrival-buttons">
              <a href="#">Read More</a>
              <a href="#">New Arrivals</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default function BestSales() {
  const best = [
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360",
      title: "High neck jumper",
      price: "$49.99",
      link: "/product/high-neck-jumper",
    },
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/preview_images/1c125896d5bd4a2cab0b37320373b210.thumbnail.0000000000.jpg?v=1752397862&width=360",
      title: "Basic blazer",
      price: "$89.99",
      link: "/product/basic-blazer",
    },
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315&width=360",
      title: "Belted blazer dress",
      price: "$129.99",
      link: "/product/belted-blazer-dress",
    },
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=720",
      title: "Zip neck jumper",
      price: "$59.99",
      link: "/product/zip-neck-jumper",
    },
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/6_5.webp?v=1742480969&width=360",
      title: "Flowing parka",
      price: "$39.99",
      link: "/product/classic-shirt",
    },
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651&width=360",
      title: "Short sleeve T-shirt",
      price: "$125.00",
      link: "/product/midi-dress",
    },
  ];

  const cool = [
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/fs_new_3.webp?v=1748226426&width=480",
      category: "DAYTIME STAPLES",
      title: "Cool & Confident",
      desc: "Crisp whites and sharp shades for your everyday power look.",
      link: "/shop/collection1",
    },
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/fs_new_4.webp?v=1748226426&width=480",
      category: "BOLD ESSENTIALS",
      title: "Golden Layers",
      desc: "Soft knits in rich tones—effortlessly stylish, endlessly wearable.",
      link: "/shop/collection2",
    },
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/fs_new_5.webp?v=1748226869&width=480",
      category: "SAVE 10–30% ON STATEMENT PIECES",
      title: "Modern Ease Unfolded",
      desc: "Effortless looks for every moment—from poolside to city strolls.",
      link: "/shop/collection3",
    },
  ];

  const Arrival = [
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/fs_new_hero.webp?v=1748226426&width=1370",
      category: "Our Philosophy",
      title:
        "We're on a mission to show the world that modern fashion can be both stylish and sustainable. Looking good doesn't have to cost the earth.",
    },
  ];

  return (
    <div className="best-sales">
      <h1>Best Selling</h1>
      <p>
        Unmatched design—superior performance and customer satisfaction in one.
      </p>

      {/* Swiper Slider for Products */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        className="mySwiper"
      >
        {best.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <a href={item.link} className="product-link">
                <img src={item.img} alt={item.title || "Product"} />
                {item.title && <h3>{item.title}</h3>}
                {item.price && <p className="price">{item.price}</p>}
                <span className="btn">View Product</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Cool Section */}
      <div className="cool-section">
        {cool.map((item, index) => (
          <div className="cool-card" key={index}>
            <img src={item.img} alt={item.title} className="cool-img" />
            <p className="cool-category">{item.category}</p>
            <h3 className="cool-title">{item.title}</h3>
            <p className="cool-desc">{item.desc}</p>
            <a href={item.link} className="cool-link">
              Shop Collection
            </a>
          </div>
        ))}
      </div>

      <NewArrival Arrival={Arrival} />
    </div>
  );
}

