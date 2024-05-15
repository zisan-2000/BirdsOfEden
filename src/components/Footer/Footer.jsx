import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <footer className="bg-violet-900 text-white">
      <div className="container flex flex-col items-center justify-between py-12 md:flex-row">
        <div className="md:w-1/3">
          <div className="mb-4 flex items-center justify-center md:mb-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md transition duration-300 hover:shadow-lg md:h-24 md:w-24">
              <img
                src={logo}
                alt="logo"
                className="h-full w-full transform object-cover duration-500 hover:scale-105"
                style={{ filter: theme === "dark" ? "invert(1)" : "invert(0)" }}
              />
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition duration-300 hover:opacity-100">
                <a href="#" className="text-lg font-bold text-white">
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
          <h1 className="text-center text-xl font-bold sm:text-2xl">
            <a href="/#home" className="">
              BIRDS OF
              <span className="inline-block font-bold text-primary"> EDEN</span>
            </a>
          </h1>
          <p className="mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus, voluptate.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-2/3">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Important Links</h2>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer transition duration-300 hover:text-primary">
                  Home
                </li>
                <li className="cursor-pointer transition duration-300 hover:text-primary">
                  About
                </li>
                <li className="cursor-pointer transition duration-300 hover:text-primary">
                  Services
                </li>
                <li className="cursor-pointer transition duration-300 hover:text-primary">
                  Login
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold">Links</h2>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer transition duration-300 hover:text-primary">
                  Privacy Policy
                </li>
                <li className="cursor-pointer transition duration-300 hover:text-primary">
                  Services
                </li>
                <li className="cursor-pointer transition duration-300 hover:text-primary">
                  About us
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold">Social Links</h2>
              <div className="flex flex-col gap-2">
                <h3>Subscribe to our newsletter</h3>
                <input
                  className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  type="text"
                  placeholder="Email"
                />
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="text-white duration-200 hover:scale-105"
                  >
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a
                    href="#"
                    className="text-white duration-200 hover:scale-105"
                  >
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a
                    href="#"
                    className="text-white duration-200 hover:scale-105"
                  >
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 pb-4 pt-8 text-center">
        <p>@copyright 2024 Travery || ZULFIKER</p>
        <button
          onClick={toggleTheme}
          className="mt-4 rounded-md border border-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {theme === "dark" ? (
            <BiSun className="text-xl text-white" />
          ) : (
            <BiMoon className="text-xl text-white" />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
