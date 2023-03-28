import "bootstrap/dist/css/bootstrap.min.css";
import "react-datetime/css/react-datetime.css";
import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import StoreFront from "./pages/StoreFront";
import RecurringOrderPage from "./pages/RecurringOrderPage";
import RecurringOrderDetailsPage from "./pages/RecurringOrderDetailsPage";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<StoreFront />} />
      <Route exact path="/users/signup" element={<AuthenticationPage />} />
      <Route exact path="/recurring-order" element={<RecurringOrderPage />} />
      <Route exact path="/recurring-order/:id" element={<RecurringOrderDetailsPage />} />
      <Route exact path="/checkout" element={<CheckoutPage />} />
      <Route exact path="/order-tracking" element={<OrderTrackingPage />} />
    </Routes>
  );
}

export default App;

// login = /users/login
// signup = /users/signup