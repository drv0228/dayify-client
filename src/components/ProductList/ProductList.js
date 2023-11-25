import React from "react";
import "./ProductList.scss";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products, onAddToCart, refresh}) => {

 
 
  
  return (
    <>
       <Link to="/" onClick={refresh} className="allproducts__link">
        <p className="allproducts__title">ALL PRODUCTS</p>
      </Link>
      <div className="allproducts__list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            image={product.image}
            title={product.title}
            price={product.price}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
