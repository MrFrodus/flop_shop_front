import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import abis from "../assets/abis.png";

const Nav = () => {
  return (
    <nav>
      <div className="h-20 flex items-center justify-between">
        <div className="flex flex-row items-center w-2/5">
          <div>
            <GiHamburgerMenu
              size="2rem"
              className="m-2"
            />
          </div>
        </div>
        <div className="flex w-20 w-min-0 flex-shrink-0 ">
          <img
            src={abis}
            alt="abis_icon"
          />
        </div>
        <div />
        <div className="flex flex-row text-sm">
          <form className="flex flex-row mr-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 rounded-md ml-4 py-1 w-60 p-2 
            focus:outline-none focus:border-purple-500 focus:ring-1
            rounded-r-none ring-inset"
            />
            <button
              type="button"
              className="flex items-center px-2 rounded-r-md bg-violet-300 "
            >
              <BsSearch />
            </button>
          </form>
          <div>
            <Link
              className="flex items-center flex-col mr-4"
              to="/account"
            >
              <BiUser size="20px" />
              Account
            </Link>
          </div>
          <div>
            <Link
              className="flex items-center flex-col mr-4"
              to="/cart"
            >
              <AiOutlineShoppingCart size="20px" />
              Cart
            </Link>
          </div>
        </div>
      </div>
      <ul className="flex items-center flex-row justify-center text-white bg-slate-800 list-none mt-1">
        <li className="hover:bg-slate-200 hover:text-black h-8 flex items-center px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-slate-200 hover:text-black h-8 flex items-center px-2">
          <Link to="/add">Add product</Link>
        </li>
        <li className="hover:bg-slate-200 hover:text-black h-8 flex items-center px-2">
          <Link to="/categories">Categories</Link>
        </li>
        <li className="hover:bg-slate-200 hover:text-black h-8 flex items-center px-2">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
