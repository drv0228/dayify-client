import React from "react";
import "./CategoryModal.scss";
import { NavLink, Link } from "react-router-dom";

import arrow from "../../assets/icons/arrow.svg";

const CategoryModal = ({ products, categories, closeCategories }) => {
  return (
    <div className="categories-overlay">
      <div className="categories__modal">
        <button className="close-button--categories" onClick={closeCategories}>
          <Link to="/" className="modal__link">
            X
          </Link>
        </button>
        <p className="categories">Categories</p>

        {categories.map((category) => (
          <NavLink
            key={category}
            to={"/" + category}
            className="categories__link"
            onClick={closeCategories}
          >
            {category}
            <img className="categories__icon--modal" src={arrow} alt="" />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryModal;
