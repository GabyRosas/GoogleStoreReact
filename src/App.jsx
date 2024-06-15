import { CartContextProvider} from "./context/cart.jsx";
import Navbar from "./components/Navbar//Navbar.jsx";
import Cart from './components/Cart/Cart.jsx';
import ProductsPage from "./components/ProductsPage/ProductsPage.jsx";
import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsPage category="earbuds" />} />
          <Route path="/fitbit" element={<ProductsPage category="fitbit" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}
