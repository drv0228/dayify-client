import "./MyShoppingCart.scss";
import CartItems from "../../components/CartItems/CartItems";
import Modal from '../../components/Modal/Modal';

const MyShoppingCart = ({cartItems, onRemoveFromCart, refresh, onClose, isModalOpen }) => {
  const totalProducts = cartItems.length;
  return (
    <>
    
      {isModalOpen && (
         <Modal onClose={onClose} refresh={refresh}>
      <p className="cart__products">Products in Cart</p>
      <p className="products__amount">{totalProducts}</p>
      <div className="cart-items-container">
      <div className="products-list">
        {totalProducts > 0 ? (
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
        <h1>Uff, your cart is empty!</h1>
    
        )}
        </div>
       
      </div>
      
      </Modal>
      
      )}
      
    </>
  );
};

export default MyShoppingCart;
