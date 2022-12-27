import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import PopularProducts from "./PopularProducts";
import DeliveryBar from "./DeliveryBar";
import CartBar from "./CartBar";


function App() {
  return (
    <div className="container">
      <NavBar />
      <DeliveryBar />
      <PopularProducts />
      <CartBar />
    </div>
  );
}

export default App;
