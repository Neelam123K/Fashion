import React from "react";
import "./shoppingCategory.css";

function ShoppingCategory() {
  const categories = [
    {
      name: "Denim",
      img: "https://demo-milano.myshopify.com/cdn/shop/files/main_clt3.webp?v=1745943972&width=550",
      link: "/denim",
    },
    {
      name: "Blazers",
      img: "https://demo-milano.myshopify.com/cdn/shop/files/main_clt2.webp?v=1745943972&width=360",
      link: "/blazers",
    },
    {
      name: "Crop-top",
      img: "https://demo-milano.myshopify.com/cdn/shop/files/main_clt1.webp?v=1745943972&width=360",
      link: "/crop-top",
    },
    {
      name: "Sweaters",
      img: "https://demo-milano.myshopify.com/cdn/shop/files/main_clt4.webp?v=1745943972&width=360",
      link: "/sweaters",
    },
    {
      name: "T-Shirts",
      img: "https://demo-milano.myshopify.com/cdn/shop/files/main_clt5.webp?v=1745943972&width=550",
      link: "/tshirts",
    },
  ];

  const nav = [
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/fs_new_1.webp?v=1748226426&width=720",
      title: "Colour Spotlight",
      subtitle: "SAVE 30–50% BLAZERS",
      link: "/blazers",
    },
    {
      img: "https://demo-milano.myshopify.com/cdn/shop/files/fs_new_2.webp?v=1748226426&width=720",
      title: "Confident Looks",
      subtitle: "LIMITED TIME ONLY",
      link: "/new-arrivals",
    },
  ];

  return (
    <div className="shopping-category">
      <h2>Shop By Category</h2>
      <p>
        Express your style with our standout collection — fashion meets
        sophistication.
      </p>

      {/* Categories */}
      <div className="category-list">
        {categories.map((cat, index) => (
          <a
            key={index}
            href={cat.link}
            className="category-item"
          >
            <img src={cat.img} alt={cat.name} className="category-image" />
            <p className="category-name">{cat.name}</p>
          </a>
        ))}
      </div>

      {/* Promo Banners */}
      <div className="nav-list">
        {nav.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="nav-item"
          >
            <img src={item.img} alt={item.title} className="nav-image" />
            <div className="nav-overlay">
              <p className="nav-sub">{item.subtitle}</p>
              <h3 className="nav-title">{item.title}</h3>
              <span className="nav-button">Shop Now</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCategory;
