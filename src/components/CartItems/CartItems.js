import "./CartItems.scss";
import { Link } from "react-router-dom";

function CartItems({
  onRemoveFromCart,
  product,
  image,
  title,
  price
}) {
  return (
    <>
      <div className="product__list--cart">
        <Link to={`/product/${product.id}`} className="link__products">
          <img
            src={image}
            alt={`A product titled ${title} priced at ${price}`}
            className="product__image"
          />
        </Link>
        <div className="product__details">
          <p className="product__title">{title}</p>
          <p className="product__price">${price}</p>
          <button
            onClick={() => onRemoveFromCart(product)}
            className="product__button--remove"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
export default CartItems;
