import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const clients = [
  {
    name: "Client One",
    logo: "https://via.placeholder.com/100",
    description:
      "Client One is a leading company in industry X, providing top-notch solutions to their customers.",
    website: "https://www.clientone.com",
    contact: "contact@clientone.com",
    services: ["Service A", "Service B", "Service C"],
    testimonial:
      "Client One has significantly improved our business operations with their excellent service and support.",
  },
  {
    name: "Client Two",
    logo: "https://via.placeholder.com/100",
    description:
      "Client Two specializes in Y and is known for their innovative approach and customer satisfaction.",
    website: "https://www.clienttwo.com",
    contact: "contact@clienttwo.com",
    services: ["Service D", "Service E", "Service F"],
    testimonial:
      "The team at Client Two is outstanding. They delivered beyond our expectations.",
  },
  {
    name: "Client Three",
    logo: "https://via.placeholder.com/100",
    description:
      "Client Three has been a pioneer in Z, setting standards with their exceptional services.",
    website: "https://www.clientthree.com",
    contact: "contact@clientthree.com",
    services: ["Service G", "Service H", "Service I"],
    testimonial:
      "Client Three’s expertise in their field is unparalleled. We highly recommend them.",
  },
];

const ClientPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen py-10 transition-colors duration-500`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-center text-3xl font-bold sm:text-5xl">
            Our Clients
          </h1>
          <button
            onClick={toggleDarkMode}
            className="rounded-md bg-white bg-opacity-20 px-4 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-opacity-30"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4 py-6 sm:p-6">
              <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-blue-200"
                />
                <h2 className="mb-2 text-center text-xl font-semibold text-gray-900 dark:text-gray-200 sm:text-2xl">
                  {client.name}
                </h2>
                <p className="mb-4 text-center text-gray-700 dark:text-gray-300">
                  {client.description}
                </p>
                <ul className="mb-4 text-gray-700 dark:text-gray-300">
                  {client.services.map((service, idx) => (
                    <li key={idx} className="text-center">
                      • {service}
                    </li>
                  ))}
                </ul>
                <blockquote className="mb-4 text-center italic text-gray-700 dark:text-gray-300">
                  "{client.testimonial}"
                </blockquote>
                <div className="mb-4 text-center">
                  <a
                    href={client.website}
                    className="text-blue-600 transition-colors duration-300 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {client.website}
                  </a>
                  <p className="text-gray-500 dark:text-gray-400">
                    {client.contact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientPage;
