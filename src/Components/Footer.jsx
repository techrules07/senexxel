import React from "react";
import X from "../assets/X.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/Youtube.svg";
import LinkedIn from "../assets/linkedIn.svg";
import SenexxelLogo from "../assets/senexxel.svg";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-[#0A2B50] to-[#034590] px-6 sm:px-10 md:px-[60px] py-6 sm:py-8 md:py-[35px]">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 flex flex-col sm:flex-row justify-between gap-8">
          {/* Services */}
          <div className="flex flex-col">
            <label className="text-[#A0FF8B] font-[Barlow] font-semibold text-lg sm:text-xl">
              Services
            </label>
            {[
              "Systems Integration",
              // "Managed IT Services",
              "Application Services",
              "Infrastructure Services",
              "Business process Services",
              "Consulting Services",
            ].map((item, idx) => (
              <label
                key={idx}
                className={`text-white font-normal text-sm sm:text-base mt-${
                  idx === 0 ? "[20px]" : "[16px]"
                } cursor-pointer`}
              >
                {item}
              </label>
            ))}
          </div>

          {/* Industries */}
          <div className="flex flex-col">
            <label className="text-[#A0FF8B] font-[Barlow] font-semibold text-lg sm:text-xl">
              Industries
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col">
                {[
                  "Automative",
                  "Banking",
                  "Capital Markets",
                  "Healthcare",
                  "Insurance",
                  "Life Sciences",
                ].map((item, idx) => (
                  <label
                    key={idx}
                    className={`text-white font-normal text-sm sm:text-base mt-${
                      idx === 0 ? "[20px]" : "[16px]"
                    } cursor-pointer`}
                  >
                    {item}
                  </label>
                ))}
              </div>
              <div className="flex flex-col sm:ml-[30px]">
                {[
                  "Education",
                  "Manufacturing",
                  "Retail",
                  "Logistics",
                  "Communication & Technology",
                  "Government",
                ].map((item, idx) => (
                  <label
                    key={idx}
                    className={`text-white font-normal text-sm sm:text-base mt-${
                      idx === 0 ? "[20px]" : "[16px]"
                    } cursor-pointer`}
                  >
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col sm:flex-row lg:justify-end">
          <div className="flex-1 flex flex-col sm:pl-[30px] lg:pl-[50px] mb-6 sm:mb-0">
            <label className="text-[#A0FF8B] font-[Barlow] font-semibold text-lg sm:text-xl">
              Insights
            </label>
            {["Blogs", "Podcasts", "Case Studies"].map((item, idx) => (
              <label
                key={idx}
                className={`text-white font-normal text-sm sm:text-base mt-${
                  idx === 0 ? "[20px]" : "[16px]"
                } cursor-pointer`}
              >
                {item}
              </label>
            ))}
          </div>

          <div className="flex-1 flex flex-col">
            {/* About & Careers */}
            <div className="flex flex-row justify-between sm:justify-start sm:gap-12">
              <label className="text-[#A0FF8B] font-[Barlow] font-semibold text-lg sm:text-xl">
                About
              </label>
              <label className="text-[#A0FF8B] font-[Barlow] font-semibold text-lg sm:text-xl">
                Careers
              </label>
            </div>

            {/* Get in Touch */}
            <div className="mt-6 bg-gradient-to-t from-[#07134B] to-[#102CB1] rounded-[20px] w-full sm:w-[80%] px-4 py-4 flex flex-col">
              <label className="font-[Barlow] text-lg sm:text-2xl font-semibold">
                Get in touch
              </label>
              <label className="font-[Roboto] text-xs sm:text-sm font-normal mt-3">
                Let’s connect on social media for future updates
              </label>

              <div className="flex flex-row w-full mt-4 justify-between">
                {[X, Instagram, Youtube, LinkedIn].map((icon, idx) => (
                  <div
                    key={idx}
                    className="bg-[#263548] rounded-full p-[8px] sm:p-[10px] flex items-center justify-center"
                  >
                    <img
                      src={icon}
                      className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]"
                      alt="social-icon"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="bg-white h-[1px] w-full mt-8" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row pt-6 items-center justify-between gap-4">
        <a href="/">
          <img src={SenexxelLogo} className="h-[28px] sm:h-[34px]" alt="logo" />
        </a>
        <label className="font-[Roboto] font-normal text-sm sm:text-base text-white">
          ©2024, All Rights Reserved
        </label>
      </div>
    </div>
  );
};

export default Footer;
