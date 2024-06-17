import { CartContextProvider} from "./context/cart.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Cart from './components/cart/Cart.jsx';
import Footer from "./components/footer/Footer.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage.jsx";

export default function App() {

  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage category="earbuds" />} />
          <Route path="/fitbit" element={<ProductPage category="fitbit" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}
