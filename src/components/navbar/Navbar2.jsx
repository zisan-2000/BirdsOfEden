import { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
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
        className="relative z-[99] border-b-[1px] border-primary/50 bg-gradient-to-l from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg"
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
              <Link to="/" className="flex items-center">
                BIRDS
                <span className="ml-1 inline-block font-bold text-primary">
                  OF EDEN
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-4">
              <li className="group relative cursor-pointer">
                <Link to="" className="flex h-[72px] items-center gap-[2px]">
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </Link>
                <div className="absolute left-0 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                  <ul className="space-y-3">
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
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <Link
                  to="/services"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Services{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </Link>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="d-200 overflow-hidden">
                      <img
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                        src="https://picsum.photos/200"
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="pb-3 text-xl font-semibold">
                        Best Selling
                      </h1>
                      <p className="text-sm text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur exercitationem delectus iusto animi
                        aperiam deleniti reprehenderit doloribus, numquam
                        corporis quae.
                      </p>
                      <div className="grid grid-cols-3">
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Development
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <Link to="/Web">Web development</Link>
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <Link to="/IOS">IOS App Development</Link>
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <Link to="/App">App Development</Link>
                          </li>
                        </ul>
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Other Services
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <Link to="/Cloud">Cloud</Link>
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <Link to="/Mobile">Mobile App</Link>
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <Link to="/App">App Development</Link>
                          </li>
                        </ul>
                        <div>
                          <img src="https://picsum.photos/180" alt="no image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="cursor-pointer">
                <Link to="/contact">Contact</Link>
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

              <div className="flex items-center gap-4">
                <li>
                  <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
                </li>
                <li>
                  <div>
                    <p className="text-sm">Call us on</p>
                    <p className="text-lg">
                      <a href="tel:+91123456789">01793-874189</a>
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
