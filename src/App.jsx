import Navbar from './components/navbar/navbar/Navbar.jsx';
import Cart from './components/navbar/cart/Cart.jsx';
import Main from './components/navbar/main/Main.jsx';
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
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
      </Router>

    </>
  )
}




