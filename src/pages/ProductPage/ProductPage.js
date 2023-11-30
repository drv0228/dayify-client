import "./ProductPage.scss";
import { useParams, Link } from "react-router-dom";
// import ProductDetails from "../../components/ProductDetails/ProductDetails";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function ProductPage({ products, refresh }) {
  console.log("All Products:", products);
  const { productId } = useParams();

  const findProduct = products.find((product) => product.id == productId);
  // console.log("this is the productId: ", productId);
  // console.log("Found Product:", findProduct);
  if (!findProduct) {
    // Handle the case where the product is not found, e.g., redirect to a 404 page
    return <NotFoundPage />;
  }

  return (
    <main className="product-page">
      <Link to="/" className="allproducts__link" onClick={refresh}>
        <p className="allproducts__title">ALL PRODUCTS</p>
      </Link>

      <section className="section__product">
       
        <img
          className="display__product--details"
          src={findProduct?.image}
          alt="Selected Product's Picture"
        />
        <div>
          <h1 className="selectedProduct__title">{findProduct?.title}</h1>
          <div className="product__details">
            <div className="product__detail">
              <p className="selectedProduct__price">
                ${findProduct?.price}
              </p>
            </div>
            <div>
              {/* <div className="product__fav">
                <img
                  className="product__fav--icon"
                  src={favIcon}
                  alt="Icon that represent that the customer love the product so will be added to the favorite list of the client or for later products list"
                />
                {/* <p className="product__rate">{selectedProduct.rating.rate}</p> */}
              {/* </div> */}
            </div>
          </div>
          <p className="product__description">{findProduct?.description}</p>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
