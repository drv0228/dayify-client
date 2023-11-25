import "./NavBar.scss";
import phone from "../../assets/images/store-number.svg";
import logo from "../../assets/icons/dayify-logo.svg";
import login from "../../assets/images/my-account.svg";
import cart from "../../assets/images/cart.svg";

import SearchBar from "../../components/SearchBar/SearchBar";

import { Link } from "react-router-dom";

function NavBar({ refresh, onSearch }) {
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
          />{" "}
        </Link>

        <div className="nav-bar__container3">
          <SearchBar onSearch={onSearch} />

          <img
            className="nav-bar__login"
            src={login}
            alt={`image with store's login access`}
          />

          <Link to={`/my-shopping-cart`} className="link__products">
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
