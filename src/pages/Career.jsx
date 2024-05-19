import { motion } from "framer-motion";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Index from "../routes";
import Navbar2 from "./../components/navbar/Navbar2";

const Career = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      description:
        "We are seeking an experienced Senior Frontend Developer to join our team. The ideal candidate will have strong proficiency in JavaScript, React.js, and CSS frameworks.",
      location: "Remote or Dhaka, Bangladesh",
    },
    {
      title: "UX/UI Designer",
      description:
        "We are looking for a creative and talented UX/UI Designer to create amazing user experiences. The ideal candidate will have a strong understanding of user-centered design principles and proficiency in design tools such as Sketch or Figma.",
      location: "Remote or Dhaka, Bangladesh",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}
    >
      <Navbar2 />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Welcome to Careers at Birds Of Eden
          </h1>
          <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
            Birds Of Eden is a software company committed to excellence and
            innovation. We are always looking for talented individuals to join
            our team. Explore our current career opportunities below.
          </p>
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-600"
            >
              <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
                {job.title}
              </h2>
              <p className="mb-2 text-gray-600 dark:text-gray-400">
                {job.description}
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Location: {job.location}
              </p>
              <button className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 md:w-auto">
                Apply Now
              </button>
            </div>
          ))}
          <div className="mt-6 flex justify-center md:justify-end">
            <button
              onClick={toggleTheme}
              className={`flex items-center rounded-full bg-gray-300 p-2 focus:outline-none dark:bg-gray-700 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              <span className="text-gray-800 dark:text-gray-200">
                {theme === "dark" ? "Light" : "Dark"} Mode
              </span>
              <div className="ml-2">
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800 dark:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800 dark:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <Index />
      <Footer />
    </motion.div>
  );
};

export default Career;
