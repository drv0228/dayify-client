import "./NavBar.scss";
import logo from "../../assets/icons/logo.png";
import MyShoppingCart from "../../assets/icons/my-cart.png";

import MyCartPage from "../../pages/MyShoppingCart/MyShoppingCart";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      {/* <div className="logo__container"> */}
      {/* <p className="logo__text">dayify</p> */}
      <div className="logo__image"></div>
       {/* <img className="logo__image"
          src={logo}
          alt={`Logo that represent the company dayify`}
        />  */}

      <div className="nav-bar__container">
      {/* <div className="nav-bar__search"> */}
      <input className="nav-bar__input" placeholder="Search in the shop" />
      {/* </div> */}
      </div>
      {/* <div className="nav-bar__cart"></div> */}
      <div className="nav-bar__image"></div>
        {/* <img src={MyShoppingCart}
          alt={`image that represent the shopping cart to clients add products to buy in dayify`} className="nav-bar__image"/> */}
      
    </nav>
  );
}
export default NavBar;