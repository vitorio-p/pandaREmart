import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import StoreFront from "./pages/StoreFront";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<StoreFront/>} />
      <Route exact path="/cart" element={<CartPage/>} />
      <Route exact path="/checkout" element={<CheckoutPage/>} />
    </Routes>
  );
}

export default App;
