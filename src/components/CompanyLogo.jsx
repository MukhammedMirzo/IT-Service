import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const CompanyLodo = () => {
  // const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  const logos = [
    { img: slack, link: "https://slack.com" },
    { img: amazon, link: "https://amazon.com" },
    { img: woocommerce, link: "https://woocommerce.com" },
    { img: meundies, link: "https://meundies.com" },
    { img: sitepoint, link: "https://sitepoint" },
  ];
  return (
    <div className="w-full container mx-auto py-20 px-4 gap-8 sm:px-6 lg:px-8 flex sm:flex-row flex-col sm:items-start">
      <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-600 bg-white py-2 z-10 sm-text-base">
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex animate-logos  items-center gap-8">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener  noreferrer"
          >
            <img
              src={logo.img}
              alt="Company Logo"
              className="mx-12 h-8 w-36 cursor-pointer object-contain  opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </a>
        ))}
        {/* Duplicate Logos */}
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener  noreferrer"
          >
            <img
              src={logo.img}
              alt="Company Logo"
              className="hidden md:block mx-12 h-8 w-36 cursor-pointer object-contain  opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompanyLodo;
