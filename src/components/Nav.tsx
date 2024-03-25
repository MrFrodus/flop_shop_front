import { BsSearch } from "react-icons/bs";
import { BiUser, BiLogOut, BiCategory } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { MdOutlineListAlt } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTransition } from "react-transition-state";
import abis from "../assets/abis.png";
import { rootStore } from "../strores/rootStore";

import { CategoriesMenu, NavBar } from "./index";

const Nav = observer(() => {
  const { profileStore } = rootStore;

  const [searchParams, setSearchParams] = useState("");

  const [{ status, isMounted }, toggle] = useTransition({
    timeout: 0,
    mountOnEnter: true,
    preEnter: true,
    unmountOnExit: true,
  });

  const navigate = useNavigate();

  const logOut = () => {
    profileStore.logOut();
    navigate("/signIn");
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchParams) {
      navigate(`/search?text=${searchParams}`);
    }
  };

  return (
    <nav className="flex flex-col items-center sticky top-0 z-50">
      <div className="w-full bg-white z-50">
        {profileStore.isAuth ? (
          <>
            <div className="h-16 flex items-center justify-between bg-white z-50">
              <div className="flex flex-row ml-2 items-center z-50">
                <div className="flex w-16 w-min-0 flex-shrink-0">
                  <img
                    className=""
                    src={abis}
                    alt="abis_icon"
                  />
                </div>
                <form
                  className="flex flex-row h-[35px]"
                  onSubmit={(e) => handleSearch(e)}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => {
                      setSearchParams(e.target.value);
                    }}
                    className="border border-gray-400 rounded-md ml-2 py-1 w-60 p-2 
                    focus:outline-none focus:border-purple-500 focus:ring-1
                    rounded-r-none ring-inset"
                  />
                  <button
                    type="submit"
                    className="flex items-center px-2 rounded-r-md bg-violet-300"
                  >
                    <BsSearch />
                  </button>
                </form>
                <button
                  type="button"
                  className="flex flex-row mr-5 border 
                border-solid px-4 py-2 rounded ml-4
                cursor-pointer"
                  onClick={() => toggle()}
                >
                  <BiCategory size="30px " />
                  <span>Catalog</span>
                </button>
              </div>

              <div />

              <div className="flex flex-row justify-between w-[320px]">
                <div
                  className="flex flex-row bg-violet-300 mr-5 
                border border-solid px-4 py-2 rounded text-slate-700"
                >
                  <Link
                    className="flex flex-row "
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
            </div>
            <NavBar />
            {isMounted ? (
              <CategoriesMenu
                isMounted={isMounted}
                status={status}
              />
            ) : null}
          </>
        ) : (
          <div className="h-16 flex justify-end border border-b-black">
            <div className="flex flex- items-center">
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
          </div>
        )}
      </div>
    </nav>
  );
});

export default Nav;
