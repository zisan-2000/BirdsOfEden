import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div className="mt-12">
            <h1>Md. Zulfiker Hossain</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li className="p-2 hover:bg-violet-200">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <Link to="/services">Services</Link>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <Link to="/privacy">Privacy policy</Link>
            </li>

            <li className="relative cursor-pointer">
              <Link
                to="/career"
                className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 font-bold uppercase text-white transition duration-300 hover:from-blue-700 hover:to-blue-900"
              >
                Career
                <span className="absolute right-0 top-0 -mr-2 -mt-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                  New!
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2022 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
