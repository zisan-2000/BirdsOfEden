import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TestYourIQ from "./components/TestYourIQ/TestYourIQ";
import AddBook from "./fetaures/books/AddBook";
import BooksView from "./fetaures/books/BooksView";
import EditBook from "./fetaures/books/EditBook";
import AboutUs from "./pages/AboutUs";
import AppDev from "./pages/AppDev";
import BackendTechnologies from "./pages/BackendTechnologies";
import BlogList from "./pages/BlogList";
import Cloud from "./pages/Cloud";
import ContactForm from "./pages/ContactForm";
import Error from "./pages/Error";
import FrontendTechnologies from "./pages/FrontendTechnologies";
import GetStartedPage from "./pages/GetStartedPage";
import Home from "./pages/Home";
import IOSAppDev from "./pages/IOSAppDev";
import JobPostList from "./pages/JobPostList";
import LearnMorePage from "./pages/LearnMorePage";
import MobileApp from "./pages/MobileApp";
import Privacy from "./pages/Privacy";
import ProductPage from "./pages/ProductPage";
import Services from "./pages/Services";
import TeamList from "./pages/TeamList";
import TechnologyList from "./pages/TechnologyList";
import WebDev from "./pages/WebDev";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<TeamList />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/career" element={<JobPostList />} />
          <Route path="/app" element={<AppDev />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/ios" element={<IOSAppDev />} />
          <Route path="/mobile" element={<MobileApp />} />
          <Route path="/web" element={<WebDev />} />
          <Route path="/technologies" element={<TechnologyList />}>
            <Route path="frontend" element={<FrontendTechnologies />} />
            <Route path="backend" element={<BackendTechnologies />} />
          </Route>
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="*" element={<Error />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/products/:tab" element={<ProductPage />} />
          <Route path="/test-your-iq" element={<TestYourIQ />} />
          <Route path="/blogs" element={<BlogList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
