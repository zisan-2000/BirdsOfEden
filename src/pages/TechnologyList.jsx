import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/navbar/Navbar2";

const TechnologyList = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/technologylist/")
      .then((response) => {
        setTechnologies(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the technologies!", error);
      });
  }, []);

  return (
    <div>
      <Navbar2 />

      <div className="container mx-auto mb-10 mt-10 rounded-lg bg-gray-50 p-6 shadow-xl">
        <h1 className="mb-10 text-center text-4xl font-bold text-blue-700">
          Our Technology
        </h1>
        <p className="mb-10 text-center text-lg text-gray-700">
          At
          <span className="animate-bounce text-2xl text-green-700">
            Birds of Eden
          </span>
          , we are at the forefront of technological innovation. Our software
          solutions are built using the latest and most reliable technologies to
          ensure high performance, scalability, and security.
        </p>
        <div className="space-y-12">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-gray-800">
              Frontend Technologies
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {technologies
                .filter((tech) => tech.category === "frontend")
                .map((technology) => (
                  <div
                    key={technology.id}
                    className="flex transform flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105"
                  >
                    <img
                      src={technology.image}
                      alt={technology.name}
                      className="mb-4 h-24 w-24 animate-spin-slow rounded-full border-4 border-gray-300 object-cover"
                    />
                    <h3 className="mb-2 text-2xl font-bold text-gray-800">
                      {technology.name}
                    </h3>
                    <p className="text-gray-600">{technology.description}</p>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-gray-800">
              Backend Technologies
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {technologies
                .filter((tech) => tech.category === "backend")
                .map((technology) => (
                  <div
                    key={technology.id}
                    className="flex transform flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105"
                  >
                    <img
                      src={technology.image}
                      alt={technology.name}
                      className="mb-4 h-24 w-24 animate-spin-slow rounded-full border-4 border-gray-300 object-cover"
                    />
                    <h3 className="mb-2 text-2xl font-bold text-gray-800">
                      {technology.name}
                    </h3>
                    <p className="text-gray-600">{technology.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechnologyList;
