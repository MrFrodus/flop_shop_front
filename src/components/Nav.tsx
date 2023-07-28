import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import abis from "../assets/abis.png";

function Nav() {
  return (
    <nav className="border border-green-950 h-20 flex items-center justify-between">
      <div className="flex flex-row items-center w-2/5">
        <div>
          <GiHamburgerMenu size="2rem" className="m-2" />
        </div>
      </div>
      <div className="flex w-20 w-min-0 flex-shrink-0 ">
        <img src={abis} alt="abis_icon" />
      </div>
      <div />
      <div className="flex flex-row text-sm">
        <form className="flex flex-row mr-4">
          <input
            type="text"
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
        <div className="flex items-center flex-col mr-4">
          <BiUser size="20px" />
          Account
        </div>
        <div className="flex items-center flex-col mr-4">
          <AiOutlineShoppingCart size="20px" />
          Cart
        </div>
      </div>
    </nav>
  );
}

export default Nav;
