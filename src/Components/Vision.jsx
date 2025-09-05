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

    const [careers, setCareers] = useState([
        { id: 1, title: "Software Developers", country: 'INDIA', image: SoftwareDeveloper, flag: IndiaFlag, description: 'Design and develop high-volume, low-latency applications for mission-critical systems, ensuring top-tier availability and performance.', experience: '3 to 5' },
        { id: 2, title: "UX/UI Designer", country: 'USA', image: UIUXDesigner, flag: USAFlag, description: 'Help build design work across multiple mediums on various projects, from small pieces to multi-channel campaigns. Build digital assets for marketing ...', experience: '5 to 7' },
        { id: 3, title: "Cloud Engineer", country: 'INDIA', image: CloudEngineer, flag: IndiaFlag, description: 'Design, deploy, and manage scalable and secure cloud solutions, ensuring optimal performance, reliability, and seamless integration with business needs.', experience: '7 to 10' },
        { id: 4, title: "SALES & MARKETING", country: 'USA', image: SalesMarketing, flag: USAFlag, description: 'Manage Google Adwords Campaigns to improve Return on Investment and generate reports Develop performance metrics to provide recommendations.', experience: '3 to 5' }
    ])

    const [reviews] = useState([
        { id: 1, profile: FutureModel1, name: 'Jahan Melad', position: 'CTO, Senexxel', content: 'At Senexxel, every idea is valued, and innovation is a way of life. I feel inspired every day to contribute to meaningful projects that make a difference.' },
        { id: 2, profile: FutureModel2, name: 'Savansa Mita', position: 'Team Lead, Senexxel', content: 'Working here means being part of a supportive team that celebrates diverse ideas. Together, we achieve more than I ever thought possible.' },
        { id: 3, profile: FutureModel3, name: 'Andrew Bare', position: 'Product Designer', content: 'The company’s commitment to excellence is truly inspiring. I’m proud to work in an environment that prioritizes quality and values hard work.' }])

    return <div className="flex-1 flex flex-col bg-white pt-[70px] items-center scroll-smooth">
        <label className="text-black font-[Barlow] font-semibold text-[34px]">Infinite Opportunities, United by One Vision</label>

        <div className="flex flex-col items-center mt-[30px] relative w-full px-[55px]">
            <label className="cursor-pointer font-[Barlow] font-semibold text-[#046BDF] text-[22px] underline relative">Explore all jobs</label>
            <div className="flex flex-row absolute top-0 right-[55px]">
                <div className='cursor-pointer rounded-full bg-gradient-to-t from-[#182C8D] to-[#294CF3] w-[44px] h-[44px] flex items-center justify-center'>
                    <img src={ArrowLeft} className='w-[16px] cursor-pointer' />
                </div>

                <div className='cursor-pointer rounded-full bg-gradient-to-t from-[#182C8D] to-[#294CF3] w-[44px] h-[44px] flex items-center justify-center ml-[30px]'>
                    <img src={ArrowRight} className='w-[16px] cursor-pointer' />
                </div>
            </div>

            <div className="w-full flex flex-row mt-[32px]">
                {careers.map((career, index) => (<div className="flex flex-col flex-[0_0_25%] px-[10px]">
                    <div className="flex w-full flex-col relative">
                        <img src={career.image} className="w-[full] object-cover rounded-[10px] relative" />
                        <div className="absolute top-[10px] right-[10px] bg-[#00000080] px-[8px] py-[4px] rounded-full flex flex-row">
                            <img src={career.flag} />
                            <label className="text-white font-medium text-base ml-[8px]">{career.country}</label>
                        </div>
                    </div>

                    <label className="font=[Barlow] text-[#046BDF] font-semibold text-base mt-[15px]">{career.title}</label>
                    <label className="font-[Roboto] text-xs font-normal text-[#000000] mt-[12px]">{career.description}</label>
                    <label className="font-normal text-sm font-[Roboto] text-[#000000] mt-[12px]">Years of Exp : {career.experience}</label>
                </div>))}
            </div>
        </div>

        <div className="w-full bg-[#F1F8FF] mt-[55px] flex flex-row ">
            <img src={CoreValuesLeft} />
            <div className="w-full mx-[42px] pl-[50px] flex justify-center flex-col">
                <label className="bg-gradient-to-r from-[#046BDF] to-[#023A79] bg-clip-text text-fill font-[Barlow] font-semibold text-4xl">Our Core Values in the Workplace</label>
                <div className="flex flex-col mt-[40px]">
                    <label className="font-[Barlow] font-semibold text-[28px] text-[#000000]">Innovation at Every Step</label>
                    <label className="font-normal font-[Roboto] text-[#000000] text-[22px] mt-[15px]">We embrace creativity and innovation, turning challenges into opportunities to deliver cutting-edge solutions.</label>

                    <label className="font-[Barlow] font-semibold text-[28px] text-[#000000] mt-[40px]">Commitment to Excellence</label>
                    <label className="font-normal font-[Roboto] text-[#000000] text-[22px] mt-[15px]">We uphold the highest standards, ensuring quality and delivering consistent value to our clients and partners.</label>

                    <label className="font-[Barlow] font-semibold text-[28px] text-[#000000] mt-[40px]">Collaboration for Success</label>
                    <label className="font-normal font-[Roboto] text-[#000000] text-[22px] mt-[15px]">Teamwork drives us, fostering an inclusive environment where diverse perspectives create extraordinary results.</label>
                </div>
            </div>
        </div>

        <div className="w-full flex pt-[70px] justify-center flex-col">
            <div className="w-full flex justify-center">
                <label className="font-[Barlow] font-semibold text-4xl text-black">Join at <span className="bg-gradient-to-r from-[#046BDF] to-[#B4FF05] bg-clip-text text-fill">Senexxel</span> and Shape Your Future</label>
            </div>
            <div className="w-full overflow-x-auto">
                <div className="w-full flex flex-row mt-[50px] flex-nowrap ">
                    <div className="ml-[70px] w-[420px] flex-shrink-0">
                        <img src={ShapeYourModel} />
                    </div>
                    <div className="flex flex-1 flex-nowrap ml-[30px] ">
                        {
                            reviews.map((review) => (
                                <div key={review.id} className="flex flex-col px-[10px] flex-shrink-0">
                                    <div className="border border-solid border-[#00000026] h-[280px] w-[260px] rounded-[20px] px-[10px] py-[10px]">
                                        {/* <div className="w-full bg-[#F0FFE9] rounded-[20px] p-[10px] flex flex-row">
                                            <img src={review.profile} className="w-[56] h-[48px] rounded-full object-cover" />
                                            <div className="flex flex-col ml-[10px]">
                                                <label className="font-[Barlow] font-medium text-xl bg-gradient-to-r from-[#046BDF] to-[#023A79] bg-clip-text text-fill ">{review.name}</label>
                                                <label className="font-[Roboto] font-normal text-sm text-[#00000080]">{review.position}</label>
                                            </div>
                                        </div> */}
                                        <p className="font-[Roboto] font-normal text-lg text-[#000000B3] mt-[20px]">{review.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full flex  py-[50px] px-[70px] flex-col">
                    <label className="font-[Barlow] font-semibold text-4xl text-[#000000]">Stay Connected</label>

                    <div className="flex flex-col items-start w-full bg-linear-to-r to-[#C3E0FF] from-[#F1FFC6] mt-[38px] px-[40px] py-[75px] relative rounded-[20px]">
                        <label className="font-[Roboto] font-medium text-3xl text-[#000000]">What if Your Job Brought Joy Every Day?</label>
                        <div className="mt-[30px] px-[18px] border border-solid border-[#023A79] bg-clip-text text-transparent rounded-full px-[18px] py-[12px] cursor-pointer" >
                            <label className="cursor-pointer font-[Barlow] font-medium text-xl bg-gradient-to-r from-[#046BDF] to-[#023A79] bg-clip-text text-fill">Start Your Journey</label>
                        </div>

                        <img src={StayConnected} className="h-[318px] absolute bottom-0 right-[20px]" />
                    </div>
        </div>

        <Footer />
    </div>
}

export default Vision;