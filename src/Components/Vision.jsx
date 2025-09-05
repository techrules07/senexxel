import React, { useState } from "react";
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import SoftwareDeveloper from '../assets/software-developer.png';
import UIUXDesigner from '../assets/uiux-designer.png';
import CloudEngineer from '../assets/cloud-engineer.png';
import SalesMarketing from '../assets/sales-marketing.png';
import IndiaFlag from '../assets/india-flag.png';
import USAFlag from '../assets/usa-flag.png';
import CoreValuesLeft from '../assets/core-values.png';
import ShapeYourModel from '../assets/shape-your-future-model.png';
import FutureModel1 from '../assets/Future-Model1.png';
import FutureModel2 from '../assets/Future-model2.png';
import FutureModel3 from '../assets/Future-model3.png';
import StayConnected from '../assets/stay-connected.png';

import Footer from "./Footer";

const Vision = () => {
  const [careers] = useState([
    { id: 1, title: "Software Developers", country: 'INDIA', image: SoftwareDeveloper, flag: IndiaFlag, description: 'Design and develop high-volume, low-latency applications for mission-critical systems, ensuring top-tier availability and performance.', experience: '3 to 5' },
    { id: 2, title: "UX/UI Designer", country: 'USA', image: UIUXDesigner, flag: USAFlag, description: 'Help build design work across multiple mediums on various projects, from small pieces to multi-channel campaigns. Build digital assets for marketing ...', experience: '5 to 7' },
    { id: 3, title: "Cloud Engineer", country: 'INDIA', image: CloudEngineer, flag: IndiaFlag, description: 'Design, deploy, and manage scalable and secure cloud solutions, ensuring optimal performance, reliability, and seamless integration with business needs.', experience: '7 to 10' },
    { id: 4, title: "SALES & MARKETING", country: 'USA', image: SalesMarketing, flag: USAFlag, description: 'Manage Google Adwords Campaigns to improve Return on Investment and generate reports Develop performance metrics to provide recommendations.', experience: '3 to 5' }
  ]);

  const [reviews] = useState([
    { id: 1, profile: FutureModel1, name: 'Jahan Melad', position: 'CTO, Senexxel', content: 'At Senexxel, every idea is valued, and innovation is a way of life. I feel inspired every day to contribute to meaningful projects that make a difference.' },
    { id: 2, profile: FutureModel2, name: 'Savansa Mita', position: 'Team Lead, Senexxel', content: 'Working here means being part of a supportive team that celebrates diverse ideas. Together, we achieve more than I ever thought possible.' },
    { id: 3, profile: FutureModel3, name: 'Andrew Bare', position: 'Product Designer', content: 'The company’s commitment to excellence is truly inspiring. I’m proud to work in an environment that prioritizes quality and values hard work.' }
  ]);

  return (
    <div className="flex-1 flex flex-col bg-white pt-[70px] items-center px-4 sm:px-6 lg:px-12 scroll-smooth">
      {/* Section Title */}
      <label className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl md:text-[34px] text-center">
        Infinite Opportunities, United by One Vision
      </label>

      {/* Jobs Section */}
      <div className="flex flex-col items-center mt-6 relative w-full">
        <label className="cursor-pointer font-[Barlow] font-semibold text-[#046BDF] text-lg sm:text-xl underline">
          Explore all jobs
        </label>

        {/* Navigation Arrows */}
        <div className="hidden sm:flex flex-row absolute top-0 right-0">
          <div className='cursor-pointer rounded-full bg-gradient-to-t from-[#182C8D] to-[#294CF3] w-10 h-10 flex items-center justify-center'>
            <img src={ArrowLeft} className='w-4' />
          </div>
          <div className='cursor-pointer rounded-full bg-gradient-to-t from-[#182C8D] to-[#294CF3] w-10 h-10 flex items-center justify-center ml-4'>
            <img src={ArrowRight} className='w-4' />
          </div>
        </div>

        {/* Careers Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {careers.map((career) => (
            <div key={career.id} className="flex flex-col">
              <div className="relative w-full">
                <img src={career.image} className="w-full h-56 object-cover rounded-[10px]" />
                <div className="absolute top-2 right-2 bg-[#00000080] px-2 py-1 rounded-full flex items-center">
                  <img src={career.flag} className="w-5 h-5" />
                  <label className="text-white font-medium text-sm ml-2">{career.country}</label>
                </div>
              </div>
              <label className="text-[#046BDF] font-semibold text-base mt-3">{career.title}</label>
              <p className="font-[Roboto] text-sm text-[#000000] mt-2">{career.description}</p>
              <p className="text-sm text-[#000000] mt-2">Years of Exp : {career.experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full bg-[#F1F8FF] mt-10 flex flex-col lg:flex-row items-center lg:items-start">
        <img src={CoreValuesLeft} className="w-full lg:w-1/2 object-contain" />
        <div className="w-full lg:w-1/2 px-6 py-8 lg:px-12 flex flex-col">
          <label className="bg-gradient-to-r from-[#046BDF] to-[#023A79] bg-clip-text text-transparent font-[Barlow] font-semibold text-2xl sm:text-3xl md:text-4xl">
            Our Core Values in the Workplace
          </label>

          <div className="mt-8 space-y-8">
            <div>
              <label className="font-[Barlow] font-semibold text-xl sm:text-2xl text-black">Innovation at Every Step</label>
              <p className="font-[Roboto] text-base sm:text-lg text-black mt-2">
                We embrace creativity and innovation, turning challenges into opportunities to deliver cutting-edge solutions.
              </p>
            </div>

            <div>
              <label className="font-[Barlow] font-semibold text-xl sm:text-2xl text-black">Commitment to Excellence</label>
              <p className="font-[Roboto] text-base sm:text-lg text-black mt-2">
                We uphold the highest standards, ensuring quality and delivering consistent value to our clients and partners.
              </p>
            </div>

            <div>
              <label className="font-[Barlow] font-semibold text-xl sm:text-2xl text-black">Collaboration for Success</label>
              <p className="font-[Roboto] text-base sm:text-lg text-black mt-2">
                Teamwork drives us, fostering an inclusive environment where diverse perspectives create extraordinary results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Section */}
      <div className="w-full flex flex-col items-center pt-12">
        <label className="font-[Barlow] font-semibold text-2xl sm:text-3xl md:text-4xl text-black text-center">
          Join at <span className="bg-gradient-to-r from-[#046BDF] to-[#B4FF05] bg-clip-text text-transparent">Senexxel</span> and Shape Your Future
        </label>

        <div className="w-full overflow-x-auto mt-8">
          <div className="flex flex-row gap-6 px-4">
            <div className="flex-shrink-0 w-72">
              <img src={ShapeYourModel} className="w-full rounded-lg" />
            </div>
            <div className="flex flex-row gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="flex-shrink-0 border border-[#00000026] rounded-[20px] p-4 w-64 h-72">
                  <p className="font-[Roboto] text-sm sm:text-base text-[#000000B3]">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stay Connected Section */}
      <div className="w-full flex flex-col py-12 px-4 sm:px-8 lg:px-16">
        <label className="font-[Barlow] font-semibold text-2xl sm:text-3xl md:text-4xl text-black">Stay Connected</label>

        <div className="relative flex flex-col mt-6 px-6 py-12 rounded-[20px] bg-gradient-to-r from-[#F1FFC6] to-[#C3E0FF] overflow-hidden">
          <label className="font-[Roboto] font-medium text-xl sm:text-2xl md:text-3xl text-black max-w-xl">
            What if Your Job Brought Joy Every Day?
          </label>

          <div className="mt-6 border border-[#023A79] rounded-full px-6 py-3 w-fit cursor-pointer">
            <label className="font-[Barlow] font-medium text-lg sm:text-xl bg-gradient-to-r from-[#046BDF] to-[#023A79] bg-clip-text text-transparent">
              Start Your Journey
            </label>
          </div>

          <img src={StayConnected} className="h-40 sm:h-56 md:h-72 lg:h-80 absolute bottom-0 right-4" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vision;
