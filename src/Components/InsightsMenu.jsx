import React, { useState } from 'react';
import ArrowRight from "../assets/arrow-right-greater.svg";
import Blogs from '../assets/blogs.svg';
import Podcasts from '../assets/podcasts.svg';
import CaseStudies from '../assets/case-studies.svg';
import ServiceMenuItems from './ServiceMenuItems';
import InsightsMenuItems from './InsightsMenuItem';
import SubMenuItems from './SubMenuItems';

import { subItems } from "../utils/Constant";

const InsightsMenu = (props) => {
    const menuItems = [
        {id: 301, icon: Blogs, label: 'Blogs', description: 'Explore insightful articles, current trends, and practical guides for your industry.' },
        {id: 302, icon: Podcasts, label: 'Podcasts', description: 'Tune in to expert discussions, inspiring stories, and forward-thinking ideas from around the world.' },
        {id: 303, icon: CaseStudies, label: 'Case Studies', description: 'Learn how our innovative strategies have empowered businesses to achieve lasting success.' }
    ]

    const [selectedSubItem, setSelectedSubItem] = useState(0);
    const [selectedItem, setSelectedItem] = useState(301);

    const updateSubSection = (id) => {
        setSelectedSubItem(id);
    }

    const updateSelection = (id) => {
        setSelectedItem(id);
        setSelectedSubItem(0);
    }

    return <div onMouseLeave={() => { props.updateInsightsMenu(false) }} onMouseEnter={() => { props.updateInsightsMenu(true) }} className="w-full flex-row flex  bg-white px-[20px] py-[20px]">
        <div className="flex-[3] px-[20px] py-[20px] bg-[#F4F4F4] rounded-[10px] flex-col">
            <div className="flex flex-row items-center">
                <label className="font-[Barlow] font-medium text-[#000000] text-lg">INSIGHTS</label>
                <img className="mx-[20px] h-[8px] w-[16px]" src={ArrowRight} />
            </div>
            <div className="flex flex-col mt-[10px]">
                {
                    menuItems.map(item => <InsightsMenuItems selectedItem={selectedItem} updateSelection={updateSelection} key={item.id} item={item} />)
                }
            </div>
        </div>
        <div className="flex-[7] mx-[20px]">
            <div className="flex flex-col px-[20px] py-[20px] rounded-[10px] border-[1px] border-[#D9D9D9]">
                <label className="text-black font-[Barlow] font-semibold text-[26px]">{menuItems.filter(item => item.id==selectedItem)[0].label}</label>
                <label className="font-[Roboto] text-[#00000080] text-lg font-normal mt-[20px]" >{menuItems.filter(item => item.id==selectedItem)[0].description}</label>


                <div className="flex flex-wrap mt-[25px]">
                    {subItems.filter(item => item.parentId === selectedItem).map((item) => {
                        return <SubMenuItems selectedSubItem={selectedSubItem} updateSelection={updateSubSection} key={item.id} item={item} click={props.click} />
                    })}
                </div>
            </div>


        </div>
    </div>
}

export default InsightsMenu;