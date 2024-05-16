// Cloud.jsx
// import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/navbar/Navbar2";

const Cloud = () => {
  return (
    <div>
      <Navbar2 />
      <div className="mx-auto mb-16 mt-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="transform rounded-lg bg-gray-100 p-8 shadow-md transition duration-300 hover:scale-105">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 lg:text-3xl">
            Cloud Solutions
          </h2>
          <p className="mb-6 text-gray-700">
            At Birds of Eden, we provide comprehensive cloud solutions designed
            to optimize your business operations and drive growth.
          </p>
          <ul className="mb-6 list-inside list-disc">
            <li className="text-gray-700">
              <span className="font-bold">Scalability:</span> Our cloud services
              offer scalable infrastructure that adapts to your evolving
              business needs, allowing you to efficiently handle fluctuations in
              demand.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Reliability:</span> With robust
              architecture and redundant systems, we ensure high availability
              and reliability for your critical applications and data.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Security:</span> Security is our top
              priority. We implement industry-leading practices and technologies
              to safeguard your data and protect against cyber threats.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Cost Efficiency:</span> By leveraging
              cloud computing, we help you optimize costs by paying only for the
              resources you use, eliminating the need for upfront investments in
              hardware and infrastructure.
            </li>
          </ul>
          <p className="text-gray-700">
            Partner with us to harness the power of the cloud and unlock new
            opportunities for innovation and growth in your business.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cloud;
