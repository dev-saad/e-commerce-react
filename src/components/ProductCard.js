import { LocalMallOutlined, StarRounded } from "@material-ui/icons";
import db from "../firebase";

const ProductCard = ({ picture, price, description, reviews, id, user }) => {
  const addToCart = () => {
    const cartItem = db
      .collection("users")
      .doc(user.email)
      .collection("cartItems")
      .doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        cartItem.set({
          description,
          picture,
          price,
          reviews,
          quantity: 1,
        });
      }
    });
  };

  return (
    <div className="w-64 h-96">
      <div className="w-full h-5/6 overflow-hidden object-center flex justify-center items-center object-fit relative group">
        <img src={picture} alt="" className="h-auto w-full" />
        <button
          onClick={addToCart}
          className="w-full p-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 transition-all duration-300 flex justify-center items-center bg-yellow-100 bg-opacity-90 group-hover:translate-y-0 cursor-pointer text-primary"
        >
          <LocalMallOutlined />
          <span className="font-bold ml-2">Add To Cart</span>
        </button>
      </div>
      <p className="text-secondary text-base my-1 font-medium">{description}</p>
      <div className="flex justify-between items-center children:leading-none">
        <span className="block font-semibold">${price}</span>
        <span className="flex-1 text-right flex justify-end items-center text-sm text-tertiary children:mx-1">
          5.0
          <StarRounded style={{ fontSize: 17 }} />
        </span>
        <span className="block leading-none text-sm text-secondary font-medium">{`(${reviews})`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
