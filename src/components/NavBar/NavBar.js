import "./NavBar.scss";
import React, { useState, useEffect } from "react";

import phone from "../../assets/images/store-number.svg";
import logo from "../../assets/icons/dayify-logo.svg";
import arrow from "../../assets/icons/arrow.svg";
import login from "../../assets/images/my-account.svg";
import cart from "../../assets/images/cart.svg";

import SearchBar from "../../components/SearchBar/SearchBar";

import { Link } from "react-router-dom";

function NavBar({ refresh, onSearch, openModal, openCategoryModal }) {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__container1">
        <img
          className="nav-bar__image"
          src={phone}
          alt={`image with store's customer service phone number`}
        />
      </div>

      <div className="nav-bar__container2">
        <Link to="/" className="nav-bar__link">
          <img
            className="logo__image"
            src={logo}
            alt={`Logo that represent the company dayify`}
          />
        </Link>
        <ol className="nav-bar__list">
          <Link to={`/`} className="link__products" onClick={openCategoryModal}>
            
            <li className="list__item">Categories
            <img
            className="categories__icon"
            src={arrow}
            alt=""
          /></li>
          </Link>
          <li className="list__item">Deals</li>
          <li className="list__item">What's New</li>
        </ol>
        <div className="nav-bar__container3">
          <SearchBar onSearch={onSearch} />

          <img
            className="nav-bar__login"
            src={login}
            alt={`image with store's login access`}
          />

          <Link to={`/`} className="link__products" onClick={openModal}>
            <img
              className="nav-bar__cart"
              src={cart}
              alt={`image with store's shopping cart products`}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
