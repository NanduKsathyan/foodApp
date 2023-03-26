import { Link } from "react-router-dom";
import { useOnline } from "../hooks/useOnline";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";
import logo from "../../public/assets/images/cart.png";

const Header = () => {
  let isOnline = useOnline();
  let { user } = useContext(UserContext);

  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-red-500">
      <img
        src="https://www.nicepng.com/png/full/310-3101740_chinese-food-logo-design-for-a-company-in.png"
        className="h-24 p-5"
      />

      <ul className="flex p-5 cursor-pointer text-white">
        <Link to="/">
          <li className="p-2 hover:text-yellow-300">Home</li>
        </Link>
        <Link to="/about">
          <li className="p-2 hover:text-yellow-300">About</li>
        </Link>
        <Link to="/contact">
          <li className="p-2 hover:text-yellow-300">Contact</li>
        </Link>
      </ul>

      <div>
        <p className="text-red-300 text-yellow-200 text-sm p-5 ">
          {user?.name} is {isOnline ? "Online" : "Offline"}
        </p>
        <img src={logo} alt="cart" className="w-10" />
        <div className="w-5 h-5 bg-white rounded-full shadow-lg text-center">
          <p> {cart?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
