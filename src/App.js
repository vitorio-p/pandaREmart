import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import StoreFront from "./pages/StoreFront";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<StoreFront />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/checkout" element={<CheckoutPage />} />
      <Route exact path="/ordertrackingpage" element={<OrderTrackingPage />} />
    </Routes>
  );
}

export default App;
