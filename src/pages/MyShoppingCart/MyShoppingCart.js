import "./MyShoppingCart.scss";
import CartItems from "../../components/CartItems/CartItems";
import Modal from '../../components/Modal/Modal';

const MyShoppingCart = ({cartItems, onRemoveFromCart, refresh, onClose, isModalOpen }) => {
  const totalProducts = cartItems.length;
  function finalTotalAmount (array) {
    let sum = 0;
    for (let i=0; i < array.length; i++){
      sum += array[i].price;
    }
    return sum;
  }
  const totalAmount = finalTotalAmount(cartItems);

  return (
    <>
    
      {isModalOpen && (
         <Modal onClose={onClose} refresh={refresh}>
      <p className="cart__products">Products in Cart</p>
     
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
      
      <p className="products__amount">Subtotal  ({totalProducts}  Products)</p>
      <h2 className="products__total">${totalAmount}</h2>
      </Modal>
      
      )}
      
    </>
  );
};

export default MyShoppingCart;
