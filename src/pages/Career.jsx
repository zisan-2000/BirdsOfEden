import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
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
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 transform text-center text-4xl font-bold text-gray-800 transition duration-500 dark:text-white"
          >
            Welcome to Careers at Birds Of Eden
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 transform text-center text-lg text-gray-600 transition duration-500 dark:text-gray-400"
          >
            Birds Of Eden is a software company committed to excellence and
            innovation. We are always looking for talented individuals to join
            our team. Explore our current career opportunities below.
          </motion.p>
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-600"
            >
              <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
                {job.title}
              </h2>
              <p className="mb-3 text-gray-600 dark:text-gray-400">
                {job.description}
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <button className="w-full rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:w-auto">
                Apply Now
              </button>
            </motion.div>
          ))}
          <div className="mt-8 flex justify-center md:justify-end">
            <button
              onClick={toggleTheme}
              className={`flex items-center rounded-full p-2 focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <span className="mr-2">
                {theme === "dark" ? "Light" : "Dark"} Mode
              </span>
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                  className="h-6 w-6"
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
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Career;
