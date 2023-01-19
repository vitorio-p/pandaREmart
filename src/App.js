import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import StoreFront from "./pages/StoreFront";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<StoreFront/>} />
      <Route exact path="/cart" element={<CartPage/>} />
    </Routes>
  );
}

export default App;
