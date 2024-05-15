import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <div className="dark:bg-slate-900 dark:text-white">
        {/* <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
          <Navbar2 />
        </div>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/career" element={<Career />} />{" "}
          {/* New route for Career */}
        </Routes>

        {/* <Hero />
        <Service />
        <BannerDetails reverse={true} img={Banner1} />
        <BannerDetails img={Banner2} />
        <Banner />
        <Blogs />
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
