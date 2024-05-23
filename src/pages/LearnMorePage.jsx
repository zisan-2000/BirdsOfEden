// src/pages/LearnMorePage.jsx

import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/navbar/Navbar2";

const LearnMorePage = () => {
  return (
    <div>
      <Navbar2 />

      <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-violet-950 to-violet-900">
        <section className="container mx-auto text-center text-white">
          <h1 className="mb-4 text-4xl font-bold">
            Learn More About Birds Of Eden
          </h1>
          <p className="mb-8 text-lg">
            Birds Of Eden is dedicated to delivering innovative software
            solutions that enhance efficiency, productivity, and user
            experience.
          </p>
          <p>
            Explore our website or contact us at{" "}
            <a href="mailto:info@birdsofeden.com" className="text-blue-400">
              info@birdsofeden.com
            </a>{" "}
            for more information.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMorePage;
