import React from 'react';
import "./Carousel.css"; // Import CSS

const Carousel = () => {
  const images = [
    { id: 1, src: "https://demo-milano.myshopify.com/cdn/shop/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915&width=50" },
    { id: 2, src: "https://demo-milano.myshopify.com/cdn/shop/files/13_1_5644aee9-7e1a-4296-baac-e448257d812c.webp?v=1742479315&width=50" },
    { id: 3, src: "https://demo-milano.myshopify.com/cdn/shop/files/15_1.webp?v=1752397915" },
    { id: 4, src: "https://demo-milano.myshopify.com/cdn/shop/files/fsn_i6.webp?v=1744451595&width=550" },
    { id: 5, src: "https://demo-milano.myshopify.com/cdn/shop/files/fsn_i1.jpg?v=1742270196&width=550" },
    { id: 6, src: "https://demo-milano.myshopify.com/cdn/shop/files/fs2_t2_1aaad4b0-4c65-42c0-ae84-f3ad2af0cd31.jpg?v=1742654216&width=550" },
  ];
  <video loop="true" muted="true" playsinline="true" autoplay="true" class="rounded" poster="//demo-milano.myshopify.com/cdn/shop/files/preview_images/044d27e84dea40c3bf076656842ef4c1.thumbnail.0000000000.jpg?v=1742658851&amp;width=1100" src="//demo-milano.myshopify.com/cdn/shop/videos/c/vp/044d27e84dea40c3bf076656842ef4c1/044d27e84dea40c3bf076656842ef4c1.HD-720p-3.0Mbps-44645405.mp4?v=0"></video>

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">@YourInstagram</h1>
      <div className="carousel-track">
        <div className="carousel-slide">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={`carousel-${img.id}`}
              className="carousel-image"
            />
          ))}
          {/* duplicate for infinite scroll effect */}
          {images.map((img) => (
            <img
              key={`dup-${img.id}`}
              src={img.src}
              alt={`carousel-dup-${img.id}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
