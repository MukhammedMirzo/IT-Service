import React from "react";
import monitorImg from "../assets/monitor-card.webp";

const MonitorSection = () => {
  return (
    <section className="mx-w-7xl mx-auto px-2 py-16 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left  */}
        <div className="md:w-1/2 w-full">
          <p className="text-green-500 font-semibold">MONITOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-3/5">
            Introducing best mobile carousels
          </h2>
          <p className="text-gray-600 mb-8">
            Before the ship is really back. Round, round, all around the world.
            Round, all around the world, Round, all around the world, Round, all
            around the world.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:scale-102 ">
            Learn more about Monitoring →
          </a>
        </div>

        {/* Right  */}
        <div className="md:h-1/2 w-full">
          <img src={monitorImg} alt="Monitor Image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
