import React from "react";
import "./MyShoppingCart.scss";
import CartItems from "../../components/CartItems/CartItems";


const MyShoppingCart = ({cartItems, onRemoveFromCart, refresh }) => {


  console.log(cartItems);
  return (
    <>
      <p className="cart__products">Shopping Cart</p>
      <div className="products-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItems
              key={item.id}
              product={item}
              image={item.image}
              title={item.title}
              price={item.price}
              onRemoveFromCart={onRemoveFromCart}
              refresh={refresh}
            />
          ))
        ) : (
          <p>Uff, your cart is empty!</p>
        )}
      </div>
    </>
  );
};

export default MyShoppingCart;
