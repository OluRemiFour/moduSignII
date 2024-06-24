import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between border-b-2 border-[#5b2ed4] px-2 py-3 lg:px-20">
        <div className="flex items-center gap-3">
          <img src="./src/assets/images/logo.png" alt="" />
          <Link to="/"> <h1 className="text-xl font-normal text-white">ModuSign</h1></Link>
         
        </div>
        <ul className="hidden gap-16 text-white lg:flex">
          <Link to="/">
            <li>Home</li>
          </Link>

          <li>Features</li>
          <li>Pricing</li>
          <li>More</li>
          <li>Showcase</li>
        </ul>
        <button className="rounded-xl bg-[#7b4ff6] px-10 py-4 text-sm text-white">
          SIGN IN
        </button>
      </div>
    </>
  );
};
export default NavBar;
