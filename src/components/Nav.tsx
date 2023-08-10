import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BiUser, BiLogOut } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { MdOutlineListAlt } from "react-icons/md";
import abis from "../assets/abis.png";
import { rootStore } from "../strores/rootStore";

const Nav = observer(() => {
  const { profileStore } = rootStore;

  const navigate = useNavigate();

  const logOut = () => {
    profileStore.logOut();
    navigate("/signIn");
  };

  console.log(profileStore.isAuth);
  console.log(profileStore.user?.first_name, profileStore.user?.last_name);

  return (
    <nav>
      <div className="h-18 flex items-center justify-between">
        <div className="flex flex-row w-[340px] ml-2 items-center">
          <div className="flex w-16 w-min-0 flex-shrink-0 mt-1">
            <img
              className=""
              src={abis}
              alt="abis_icon"
            />
          </div>
          <form className="flex flex-row h-[35px]">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 rounded-md ml-2 py-1 w-60 p-2 
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
        </div>

        <div />
        {profileStore.isAuth ? (
          <div className="flex flex-row justify-between w-[320px]">
            <div className="flex flex-row">
              <Link
                className="flex flex-row mr-5 border border-solid px-4 py-2 rounded"
                to="/account"
              >
                <div className="text-base flex flex-row">
                  <div className="flex items-start">
                    <BiUser size="30px" />
                  </div>
                  <div className="flex flex-col justify-end">
                    <span className="text-xs inline-block">
                      Welcome, <br />
                    </span>
                    <span className="text-xs font-semibold inline-block">
                      {profileStore.user?.first_name}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-row">
              <Link
                className="flex flex-col mr-4 text-xs font-semibold items-center justify-center"
                to="/cart"
              >
                <MdOutlineListAlt size="25px" />
                Orders
              </Link>

              <Link
                className="flex flex-col mr-4 text-xs font-semibold items-center justify-center"
                to="/cart"
              >
                <AiOutlineShoppingCart size="25px" />
                Cart
              </Link>
            </div>
            <button
              type="button"
              className="flex flex-col mr-4 text-xs font-semibold items-center justify-center"
              onClick={logOut}
            >
              <BiLogOut size="25px" />
              Log out
            </button>
          </div>
        ) : (
          <div className="flex flex-row">
            <button
              type="button"
              className="w-[70px] h-[35px] mr-4 rounded-md
              bg-violet-800 text-white mt-2"
            >
              <Link to="/register">Sign up</Link>
            </button>
            <button
              type="button"
              className="w-[70px] h-[35px] mr-4 rounded-md
              bg-violet-800 text-white mt-2"
            >
              <Link to="/signIn">Log in</Link>
            </button>
          </div>
        )}
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
      </ul>
    </nav>
  );
});

export default Nav;
