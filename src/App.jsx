import Navbar from './components/navbar//Navbar.jsx';
import Cart from './components/navbar/cart/Cart.jsx';
import Products from './components/products/Products.jsx';
import Footer from "./components/footer/Footer";
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';






export default function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products category="earbuds" />} />
          <Route path="/fitbit" element={<Products category="fitbit" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}




