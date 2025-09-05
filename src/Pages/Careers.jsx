import React from "react";
import CareerBanner from "../assets/career-banner.png";
import BannerGroupImage from "../assets/banner-group.png";
import Vision from "../Components/Vision";

const Careers = () => { 

    const handleClick = () => { 
       window.scrollTo(0, 800);
    }
    return <div className="flex-1 flex flex-col bg-white pt-[75px]">
        <div className="flex flex-col h-[720px] bg-gradient-to-t from-[#FFFFFF] to-[#F1FFD8] relative justify-end">
            <img src={CareerBanner} className="w-full h-[400px] object-cover absolute bottom-[100px]" />
            <div className="w-full absolute top-0 flex flex-col items-center">
                <div className="w-[700px] flex mt-[56px] flex-col items-center">
                    <label className="font-[Barlow] font-semibold text-[40px] text-black text-center">Where Passion Meets Opportunity Join Our Family</label>
                    <label className="text-black font-[Roboto] font-normal text-xl text-center mt-[20px]">Where your passion meets purpose, we create a workplace that inspires growth, happiness, impactful connections, and customer satisfaction.</label>

                    <div className="cursor-pointer px-[24px] py-[12px] flex flex-col items-center mt-[40px] bg-gradient-to-r from-[#03295D] to-[#2C78CD] rounded-[10px] cursor-pointer scroll-smooth  cursor-pointer" onClick={handleClick}>
                        <label className="font-[Barlow] font-medium text-xl cursor-pointer" onClick={handleClick}>Start your journey</label>
                    </div>
                </div>
            </div>
            <img src={BannerGroupImage} className="mx-[200px]" />
        </div>

        <Vision />
    </div>
}

export default Careers;