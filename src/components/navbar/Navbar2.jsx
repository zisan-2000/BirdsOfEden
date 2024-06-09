import { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="sticky top-0 z-[99] border-b-[1px] border-primary/50 bg-gradient-to-l from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg"
      >
        <nav className="container mx-auto flex h-[70px] items-center justify-between px-4 py-2 md:px-0">
          <div className="flex items-center">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md transition duration-300 hover:shadow-xl md:h-16 md:w-16">
              <img
                src={logo}
                alt="logo"
                className="scale-160 h-full w-full transform object-cover"
                style={{ filter: theme === "dark" ? "invert(1)" : "invert(0)" }}
              />
            </div>
            <div className="ml-3 text-xl text-white md:text-2xl">
              <NavLink to="/" className="flex items-center">
                BIRDS
                <span className="ml-1 inline-block font-bold text-primary">
                  OF EDEN
                </span>
              </NavLink>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-4">
              <li className="group relative cursor-pointer">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive
                      ? "flex h-[72px] items-center gap-[2px]"
                      : "flex h-[72px] items-center gap-[2px]"
                  }
                >
                  Hover Here{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </NavLink>
                <div className="absolute left-0 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? "flex h-12 items-center gap-2 text-red-500"
                            : "flex h-12 items-center gap-2"
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
                            ? "flex h-12 items-center gap-2 text-red-500"
                            : "flex h-12 items-center gap-2"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>

                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/team"
                        className={({ isActive }) =>
                          isActive
                            ? "flex h-12 items-center gap-2 text-red-500"
                            : "flex h-12 items-center gap-2"
                        }
                      >
                        Meet Our Team
                      </NavLink>
                    </li>

                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/Cloud"
                        className={({ isActive }) =>
                          isActive
                            ? "flex h-12 items-center gap-2 text-red-500"
                            : "flex h-12 items-center gap-2"
                        }
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive
                            ? "flex h-12 items-center gap-2 text-red-500"
                            : "flex h-12 items-center gap-2"
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                          isActive
                            ? "flex h-12 items-center gap-2 text-red-500"
                            : "flex h-12 items-center gap-2"
                        }
                      >
                        Blogs
                      </NavLink>
                    </li>

                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/privacy"
                        className={({ isActive }) =>
                          isActive
                            ? "flex h-12 items-center gap-2 text-red-500"
                            : "flex h-12 items-center gap-2"
                        }
                      >
                        Privacy policy
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="group relative cursor-pointer">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive
                      ? "flex h-12 items-center gap-2"
                      : "flex h-12 items-center gap-2"
                  }
                >
                  Services{" "}
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
                          <h2 className="text-md mb-2 font-semibold">
                            Development
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className=" mb-2 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/Cloud"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex  items-center gap-2 text-red-500"
                                    : "flex  items-center gap-2"
                                }
                              >
                                Big Data Analysis & Dashboard Design
                              </NavLink>
                            </li>

                            <li className=" mb-2 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Regular Services
                              </NavLink>
                            </li>

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
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-md mb-2 font-semibold">
                            Other Services
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
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

                            <li className="mb-3 cursor-pointer hover:text-primary">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="cursor-pointer hover:text-primary">
                <NavLink
                  to="/Technologies"
                  className={({ isActive }) =>
                    isActive
                      ? "flex  items-center gap-2 text-red-500"
                      : "flex  items-center gap-2"
                  }
                >
                  Technologies
                </NavLink>
              </li>

              <li className="cursor-pointer hover:text-primary">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "flex  items-center gap-2 text-red-500"
                      : "flex  items-center gap-2"
                  }
                >
                  Our Products
                </NavLink>
              </li>

              <li className="cursor-pointer">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "flex h-12 items-center gap-2 text-red-500"
                      : "flex h-12 items-center gap-2"
                  }
                >
                  Contact
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
                  <span className="absolute right-0 top-0 -mr-2 -mt-2 animate-bounce rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                    New!
                  </span>
                </NavLink>
              </li>

              <div className="flex items-center gap-4 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 p-2 shadow-lg">
                <li className="list-none">
                  <BiPhoneCall className="h-[40px] w-[40px] transform rounded-full bg-primary p-2 text-2xl text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-primary/90" />
                </li>
                <li className="list-none">
                  <div>
                    <p className="text-sm text-white">Call us on</p>
                    <p className="text-lg font-semibold text-white">
                      <a href="tel:+91123456789" className="hover:underline">
                        01793-874189
                      </a>
                    </p>
                  </div>
                </li>
              </div>

              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer text-2xl"
                />
              )}
            </ul>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="cursor-pointer text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="cursor-pointer text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
