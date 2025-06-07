import React from "react";

const NewsletterSection = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      id="newsletter"
    >
      <div className="bg-blue-600 rounded-2xl overflow-hidden">
        <div className="relative md:px-16 py-16 px-6 md:py-24">
          {/* Gradient bg */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant md:block"></div>
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left */}
            <div className="text-white max-w-lg text-center md:text-left">
              <h2 className=" font-medium text-2xl sm:text-3xl lg:text-4xl ">
                Subscribe Newsletter
              </h2>
              <p className="text-white">
                Best cooks and best delivery guys all at your service. Hot tasty
                food
              </p>
            </div>
            {/* Right  */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 text-center ">
              <input
                type="text"
                placeholder="Enter your @email address"
                className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
              />
              <button className="bg-green-600 text-white w-auto cursor-pointer px-8 py-4  rounded-xl sm:rounded-r-xl sm:rounded-l-none ">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)
            }
            `}
      </style>
    </section>
  );
};

export default NewsletterSection;
