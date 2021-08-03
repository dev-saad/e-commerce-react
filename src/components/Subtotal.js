import NumberFormat from "react-number-format";

const Subtotal = ({ getTotalPrice, getCount }) => {
  return (
    <div className="p-3 max-w-md min-w-min shadow-md bg-opacity-20 bg-gray-100">
      <div className="border-b border-gray-300">
        <button className="w-full text-tertiary font-semibold py-1 border border-yellow-500">
          Place Order
        </button>
        <p className="font-medium text-sm text-secondary children:underline children:text-primary my-5">
          By placing your order you agree to our company
          <span> Privacy Policy</span> and <span>Condition of Use</span>
        </p>
      </div>
      <div className="py-5 border-b border-gray-300">
        <h5 className="text-xl font-medium text-primary mb-4">Order Summery</h5>
        <div>
          <p className="children:block flex justify-between items-center text-base font-medium text-secondary">
            <span>items ({getCount}):</span>
            <NumberFormat
              value={getTotalPrice}
              displayType="text"
              thousandSeparator={true}
              prefix="$"
            />
          </p>
        </div>
      </div>
      <div>
        <h6 className="text-lg font-semibold children:block flex justify-between items-center mt-5">
          <span>Order total: </span>
          <NumberFormat
            value={getTotalPrice}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
          />
        </h6>
      </div>
    </div>
  );
};

export default Subtotal;
