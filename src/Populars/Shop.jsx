import React, { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchData() {
    let url = "https://api.escuelajs.co/api/v1/products";
    try {
      const res = await axios.get(url);

      // extract unique categories
      const uniqueCategories = [
        "all",
        ...new Set(res.data.map((product) => product.category.name)),
      ];

      setCategories(uniqueCategories);
      setProducts(res.data);
      setAllProducts(res.data);
    } catch (err) {
      console.log("error", err);
    }
  }

  function applyFilter(category = selectedCategory, price = selectedPrice, search = searchTerm) {
    let filtered = [...allProducts];

    // Category filter
    if (category !== "all") {
      filtered = filtered.filter(
        (product) => product.category.name === category
      );
    }

    // Price filter
    filtered = filtered.filter(
      (product) => product.price >= price[0] && product.price <= price[1]
    );

    // Search filter
    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setProducts(filtered);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Apply filters whenever category, price, or search changes
  useEffect(() => {
    if (allProducts.length) {
      applyFilter(selectedCategory, selectedPrice, searchTerm);
    }
  }, [selectedCategory, selectedPrice, searchTerm, allProducts]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to Shop</h1>

      {/* Search */}
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {/* Category filter */}
      <div>
        <label>Filter by Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price filter */}
      <div className="priceSelector" style={{ margin: "10px 0" }}>
        <label>Filter by Price: </label>
        <input
          type="range"
          min="0"
          max="1000"
          value={selectedPrice[1]}
          onChange={(e) => setSelectedPrice([0, Number(e.target.value)])}
        />
        <output>₹{selectedPrice[1]}</output>
      </div>

      {/* Products Grid */}
      <div
        className="products"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{product.title}</h3>
              <p
                style={{
                  fontSize: "10px",
                  height: "40px",
                  overflow: "hidden",
                  color: "gray",
                }}
              >
                {product.description.slice(0, 50)}
              </p>
              <p>₹{product.price}</p>
              <button
                style={{
                  backgroundColor: "#224EE0",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "30px",
                }}
              >
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1/-1", textAlign: "center" }}>
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Shop;
