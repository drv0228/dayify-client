import "./ProductPage.scss";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductList from "../../components/ProductList/ProductList";

function ProductPage() {
    const { idFromParams } = useParams();
    const [products, setProducts] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
    let defaultProductId = idFromParams;

  
    const url = 'http://localhost:8086/products'
  
  useEffect(() => {
      async function getProducts() {
        try {
          const response = await axios.get(url);
          setProducts(response.data);
        } catch (error) {
          console.error("axios call failed", error);
        }
      }
  
      getProducts();
    }, []);

    const findProduct = products.find((product) => {
        return product.id === defaultProductId;
      });
  
    const handleSearch = (query) => {
      // Make a request to the server with the search query
      // Update the products state based on the search results
    };

  return (
    <main className="product-page">
        <section className="page__section1"><ProductDetails product={findProduct} /></section>
        {/* <section className="page__section2"><ProductList products={filteredProducts} /></section> */}
    </main>
  );
}

export default ProductPage;