import "./ProductPage.scss";
import { useParams, Link } from "react-router-dom";
// import ProductDetails from "../../components/ProductDetails/ProductDetails";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function ProductPage({ products, refresh }) {
  console.log("All Products:", products);
  const { productId } = useParams();

  // const findProduct = products.find((product) => {
  //   return product.id === productId;
  // });
  const findProduct = products.find((product) => product.id == productId);
  console.log("hiiii: ", productId);

  if (!findProduct) {
    // Handle the case where the product is not found, e.g., redirect to a 404 page
    return <NotFoundPage />;
  }

  // console.log("Product ID from params:", productId);
  // console.log("Found Product:", findProduct);

  return (
    <main className="product-page">
      <Link to="/" className="allproducts__link" onClick={refresh}>
        <p className="allproducts__title">ALL PRODUCTS</p>
      </Link>
      <section className="section__product">
        {/* <ProductDetails
          product={findProduct}
          title={findProduct.title}
          price={findProduct.price}
          image={findProduct.image}
          description={findProduct.description}
        /> */}
        <img
          className="display__product--details"
          src={findProduct?.image}
          alt="Selected Product's Picture"
        />
        <div>
          <h1 className="selectedProduct__title">{findProduct?.title}</h1>
          <div className="video__details">
            <div className="video__detail">
              <p className="selectedProduct__price">
                ${findProduct?.price}
              </p>
            </div>
            <div>
              {/* <div className="video__like">
                <img
                  className="video__likes--icon"
                  src={likesIcon}
                  alt="Icon that represent the product's rating"
                />
                {/* <p className="video__likes">{selectedProduct.rating.rate}</p> */}
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
