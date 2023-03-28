import "bootstrap/dist/css/bootstrap.min.css";
import "react-datetime/css/react-datetime.css";
import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import StoreFront from "./pages/StoreFront";
import UserPage from "./pages/UserPage";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<StoreFront />} />
      <Route exact path="/users/signup" element={<AuthenticationPage />} />
      <Route exact path="/user" element={<UserPage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/checkout" element={<CheckoutPage />} />
      <Route exact path="/order-tracking" element={<OrderTrackingPage />} />
    </Routes>
  );
}

export default App;

// login = /users/login
// signup = /users/signup