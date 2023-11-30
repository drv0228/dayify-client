// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import MyShoppingCart from "./pages/MyShoppingCart/MyShoppingCart";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoryModal from "./components/CategoryModal/CategoryModal";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import LoginModal from "./components/LoginModal/LoginModal"
import RegisterModal from "./components/RegisterModal/RegisterModal"

function App() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const categories = [
    "men's clothing",
    "women's clothing",
    "shoes",
    "jewelery",
    "electronics",
    "grocery",
    "Health Personal Care",
  ];

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

  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);

  const openRegisterModal = () => setRegisterOpen(true);
  const closeRegisterModal = () => setRegisterOpen(false);

  const openCategoryModal = () => setCategoriesOpen(true);
  const closeCategoryModal = () => setCategoriesOpen(false);

  return (
    <section className="home-page">
      <BrowserRouter>
        <NavBar
          refresh={handleRefresh}
          onSearch={handleSearch}
          openModal={openModal}
          openCategoryModal={openCategoryModal}
          openLoginModal={openLoginModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={searchResults.length > 0 ? searchResults : products}
                onAddToCart={handleAddToCart}
                refresh={handleRefresh}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                pagesVisited={pagesVisited}
                productsPerPage={productsPerPage}
              />
            }
          />
          <Route
            path="/:category"
            element={
              <CategoryPage
                products={searchResults.length > 0 ? searchResults : products}
                onAddToCart={handleAddToCart}
                refresh={handleRefresh}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                pagesVisited={pagesVisited}
                productsPerPage={productsPerPage}
              />
            }
          />
             <Route
            path="/product/:productId"
            element={
              <ProductPage
                products={searchResults.length > 0 ? searchResults : products}
                onAddToCart={handleAddToCart}
                refresh={handleRefresh}
              />
            }
          />
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
        {isCategoriesOpen && (
          <CategoryModal
            products={products}
            categories={categories}
            closeCategories={closeCategoryModal}
            isCategoriesOpen={isCategoriesOpen}
          />
        )}
          {isLoginOpen && (
          <LoginModal
            refresh={handleRefresh}
            closeLoginModal={closeLoginModal}
            isLoginOpen={isLoginOpen}
            openRegisterModal={openRegisterModal}
          />
        )}
          {isRegisterOpen && (
          <RegisterModal
            refresh={handleRefresh}
            closeRegisterModal={closeRegisterModal}
            openLoginModal={openLoginModal}
            isRegisterOpen={isRegisterOpen}
          />
        )}
        {/* <Footer /> */}
      </BrowserRouter>
    </section>
  );
}

export default App;
