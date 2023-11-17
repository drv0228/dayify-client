// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// import HomePage from "./pages/HomePage/HomePage";
// import MyShoppingCart from "./pages/MyShoppingCart/MyShoppingCart";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <section className="home-page">
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="product/:idFromParams" element={<HomePage />} /> */}
        {/* <Route path="/my-shopping-cart-page" element={<MyShoppingCart />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </section>
  );
}

export default App;
