import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import RecurringOrderPage from "./pages/RecurringOrderPage";
import StoreFront from "./pages/StoreFront";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<StoreFront />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/checkout" element={<CheckoutPage />} />
      <Route exact path="/order-tracking" element={<OrderTrackingPage />} />
      <Route exact path="/recurring-order" element={<RecurringOrderPage />} />
    </Routes>
  );
}

export default App;
