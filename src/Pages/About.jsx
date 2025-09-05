import React, { useState } from "react";
import AboutFullScreen from "../assets/about-home.svg";
import AboutLogo from "../assets/about-logo.svg";
import VideoImg from "../assets/video-image.png";
import BannerAbout from "../assets/Banner.png";
import AboutCard from "../Components/AboutCard";
import OurAchievements from "../Components/Achievements";
import InsightsArticle from "../Components/InsightsArticle";
import Footer from "../Components/Footer";

const About = () => {
  const [aboutCards] = useState([
    { id: 1, count: "10+", title: "Integration Partners", about: "What We Do" },
    { id: 2, count: "20+", title: "Customers Worldwide", about: "Driven by Purpose" },
    { id: 3, count: "1000+", title: "Employees Worldwide", about: "Creating Solutions Together" },
  ]);

  return (
    <div className="flex flex-1 bg-white pt-[100px] flex-col">
      {/* Intro Text */}
      <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-12 lg:px-20 text-center max-w-[1000px] mx-auto">
        <label className="font-[Barlow] text-black font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-relaxed">
          Senexxel collaborates with businesses to create{" "}
          <span className="bg-gradient-to-r from-[#294CF3] to-[#77CA04] bg-clip-text text-fill">
            transformative experiences
          </span>{" "}
          that foster engagement and drive excellence
        </label>
      </div>

      {/* Banner + Logo + Video Overlay */}
      <div className="flex flex-col justify-center items-center relative mt-10 px-4">
        <img src={AboutFullScreen} className="relative w-full max-w-[1200px] object-cover" alt="About Banner" />

        {/* Logo Overlay */}
        <img
          src={AboutLogo}
          className="absolute -bottom-20 sm:-bottom-28 md:-bottom-32 w-[120px] sm:w-[150px] md:w-[180px]"
          alt="Logo"
        />

        {/* Video Overlay */}
        <div className="absolute top-[15%] sm:top-[20%] w-[80%] sm:w-[70%] md:w-[600px] h-auto">
          <img src={VideoImg} className="w-full h-auto rounded-[12px] object-cover" alt="Video Placeholder" />
          <div className="absolute inset-0 bg-[#03030316] rounded-[12px]"></div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white flex flex-col w-full items-center pt-[80px] pb-[50px] px-4 sm:px-6 md:px-12">
        <label className="font-[Barlow] text-3xl sm:text-4xl md:text-5xl text-black font-semibold text-center">
          Our{" "}
          <span className="bg-gradient-to-r from-[#046BDF] to-[#023A79] bg-clip-text text-fill">
            Skill
          </span>
        </label>

        {/* Banner + Cards Overlay */}
        <div className="relative w-full mt-8">
          <img
            src={BannerAbout}
            className="w-full object-cover rounded-lg"
            alt="Skill Banner"
          />

          <div className="sm:hidden lg:flex lg:absolute inset-0 flex-col items-start px-4 sm:px-8 md:px-12 lg:px-20 py-6">
            <label className="text-white font-semibold text-xl sm:text-2xl md:text-3xl font-[Barlow] mb-6">
              About Senexxel
            </label>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between w-full gap-6">
              {aboutCards.map((item) => (
                <div key={item.id} className="flex-1 min-w-[200px]">
                  <AboutCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Future sections like achievements */}
      {/* <OurAchievements /> */}
      <Footer />
    </div>
  );
};

export default About;
