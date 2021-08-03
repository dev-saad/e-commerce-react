import { Add, DeleteOutline, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import db from "../firebase";

const CheckoutProduct = ({
  description,
  picture,
  price,
  quantity,
  id,
  user,
}) => {
  const [animationClass, setAnimationClass] = useState("");
  const [itemQuantity, setItemQuantity] = useState(quantity);
  useEffect(() => {
    db.collection("users")
      .doc(user.email)
      .collection("cartItems")
      .doc(id)
      .update({
        quantity: itemQuantity,
      });
  }, [itemQuantity]);
  return (
    <div
      className={`px-4 transform transition-all duration-500 ${animationClass}`}
    >
      <div className="flex items-start py-10 border-b border-gray-400 relative">
        <div className="max-w-xs w-32 min-w-min max-h-full h-32 min-h-0 border flex justify-center">
          <img className="h-full w-full object-contain" src={picture} alt="" />
        </div>
        <div className="flex justify-between items-start ml-3 h-32 w-full">
          <div className="h-full flex flex-col justify-evenly">
            <p className="font-medium">{description}</p>
            <span className="font-medium text-secondary text-sm block">
              Price: ${price}
            </span>
          </div>
          <div className="ml-5 children:font-medium text-sm text-secondary h-32 flex flex-col justify-evenly">
            <div className="flex justify-center items-center children:block">
              <span className="text-primary mr-2">Quantity: </span>
              <Remove
                className="p-1 border border-gray-400 cursor-pointer"
                onClick={() =>
                  setItemQuantity(
                    itemQuantity === 0 ? itemQuantity : itemQuantity - 1
                  )
                }
              />
              <span className="block w-6 h-6 border-gray-400 text-center  border">
                {itemQuantity}
              </span>
              <Add
                className="p-1 border border-gray-400 cursor-pointer"
                onClick={() => setItemQuantity(itemQuantity + 1)}
              />
            </div>
            <span>Total: ${price * itemQuantity}</span>
          </div>
        </div>
        <DeleteOutline
          onClick={() => {
            setTimeout(() => {
              db.collection("users")
                .doc(user.email)
                .collection("cartItems")
                .doc(id)
                .delete();
            }, 700);
            setAnimationClass("-translate-x-full opacity-0");
          }}
          className="absolute bottom-5 right-0 text-danger cursor-pointer hover:animate-pulse focus:animate-ping"
        />
      </div>
    </div>
  );
};

export default CheckoutProduct;
