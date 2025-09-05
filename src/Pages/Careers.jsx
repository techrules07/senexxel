import React from "react";
import CareerBanner from "../assets/career-banner.png";
import BannerGroupImage from "../assets/banner-group.png";
import Vision from "../Components/Vision";

const Careers = () => {
  const handleClick = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <div className="flex-1 flex flex-col bg-white pt-[75px]">
      {/* Hero Section */}
      <div className="relative flex flex-col justify-end h-[600px] sm:h-[700px] bg-gradient-to-t from-[#FFFFFF] to-[#F1FFD8]">
        {/* Background Banner */}
        <img
          src={CareerBanner}
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover absolute bottom-[100px]"
          alt="Career Banner"
        />

        {/* Text Content */}
        <div className="w-full absolute top-0 flex flex-col items-center px-4 sm:px-6">
          <div className="w-full max-w-[700px] mt-10 sm:mt-[56px] flex flex-col items-center text-center">
            <label className="font-[Barlow] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-black leading-snug">
              Where Passion Meets Opportunity <br className="hidden sm:block" /> Join Our Family
            </label>

            <label className="text-black font-[Roboto] font-normal text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed">
              Where your passion meets purpose, we create a workplace that inspires growth, happiness, impactful
              connections, and customer satisfaction.
            </label>

            {/* CTA Button */}
            <div
              className="cursor-pointer px-6 py-3 sm:px-8 sm:py-4 flex items-center mt-8 sm:mt-10 bg-gradient-to-r from-[#03295D] to-[#2C78CD] rounded-[10px] shadow-md"
              onClick={handleClick}
            >
              <label className="font-[Barlow] font-medium text-base sm:text-lg md:text-xl text-white cursor-pointer">
                Start your journey
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Group Image */}
        <img
          src={BannerGroupImage}
          className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-auto mx-auto mt-6 relative z-10"
          alt="Banner Group"
        />
      </div>

      {/* Vision Section */}
      <Vision />
    </div>
  );
};

export default Careers;
