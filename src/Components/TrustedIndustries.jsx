import React from "react";
import Recordings from "../assets/recording.png";
import Play from "../assets/play.svg";
import Quotes from "../assets/quotes.svg";
import ContactUsPoster from "../assets/contact-us-poster.png";
import ContactUsModel from "../assets/ContactUs-Model.png";
import SenexxelLogo from "../assets/senexxel.svg";

const TrustedIndustries = () => {
  return (
    <div className="flex flex-col w-full bg-[#F0FFE9] py-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row w-full px-4 sm:px-8 lg:px-[60px] gap-8 overflow-x-auto">
        {/* Left Column */}
        <div className="flex flex-col min-w-[300px] flex-shrink-0">
          <label className="text-black font-[Barlow] text-xl sm:text-2xl md:text-[26px] font-bold">
            Trusted by Industry Leaders
          </label>
          <label className="text-black text-base sm:text-lg font-medium">
            Real-world feedback from industry experts
          </label>

          <div className="w-[280px] sm:w-[320px] md:w-[360px] h-[200px] sm:h-[240px] md:h-[270px] relative mt-6 flex justify-center items-center">
            <img
              src={Recordings}
              alt="Recording"
              className="w-full h-full rounded-[20px] object-cover"
            />
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#DAFF60] absolute rounded-full p-4">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#03295D64] to-[#2C78CD64] p-3">
                <div className="w-full h-full flex justify-center items-center bg-gradient-to-r from-[#03295D] to-[#2C78CD] rounded-full">
                  <img src={Play} className="w-3 sm:w-4" alt="Play" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex flex-row gap-4 flex-shrink-0 items-end">
          {[1, 2, 3, 4].map((_, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[300px] md:w-[320px] h-[200px] sm:h-[240px] md:h-[270px] bg-white rounded-[20px] p-4 flex flex-col flex-shrink-0"
            >
              <div className="w-full flex justify-end mt-4">
                <img className="w-6" src={Quotes} alt="Quotes" />
              </div>
              <label className="text-[#59585A] mt-4 text-sm sm:text-base">
                Senexxel made our operations smoother and more efficient. Their
                team really understands what we need and gets the job done
                right. They’re a trusted partner in our growth.
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-[50px] my-10 gap-6 items-center">
        {/* Left Box */}
        <div className="flex-1 w-full bg-[#EEEFFF] flex flex-col justify-center rounded-[10px] p-6 sm:p-10 items-start">
          <label className="text-black font-semibold text-lg sm:text-xl md:text-[26px] font-[Barlow]">
            Ready to Elevate Your Business?
          </label>
          <label className="text-black font-normal mt-2 text-sm sm:text-base">
            Contact us to explore solutions tailored to your needs
          </label>

          <div className="cursor-pointer flex border border-[#294CF3] rounded-full px-6 py-2 mt-6">
            <label className="cursor-pointer text-[#294CF3] text-sm sm:text-base">
              Contact Us
            </label>
          </div>
        </div>

        {/* Right Box */}
        <div className="flex-1 flex justify-center relative">
          <img
            src={ContactUsPoster}
            alt="Contact Us Poster"
            className="h-[220px] sm:h-[260px] md:h-[300px] object-contain"
          />
          <img
            src={ContactUsModel}
            alt="Contact Us Model"
            className="absolute bottom-0 right-[10%] w-32 sm:w-40 md:w-auto"
          />

          <div className="cursor-pointer flex flex-row bg-gradient-to-r from-[#294CF3] to-[#182C8D] absolute left-4 top-4 px-4 py-2 rounded-full items-center">
            <label className="cursor-pointer text-white font-normal text-base sm:text-xl">
              24/7
            </label>
            <img
              className="cursor-pointer w-16 sm:w-[84px] ml-2"
              src={SenexxelLogo}
              alt="Senexxel Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedIndustries;
