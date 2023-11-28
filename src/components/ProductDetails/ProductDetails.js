import "./ProductDetails.scss";
import likesIcon from "../../assets/icons/likes.svg";

function ProductDetails({ product, image, title, price, description }) {
  return (
    <>
      <section className="main">
        <img
          className="display__product"
          src={image}
          alt="Selected Product's Picture"
        />
        <div>
          <h1 className="selectedVideo__title">{title}</h1>
          <div className="video__details">
            <div className="video__detail">
              <p className="video__description--channel">{price}</p>
            </div>
            <div>
              <div className="video__like">
                <img
                  className="video__likes--icon"
                  src={likesIcon}
                  alt="Icon that represent the product's rating"
                />
                {/* <p className="video__likes">{selectedProduct.rating.rate}</p> */}
              </div>
            </div>
          </div>
          <p className="video__description">{description}</p>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
