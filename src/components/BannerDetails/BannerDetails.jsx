import React from "react";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
                We Build Apps That Get Trending On Appworld
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Birds Of Eden is a cutting-edge software company dedicated to
                transforming ideas into reality through innovative technology
                solutions. Our mission is to empower businesses and individuals
                with state-of-the-art software that enhances efficiency,
                productivity, and user experience.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                    Expert software development tailored to your needs.
                  </li>
                  <li className="font-medium">
                    Innovative solutions that drive growth and success.
                  </li>
                  <li className="font-medium">
                    Commitment to quality and exceptional user experience.
                  </li>
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Get Started
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="No image"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
