import React from "react";
import ImgGlobe from "../assets/globe.svg";
import GroupModels from "../assets/group-model.png";
import Models2 from "../assets/models-2.png";
import Models3 from "../assets/models-3.png";
import PIP from "../assets/pip.svg";
import ROC from "../assets/roc.svg";

import WhatWeProvide from "./WhatWeProvide";
import FoundationalBelieves from "./FoundationalBelieves";
import OurPrinciples from "../Components/OurPrinciples";
import TrustedIndustries from "../Components/TrustedIndustries";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <div className="flex flex-col bg-gradient-to-r from-[#38BDF8] to-[#0284C7] pt-20">
        <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 mb-10 lg:mb-40">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Barlow] leading-snug">
              <span className="text-[#E0F2FE]">Innovative</span> IT Solutions for
              a Sustainable Future
            </h1>
            <p className="text-lg sm:text-xl mt-6 font-[Roboto] font-medium">
              Experience-Driven Solutions for Unstoppable Business Growth
            </p>

            <a href="/about" className="flex">
              <div className="cursor-pointer rounded-lg mt-6 bg-gradient-to-t from-[#0369A1] to-[#0C4A6E] font-[Barlow] font-medium flex justify-center items-center text-base sm:text-lg py-3 px-6">
                Explore now
              </div>
            </a>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex justify-center items-center px-6">
            <img
              src={ImgGlobe}
              alt="Globe"
              className="w-60 sm:w-80 lg:w-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 py-8 lg:py-12">
        {/* Left Text Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h4 className="font-[Barlow] font-semibold text-black">
            OUR MISSION & VISION
          </h4>
          <hr className="bg-[#D5FF2E] h-[2px] mt-2 w-40" />

          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-[Barlow] font-semibold max-w-xl">
            Innovating Practical Solutions for a Sustainable Future
          </h2>
          <p className="mt-4 text-black font-[Barlow] font-normal text-base sm:text-lg max-w-xl">
            Vinnteam delivers practical, sustainable solutions using the latest
            technology.
          </p>
          <p className="mt-4 text-black font-[Barlow] font-normal text-base sm:text-lg max-w-xl">
            Our team combines expertise with innovative thinking to create smart
            strategies that solve real-world problems.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Main Image */}
          <div className="relative flex justify-center">
            <img
              src={GroupModels}
              alt="Group Models"
              className="h-64 sm:h-80 lg:h-[355px] w-auto"
            />
            <div className="absolute bottom-2 left-[0px] lg:left-[-40px] flex flex-col gap-3">
              <div className="bg-[#E7FF2E] py-2 px-3">
                <span className="text-black font-[Barlow] font-medium text-lg">
                  Scalable Solutions
                </span>
              </div>
              <div className="bg-[#E7FF2E] py-2 px-3">
                <span className="text-black font-[Barlow] font-medium text-lg">
                  Transformative Technology
                </span>
              </div>
            </div>
          </div>

          {/* Side Images */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <img
                src={Models2}
                alt="Model 2"
                className="h-40 sm:h-44 w-auto"
              />
              <div className="opacity-50 absolute w-12 h-12 bg-black bottom-2 right-2 rounded flex justify-center items-center">
                <img src={PIP} alt="PIP" className="w-6 h-6" />
              </div>
            </div>
            <div className="relative">
              <img
                src={Models3}
                alt="Model 3"
                className="h-40 sm:h-44 w-auto"
              />
              <div className="opacity-50 absolute w-12 h-12 bg-black bottom-2 right-2 rounded flex justify-center items-center">
                <img src={ROC} alt="ROC" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <WhatWeProvide />
      <FoundationalBelieves />
      <OurPrinciples />
      <TrustedIndustries />
      <Footer />
    </div>
  );
};

export default Landing;
