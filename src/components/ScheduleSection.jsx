import React from "react";
import scheduleImg from "../assets/stats.webp";

const ScheduleSection = () => {
  return (
    <section className="mx-w-7xl mx-auto px-2 py-16 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left  */}
        <div className="md:h-1/2 w-full">
          <img
            src={scheduleImg}
            alt="Schedule Image"
            className="w-full h-auto"
          />
        </div>
        {/* Right  */}
        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold">SCHEDULE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
            Streamline Your Bussiness
            <br />
            With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar managment.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:scale-102 ">
            Explore scheduling features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
