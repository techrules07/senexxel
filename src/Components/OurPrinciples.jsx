import React from "react";
import PrincipleGroups from "../assets/principle-groups.svg";

const OurPrinciples = () => {
    return (
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-14 lg:px-[55px]">
            <label className="font-[Barlow] text-black text-xl sm:text-2xl md:text-3xl font-bold text-center">
                Our Core Principles for Business Growth
            </label>

            <div className="w-full flex flex-col lg:flex-row mt-10 mb-10 lg:mt-[50px] lg:mb-[50px] gap-8 lg:gap-[50px] lg:px-[50px]">
                <img
                    src={PrincipleGroups}
                    className="h-60 sm:h-72 md:h-96 lg:h-[400px] mx-auto"
                    alt="Principle Groups"
                />

                <div className="flex flex-col bg-[#F0FFE9] rounded-2xl px-6 py-6 sm:px-10 sm:py-10 w-full">
                    <div className="flex flex-col">
                        <label className="font-[Barlow] font-semibold text-lg sm:text-xl md:text-[28px] text-black">
                            Precision in Execution
                        </label>
                        <label className="font-[Barlow] text-black font-normal mt-1 text-sm sm:text-base">
                            Delivering excellence through meticulous execution
                        </label>
                    </div>

                    <div className="flex flex-col mt-6 sm:mt-8 md:mt-[35px]">
                        <label className="font-[Barlow] font-semibold text-lg sm:text-xl md:text-[28px] text-black">
                            Innovating for Impact
                        </label>
                        <label className="mt-1 font-[Barlow] text-black font-normal text-sm sm:text-base">
                            Driving transformative solutions with innovation
                        </label>
                    </div>

                    <div className="flex flex-col mt-6 sm:mt-8 md:mt-[35px]">
                        <label className="font-[Barlow] font-semibold text-lg sm:text-xl md:text-[28px] text-black">
                            Collaboration at the Core
                        </label>
                        <label className="mt-1 font-[Barlow] text-black font-normal text-sm sm:text-base">
                            Empowering success through seamless collaboration
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPrinciples;
