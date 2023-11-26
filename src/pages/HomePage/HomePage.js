import "./HomePage.scss";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = ({ cartItems, products, onAddToCart, refresh, pagesVisited, productsPerPage, pageNumber,  setPageNumber }) => {
  return (
    <main>
      {/* Display search results if available, otherwise, show all products */}
      <ProductList
        products={products ?? []}
        onAddToCart={onAddToCart}
        cartItems={cartItems}
        refresh={refresh}
        pagesVisited={pagesVisited}
        productsPerPage={productsPerPage}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </main>
  );
};

export default HomePage;
