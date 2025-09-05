import React, { useState } from "react";

import AchievementsCards from "./AchievementCards";
import Achievemnt from '../assets/achievements.png';
import Quotes from '../assets/quotes.png';
import QuotesModel from '../assets/quotes-model.png';

const OurAchievements = () => {

    const [years] = useState(["2019", "2020", "2021", "2022", "2023", "2024"])
    const [selected, setSelected] = useState(0)

    const updateSelection = (selection) => {
        setSelected(selection)
    }

    return <div className="flex flex-col items-center pt-[50px] pb-[50px]">
        <label className="font-[Barlow] text-black font-semibold text-[40px]">Our Achievements</label>


        <div className="w-full px-[80px]">
            <div class="w-full text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">

                <ul class="flex flex-wrap -mb-px w-full">
                    {
                        years.map((item, index) => {
                            return <AchievementsCards item={item} index={index} isSelected={index === selected} updateSelection={updateSelection} />
                        })
                    }
                </ul>

                <div>
                </div>
            </div>

            <div className="flex flex-row w-full mt-[55px]">
                <div className="flex-1 flex flex-col pr-[25px] justify-center">
                    <label className="font-[Roboto] text-black text-2xl">Founded with a vision to deliver innovative
                        and sustainable solutions.</label>
                    <label className="font-[Roboto] text-black text-2xl mt-[24px]">Launched our first product, transforming industry workflows.</label>
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <img src={Achievemnt} className="relative" />
                        <div className="absolute bg-[#00000080] top-[20px] right-[65px] px-[10px] rounded-full">
                            <label className="font-[Roboto] text-[20px] font-medium">We Build</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[60px] flex justify-center items-center w-full">
                <div className="bg-linear-to-r to-[#F7FFE0] from-[#E5F2FF] flex flex-row w-full pl-[40px] pr-[40px] py-[30px] rounded-tr-[100px] rounded-bl-[100px]">
                    <div className="flex flex-3 justify-center flex-col">
                        <img src={Quotes} className="w-[40px]" />
                        <label className="mt-[25px] text-black font-[Barlow] text-lg">We are dedicated to exceeding expectations and aligning with your vision, ensuring that your goals become our shared triumph. Your success fuels our drive and defines our purpose</label>
                        <label className="font-[Barlow] text-black text-base font-medium mt-[25px]">Mathew Jagan S</label>
                        <label className="font-[Barlow] text-black text-base font-medium mt-[10px]">Founder and CTO , Senexxel</label>
                    </div>
                    <div className="flex flex-1">
                        <img src={QuotesModel} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default OurAchievements;