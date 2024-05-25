import React from "react";
import { Link } from "react-router-dom";
import Video from "../../assets/2.mp4"; // Import the video file
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
    <main className="relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Content */}
      <section className="container relative z-10 flex h-[950px] flex-col items-center justify-center md:h-[800px] ">
        <div className="grid grid-cols-1 items-center gap-8 text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center md:items-start md:text-left"
          >
            <h1 className="mb-3 scale-100 transform animate-bounce text-4xl transition-transform duration-500 hover:scale-105">
              <span className="scale-100 transform rounded text-4xl text-primary transition-transform duration-500 hover:scale-105">
                Birds Of Eden
              </span>{" "}
              Innovating the Future of Software Solutions
            </h1>
            <p className="scale-100 transform transition-transform duration-500 hover:scale-105">
              Birds Of Eden is a cutting-edge software company dedicated to
              transforming ideas into reality through innovative technology
              solutions. Our mission is to empower businesses and individuals
              with state-of-the-art software that enhances efficiency,
              productivity, and user experience.
            </p>

            <div className="space-x-4">
              <Link to="/get-started">
                <button className="transform animate-pulse rounded-md border-2 border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
              <Link to="/learn-more">
                <button className="transform animate-pulse rounded-md border-2 border-white px-4 py-2 text-sm text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-500 hover:bg-white hover:text-blue-500">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
