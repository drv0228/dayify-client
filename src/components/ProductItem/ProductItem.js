import "./ProductItem.scss";
import { Link } from "react-router-dom";

function ProductItem({ product, onAddToCart, image, title, price }) {

  
  return (
    <>
      <div className="product__list">
        <Link to={`/product/${product.id}`} className="link__products">
          <img
            src={image}
            alt={`A product titled ${title} priced at ${price}`}
            className="product__image"
          />
        </Link>
        <div className="product__details">
          <Link to={`/product/${product.id}`} className="link__products">
            <p className="product__title">{title}</p>
          </Link>
          <p className="product__price">${price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="product__button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
