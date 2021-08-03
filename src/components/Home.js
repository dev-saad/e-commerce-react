import { Link } from "react-router-dom";
import Collection from "./Collection";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import ProductSlides from "./ProductSlides";
import Services from "./Services";

const Home = ({ cartItems }) => {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((cartItem) => {
      count += cartItem.product.quantity;
    });
    return count;
  };
  return (
    <div>
      <Link to="/checkout">
        <div
          className={`fixed z-30 left-0 flex flex-col items-center justify-center bg-yellow-300 shadow-md w-20 h-20 p-3 transform transition-all duration-150 hover:scale-105 ${
            getCount() > 0 ? "translate-x-0" : "-translate-x-20"
          }`}
        >
          <span className="font-medium">{getCount()}</span>
          <span className="font-medium text-sm text-center">
            Product in cart
          </span>
        </div>
      </Link>

      <ProductDetails />
      <ProductSlides />
      <Collection />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
