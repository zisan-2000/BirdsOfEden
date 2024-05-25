import React from "react";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card ">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div className="">
            <h1>Md. Zulfiker Hossain</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-5">
          <ul className="space-y-4 text-xl">
            <li className="p-2 hover:bg-violet-200">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-red-500"
                    : "flex items-center gap-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-red-500"
                    : "flex items-center gap-2"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-red-500"
                    : "flex items-center gap-2"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="group relative cursor-pointer p-2 hover:bg-violet-200">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2"
                    : "flex items-center gap-2"
                }
              >
                Other Services{" "}
                <FaCaretDown className="transform transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute left-0 z-10 hidden w-96 rounded-lg bg-white text-gray-800 shadow-lg group-hover:block">
                <div className="flex gap-4 p-4">
                  <div className="w-36 overflow-hidden">
                    <img
                      className="rounded-lg"
                      src="https://picsum.photos/200"
                      alt="Service"
                    />
                  </div>
                  <div>
                    <div className="mb-4">
                      <h1 className="text-lg font-semibold">Best Selling</h1>
                      <p className="text-sm text-gray-600">
                        Explore our top-rated services tailored to meet your
                        needs.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h2 className="text-md mb-2 font-semibold text-green-300">
                          Development
                        </h2>
                        <ul className="flex flex-col gap-1">
                          <li className="cursor-pointer hover:text-primary">
                            <NavLink
                              to="/Web"
                              className={({ isActive }) =>
                                isActive
                                  ? "flex h-12 items-center gap-2 text-red-500"
                                  : "flex h-12 items-center gap-2"
                              }
                            >
                              Web Development
                            </NavLink>
                          </li>
                          <li className="cursor-pointer hover:text-primary">
                            <NavLink
                              to="/IOS"
                              className={({ isActive }) =>
                                isActive
                                  ? "flex h-12 items-center gap-2 text-red-500"
                                  : "flex h-12 items-center gap-2"
                              }
                            >
                              iOS App Development
                            </NavLink>
                          </li>
                          <li className="cursor-pointer hover:text-primary">
                            <NavLink
                              to="/Android"
                              className={({ isActive }) =>
                                isActive
                                  ? "flex h-12 items-center gap-2 text-red-500"
                                  : "flex h-12 items-center gap-2"
                              }
                            >
                              Android App Development
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 className="text-md mb-2 mb-8 font-semibold text-green-300">
                          Other Services
                        </h2>
                        <ul className="flex flex-col gap-1">
                          <li className="cursor-pointer ring-green-300 hover:text-primary">
                            <NavLink
                              to="/Cloud"
                              className={({ isActive }) =>
                                isActive
                                  ? "flex h-12 items-center gap-2 text-red-500"
                                  : "flex h-12 items-center gap-2"
                              }
                            >
                              Big Data Analysis & Dashboard Design
                            </NavLink>
                          </li>
                          <li className="cursor-pointer hover:text-primary">
                            <NavLink
                              to="/Cloud"
                              className={({ isActive }) =>
                                isActive
                                  ? "mt-5 flex h-12 items-center gap-2 text-red-500"
                                  : "mt-5 flex h-12 items-center gap-2"
                              }
                            >
                              Cloud Services
                            </NavLink>
                          </li>
                          <li className="cursor-pointer hover:text-primary">
                            <NavLink
                              to="/Mobile"
                              className={({ isActive }) =>
                                isActive
                                  ? "flex h-12 items-center gap-2 text-red-500"
                                  : "flex h-12 items-center gap-2"
                              }
                            >
                              Mobile App Development
                            </NavLink>
                          </li>
                          <li className="cursor-pointer hover:text-primary">
                            <NavLink
                              to="/Design"
                              className={({ isActive }) =>
                                isActive
                                  ? "flex h-12 items-center gap-2 text-red-500"
                                  : "flex h-12 items-center gap-2"
                              }
                            >
                              UI/UX Design
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-red-500"
                    : "flex items-center gap-2"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-red-500"
                    : "flex items-center gap-2"
                }
              >
                Privacy Policy
              </NavLink>
            </li>
            <li className="p-2 hover:bg-violet-200">
              <NavLink
                to="/add-book"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-red-500"
                    : "flex items-center gap-2"
                }
              >
                Add your Comments
              </NavLink>
            </li>
            <li className="relative cursor-pointer">
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 font-bold uppercase text-red-500 text-white transition duration-300 hover:from-blue-700 hover:to-blue-900"
                    : "flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 font-bold uppercase text-white transition duration-300 hover:from-blue-700 hover:to-blue-900"
                }
              >
                Career
                <span className="absolute right-0 top-0 -mr-2 -mt-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                  New!
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer mb-10 mt-2">
        <h1>© 2022 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
