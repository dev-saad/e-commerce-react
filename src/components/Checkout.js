import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = ({ cartItems, user }) => {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.product.price * cartItem.product.quantity;
    });
    return total;
  };
  const getCount = () => {
    let count = 0;
    cartItems.forEach((cartItem) => {
      count += cartItem.product.quantity;
    });
    return count;
  };
  return (
    <div className="w-full p-10">
      <div className="w-full flex justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-xl text-primary mb-5">Products</h4>
          {cartItems.map((cartItem) => (
            <CheckoutProduct
              description={cartItem.product.description}
              picture={cartItem.product.picture}
              price={cartItem.product.price}
              quantity={cartItem.product.quantity}
              id={cartItem.id}
              key={cartItem.id}
              user={user}
            />
          ))}
        </div>
        <div>
          <Subtotal getCount={getCount()} getTotalPrice={getTotalPrice()} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
