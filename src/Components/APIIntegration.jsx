import React from "react";

import API1 from '../assets/api-1.png'
import API2 from '../assets/api-2.png'
import APICard1 from '../assets/api-card-1.svg';
import APICard2 from '../assets/api-card-2.svg';
import APICard3 from '../assets/api-card-3.svg';
import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

const APIIntegration = () => {
  return (
    <div className="px-4 md:px-10 lg:px-16">
      {/* Heading */}
      <p className="text-center text-2xl md:text-4xl mt-10 font-[Barlow] font-semibold text-black">
        API Development and Management
      </p>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row my-10 md:my-16 items-center gap-8">
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img className="w-[200px] md:w-[300px] relative z-[1]" src={API1} alt="API 1" />
            <img src={SemiCircleRect} className="absolute -top-20 -left-20 z-0 w-[150px] md:w-[200px]" />
            <img src={Dots} className="absolute -bottom-12 -right-14 z-0 w-[100px]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex bg-[#DFEEFF] rounded-full px-3 py-1 w-fit">
            <label className="font-[Roboto] text-sm md:text-base text-[#014490]">
              UNLOCK BUSINESS POTENTIAL
            </label>
          </div>
          <label className="font-[Barlow] font-semibold text-xl md:text-3xl text-black mt-3">
            Efficient API Ecosystems
          </label>
          <p className="mt-4 text-black font-[Roboto] text-base md:text-lg lg:text-xl max-w-xl">
            Develop robust APIs for seamless interaction across platforms. Ensure secure, scalable, 
            and reliable API management for enterprise growth.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse my-10 md:my-36 items-center gap-8">
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img className="w-[200px] md:w-[300px] relative z-[1]" src={API2} alt="API 2" />
            <div className="absolute -top-16 -right-16 z-0 w-[120px] md:w-[160px] h-[120px] md:h-[160px] rounded-full bg-[#046BDF]" />
            <img src={Dotted} className="absolute -bottom-12 -left-12 z-0 w-[100px]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex bg-[#DFEEFF] rounded-full px-3 py-1 w-fit">
            <label className="font-[Roboto] text-sm md:text-base text-[#014490]">
              EMPOWER DIGITAL INTERACTIONS
            </label>
          </div>
          <label className="font-[Barlow] font-semibold text-xl md:text-3xl text-black mt-3">
            APIs for Enhanced Connectivity
          </label>
          <p className="mt-4 text-black font-[Roboto] text-base md:text-lg lg:text-xl max-w-xl">
            Enable dynamic interactions between applications and systems. Drive innovation with APIs 
            that deliver real-time functionality and scalability.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-col mt-12 items-center">
        <label className="text-black font-[Barlow] font-semibold text-xl md:text-3xl text-center">
          Discover more of Managed IT Services
        </label>

        <div className="flex flex-col md:flex-row w-full gap-6 mt-8">
          {[
            { icon: APICard1, title: "IOT Integration", text: "We integrate IoT devices with your IT systems for real-time data collection and improved automation." },
            { icon: APICard2, title: "Data Integration Services", text: "Our data integration unifies multiple sources for real-time analytics and better decision-making." },
            { icon: APICard3, title: "Cloud Tech Integration", text: "Our cloud integration links on-premises systems with cloud services for smooth data flow and collaboration." }
          ].map((card, idx) => (
            <div key={idx} className="flex-1 flex justify-center">
              <div className="flex flex-col shadow-md border border-[#CECECE] rounded-[10px] px-4 py-6 w-full max-w-sm">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-[#EFFFEB] rounded-[10px] p-4">
                    <img src={card.icon} className="w-[40px] md:w-[50px]" alt={card.title} />
                  </div>
                  <label className="ml-4 text-black font-[Barlow] font-medium text-lg md:text-xl">
                    {card.title}
                  </label>
                </div>
                <p className="mt-4 text-[#000000B3] font-[Roboto] text-sm md:text-base">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="flex flex-col w-full items-center justify-center py-12">
        <div className="flex bg-[#DFEEFF] rounded-full px-4 py-1">
          <label className="font-[Roboto] text-sm md:text-base text-[#014490]">
            Managed IT Services
          </label>
        </div>
        <label className="text-black font-[Barlow] font-semibold text-xl md:text-3xl mt-5 text-center">
          Our Proven Path to Excellence
        </label>

        <div className="flex flex-col md:flex-row w-full md:w-[85%] bg-[#E9F0FF] rounded-[20px] mt-8 p-6 gap-6">
          {[
            { title: "Requirement Analysis", text: "Understanding and defining integration needs to ensure seamless communication between systems." },
            { title: "Custom Integration Development", text: "Building tailored interfaces to connect diverse systems effectively." },
            { title: "Performance Optimization", text: "Continuous monitoring to maintain efficiency and reduce downtime." }
          ].map((step, idx) => (
            <div key={idx} className="flex-1">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-b from-[#03295D] to-[#2C78CD] px-6 py-6 rounded-[10px] overflow-hidden">
                <label className="text-[#D8FF8F] font-[Barlow] text-xl md:text-2xl font-semibold">
                  {step.title}
                </label>
                <p className="text-white font-[Roboto] text-sm md:text-lg mt-4">
                  {step.text}
                </p>
                <div className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] p-2 bg-[#F4FFC34D] rounded-full absolute -right-10 -top-10 flex justify-center items-center">
                  <div className="w-full h-full bg-[#F4FFC399] rounded-full flex justify-center items-center p-2">
                    <div className="w-full h-full bg-[#F4FFC3] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default APIIntegration;