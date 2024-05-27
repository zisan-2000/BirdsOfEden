import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import AppDev from "./pages/AppDev";
import Career from "./pages/Career";
import Cloud from "./pages/Cloud";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import AddBook from "./fetaures/books/AddBook";
import BooksView from "./fetaures/books/BooksView";
import IOSAppDev from "./pages/IOSAppDev";
import MobileApp from "./pages/MobileApp";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
import WebDev from "./pages/WebDev";

import TestYourIQ from "./components/TestYourIQ/TestYourIQ";
import EditBook from "./fetaures/books/EditBook";
import Error from "./pages/Error";
import GetStartedPage from "./pages/GetStartedPage";
import LearnMorePage from "./pages/LearnMorePage";
import ProductPage from "./pages/ProductPage";
import Technology from "./pages/Technology";

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
          <Route path="/App" element={<AppDev />} />
          <Route path="/Cloud" element={<Cloud />} />
          <Route path="/IOS" element={<IOSAppDev />} />
          <Route path="/Mobile" element={<MobileApp />} />
          <Route path="/Web" element={<WebDev />} />
          <Route path="/Technologies" element={<Technology />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="*" element={<Error />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/test-your-iq" element={<TestYourIQ />} />
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
