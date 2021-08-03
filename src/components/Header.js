import { Button } from "@material-ui/core";
import {
  LocalMallOutlined,
  PersonOutlineRounded,
  SearchOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems, user, signOut }) => {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const getCount = () => {
    let count = 0;
    cartItems.forEach((cartItem) => {
      count += cartItem.product.quantity;
    });
    return count;
  };
  return (
    <div className="flex justify-between items-center p-10 transform origin-center z-50">
      <Link
        to="/"
        className={`font-mono text-primary font-bold text-3xl flex-shrink w-1/2 leading-none ${
          shrinkHeader
            ? "transform translate-x z-0 invisible scale-0 origin-right transition-all duration-500"
            : "transform -translate-x-0 z-1 visible scale-100 origin-right transition-all duration-500"
        }`}
      >
        <h1>Rainbow</h1>
      </Link>

      <div
        className={`h-4 p-1 flex flex-col justify-between cursor-pointer children:block children:border children:w-4 children:border-gray-800 children:rounded-3xl z-50 ${
          shrinkHeader
            ? "transform rotate-180 transition-all duration-300"
            : "transform -rotate-180 transition-all duration-300"
        }`}
        onClick={() => setShrinkHeader(!shrinkHeader)}
      >
        <span></span>
        <span></span>
      </div>
      <div
        className={`w-1/2 flex justify-end items-center children:mx-2 children:cursor-pointer children:text-primary z-50 ${
          shrinkHeader
            ? "transform -translate-x z-0 invisible scale-0 origin-left transition-all duration-500"
            : "transform -translate-x-0 z-1 visible scale-100 origin-left transition-all duration-500"
        }`}
      >
        <SearchOutlined fontSize="medium" />
        <div className="h-6 flex justify-center items-center relative group z-50">
          <div className="h-6 flex justify-center items-center">
            <PersonOutlineRounded fontSize="medium" className="" />
          </div>
          <div
            className="absolute top-8 -right-10 bg-yellow-200 w-48 h-36 p-3 z-50 flex flex-col justify-between items-start transform translate-y-6 invisible opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible
            transition-all
            duration-300
          cursor-default"
          >
            <div className="children:block flex-1 border-b border-gray-800 w-full">
              <span className="font-medium text-primary">{user.name}</span>
              <span className="font-medium text-xs text-secondary whitespace-pre-wrap">
                {user.email}
              </span>
            </div>
            <Button
              className="w-full mt-4 font-semibold text-primary bg-gray-50 bg-opacity-40"
              onClick={signOut}
            >
              Log out
            </Button>
          </div>
        </div>
        <Link to="/checkout">
          <div className="leading-none flex justify-center items-center relative children:top-1 children:right-0 children:text-primary">
            <LocalMallOutlined fontSize="small" />
            {getCount() > 0 && (
              <>
                <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-purple-400 opacity-75"></span>
                <span className="absolute inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
