import "./CategoryPage.scss";
import ProductList from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";

const CategoryPage = ({
  cartItems,
  products,
  onAddToCart,
  refresh,
  pagesVisited,
  productsPerPage,
  pageNumber,
  setPageNumber,
}) => {
  const { category } = useParams();

  const displayCategoryProducts = products.filter(
    (product) => product.category == category
  );

  return (
    <main>
      {/* Display search results if available, otherwise, show all products */}
      <ProductList
        products={displayCategoryProducts ?? []}
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

export default CategoryPage;
