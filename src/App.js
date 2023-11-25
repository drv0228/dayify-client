// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import MyShoppingCart from "./pages/MyShoppingCart/MyShoppingCart";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const url = "http://localhost:8086/products";

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        console.error("axios call failed", error);
      }
    }

    getProducts();
  }, []);

  const handleSearch = async (query) => {
    try {
      // Make a request to the server with the search query
      const response = await axios.get(
        `http://localhost:8086/search?q=${query}`
      );
      // const data = await response.json();
      // Update the searchResults state based on the search results
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
  };

  const handleAddToCart = (product) => {
    // Add the selected product to the cart
    setCartItems([...cartItems, product]);
    console.log(cartItems);
  };

  const handleRemoveFromCart = (product) => {
    // Remove the selected product from the cart
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
    console.log(cartItems);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="home-page">
      <BrowserRouter>
        <NavBar
          refresh={handleRefresh}
          onSearch={handleSearch}
          openModal={openModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={searchResults.length > 0 ? searchResults : products}
                onAddToCart={handleAddToCart}
                refresh={handleRefresh}
              />
            }
          />
          {/* <Route path="product/:idFromParams" element={<ProductPage />} /> */}
          {/* <Route
            path="/my-shopping-cart"
            element={
              <MyShoppingCart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                refresh={handleRefresh}
                onClose={closeModal}
                isModalOpen={isModalOpen}
              />
            }
          /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* Render MyShoppingCart conditionally */}
        {isModalOpen && (
          <MyShoppingCart
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
            refresh={handleRefresh}
            onClose={closeModal}
            isModalOpen={isModalOpen}
          />
        )}
        {/* <Footer /> */}
      </BrowserRouter>
    </section>
  );
}

export default App;
