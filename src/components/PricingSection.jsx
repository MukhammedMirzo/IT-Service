import React, { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(0);

  const starterPrice = Math.round((4000 * productCount) / 50);
  const businessPrice = Math.round((7500 * productCount) / 50);
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Starter plan*/}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">${starterPrice}/month</p>
          </div>
          {/* Business plan*/}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Business</h3>
            <p className="text-3xl font-bold mb-6">${businessPrice}/month</p>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-4">
            {productCount} Products
          </p>
          <div className="relative px-4 ">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">0</span>
              <input
                className="flex-1 text-gray-200 rounded-lg appereance-none cursor-pointer"
                type="range"
                min="0"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-4">
              Are you ready to get started?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
