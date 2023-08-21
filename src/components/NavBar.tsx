import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul
      className="flex items-center flex-row min-w-fit
      justify-center text-white bg-slate-800 list-none  h-8"
    >
      <li
        className="hover:bg-slate-200 
      hover:text-black h-8 flex items-center px-2"
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className="hover:bg-slate-200 
      hover:text-black h-8 flex items-center px-2"
      >
        <Link to="/add">Add product</Link>
      </li>
    </ul>
  );
};

export default NavBar;
