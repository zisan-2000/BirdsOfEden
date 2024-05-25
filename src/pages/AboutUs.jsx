import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import talatImage from "./../assets/talat.webp";
import zisanImage from "./../assets/zisan.jpg";
import Navbar2 from "./../components/navbar/Navbar2";

const AboutUs = () => {
  // State for controlling animation
  const [animated, setAnimated] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div>
      <Navbar2 />

      <div className="container mx-auto px-4 py-8">
        <h1
          className={`mb-8 justify-center rounded-lg border-2 border-double border-green-600 p-4 text-center text-4xl font-bold ${
            animated ? "animate-fadeIn" : ""
          } hover:scale-105 hover:transform hover:border-green-700 hover:duration-300`}
        >
          About <span className="text-green-600">Birds of Eden</span>
        </h1>

        <p className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
          <span className="font-semibold">Birds of Eden</span> is a dynamic
          software company dedicated to creating innovative solutions that
          empower businesses to thrive in the digital age.
        </p>

        <h2
          className={`mb-6 text-3xl font-bold ${
            animated ? "animate-fadeIn" : ""
          }`}
        >
          Our Mission
        </h2>
        <p className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
          At <span className="font-semibold">Birds of Eden</span>, our mission
          is to revolutionize the software industry by delivering cutting-edge
          products and services that exceed our clients' expectations.
        </p>

        <h2
          className={`mb-6 text-3xl font-bold ${
            animated ? "animate-fadeIn" : ""
          }`}
        >
          Our Values
        </h2>
        <ul className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
          <li className="mb-4">
            Innovation: We constantly explore new ideas and technologies to stay
            ahead of the curve.
          </li>
          <li className="mb-4">
            Quality: We are committed to delivering high-quality solutions that
            add value to our clients' businesses.
          </li>
          <li className="mb-4">
            Integrity: We conduct business with honesty, transparency, and
            integrity.
          </li>
          <li className="mb-4">
            Customer Satisfaction: We prioritize the needs and satisfaction of
            our clients above all else.
          </li>
          <li>
            Collaboration: We believe in the power of collaboration and teamwork
            to achieve success.
          </li>
        </ul>

        <h2
          className={`mb-6 text-3xl font-bold ${
            animated ? "animate-fadeIn" : ""
          }`}
        >
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className={`rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600 ${
              animated ? "animate-slideInLeft" : ""
            } hover:scale-105 hover:transform hover:border-2 hover:border-green-600 hover:shadow-lg hover:duration-300`}
          >
            <img
              src={talatImage}
              alt="Talat Mohammad"
              className="mb-2 w-full rounded-lg"
            />
            <h3 className="mb-2 text-2xl font-semibold text-purple-600">
              Talat Mohammad
            </h3>
            <p className="text-lg text-gray-700">Co-Founder & CEO</p>
          </div>
          <div
            className={`rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600 ${
              animated ? "animate-slideInUp" : ""
            } hover:scale-105 hover:transform hover:border-2 hover:border-green-600 hover:shadow-lg hover:duration-300`}
          >
            <img
              src={talatImage}
              alt="Talat Mohammad"
              className="mb-2 w-full rounded-lg"
            />
            <h3 className="mb-2 text-2xl font-semibold text-purple-600">
              Talat Mohammad
            </h3>
            <p className="text-lg text-gray-700">CTO</p>
          </div>
          <div
            className={`rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600 ${
              animated ? "animate-slideInRight" : ""
            } hover:scale-105 hover:transform hover:border-2 hover:border-green-600 hover:shadow-lg hover:duration-300`}
          >
            <img
              src={zisanImage}
              alt="Md. Zulfiker Hossain"
              className="mb-2 w-full rounded-lg"
            />
            <h3 className="mb-2 text-2xl font-semibold text-purple-600">
              Md. Zulfiker Hossain
            </h3>
            <p className="text-lg text-gray-700">Developer</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
