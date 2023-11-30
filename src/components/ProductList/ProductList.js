import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import ReactPaginate from "react-paginate";

const ProductList = ({
  products,
  onAddToCart,
  refresh,
  pagesVisited,
  productsPerPage,
  pageNumber,
  setPageNumber,
}) => {
  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => (
      <ProductItem
        key={product.id}
        productId={product.id}
        product={product}
        image={product.image}
        title={product.title}
        price={product.price}
        refresh={refresh}
        onAddToCart={onAddToCart}
      />
    ));

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Link to="/" className="allproducts__link" onClick={refresh}>
        <p className="allproducts__title">ALL PRODUCTS</p>
      </Link>
      <div className="allproducts__list">{displayProducts}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default ProductList;
