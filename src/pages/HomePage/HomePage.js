import "./HomePage.scss";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = ({ cartItems, products, onAddToCart, refresh }) => {
  return (
    <main>
      {/* Display search results if available, otherwise, show all products */}
      <ProductList
        products={products ?? []}
        onAddToCart={onAddToCart}
        cartItems={cartItems}
        refresh={refresh}
      />
    </main>
  );
};

export default HomePage;
