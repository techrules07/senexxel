import ArrowRight from "../assets/arrow-right-greater.svg";
import Automative from '../assets/automotive.svg';
import Banking from '../assets/banking.svg';
import CaptialMarkets from '../assets/capital-marketting.svg';
import Healthcare from '../assets/health-care.svg';
import Insurance from '../assets/insurance.svg';
import LifeSciences from '../assets/life-science.svg';
import Education from '../assets/education.svg';
import Manufacturing from '../assets/manufacturing.svg';
import Retail from '../assets/retails.svg';
import Logistics from '../assets/logistics.svg';
import CommunicationTechnology from '../assets/communication.svg';
import Government from '../assets/government.svg';
import RightArrowRight from '../assets/right-arrow-white.svg';
import IconsGroup from '../assets/icons-group.svg';

import ServiceMenuItems from "./ServiceMenuItems";
import { useState } from "react";
import SubMenuItems from "./SubMenuItems";
import { subItems } from "../utils/Constant";

const IndustriesMenu = (props) => {

    const [selectedItem, setSelectedItem] = useState(201);
    const [selectedSubItem, setSelectedSubItem] = useState(0);


    const updateSelection = (id) => {
        setSelectedSubItem(0);
        setSelectedItem(id);
    }

    const updateSubSection = (id) => {
        setSelectedSubItem(id);
    }

    const menuItems = [
        { id: 201, icon: Automative, label: "Automative", description: 'Empowering the automotive industry with cutting-edge solutions for supply chain optimization, predictive maintenance, and connected vehicle innovations. From streamlining operations to enhancing customer experience, we deliver end-to-end digital transformation.' },
        { id: 202, icon: Banking, label: "Banking", description: 'Revolutionizing banking with secure, scalable, and innovative technologies. We provide solutions for core banking modernization, digital payments, fraud detection, and customer-centric financial platforms to drive trust and growth.' },
        { id: 203, icon: CaptialMarkets, label: "Captial Markets", description: 'Delivering agile solutions for investment management, trading platforms, and portfolio optimization. Our expertise ensures compliance, operational efficiency, and seamless integration of financial services technologies.' },
        { id: 204, icon: Healthcare, label: "Healthcare", description: 'Enhancing patient care and operational efficiency with AI-driven health solutions, EHR systems integration, and telemedicine platforms. We prioritize data security and seamless communication for superior healthcare services.' },
        { id: 205, icon: Insurance, label: "Insurance", description: 'Redefining the insurance industry with digital underwriting, claim automation, risk analytics, and customer-centric platforms. Our solutions help insurers deliver tailored products and services for modern clients.' },
        { id: 206, icon: LifeSciences, label: "Life Sciences", description: 'Driving innovation in research, development, and product delivery. We specialize in regulatory compliance systems, lab automation, and AI-powered solutions for faster drug discovery and patient-centric healthcare.' },
        { id: 207, icon: Education, label: "Education", description: 'Transforming education with e-learning platforms, virtual classrooms, and administrative automation. Our solutions focus on accessibility, engagement, and modernized learning environments.' },
        { id: 208, icon: Manufacturing, label: "Manufacturing", description: 'Boosting efficiency with IoT-driven automation, smart factories, and predictive analytics. We enable manufacturers to embrace Industry 4.0 and scale operations seamlessly.' },
        { id: 209, icon: Retail, label: "Retail", description: 'Revolutionizing the retail experience with omnichannel solutions, inventory management, and personalized marketing. Our tech empowers businesses to meet the demands of modern consumers effectively.' },
        { id: 210, icon: Logistics, label: "Logistics", description: 'Optimizing supply chains and delivery networks with real-time tracking, fleet management, and route optimization. Our solutions improve transparency and operational excellence in logistics.' },
        { id: 211, icon: CommunicationTechnology, label: "Communication & Technology", description: 'Innovating communication and tech industries with 5G enablement, AI-powered chatbots, and scalable cloud infrastructure. We drive seamless connectivity and transformative growth.' },
        { id: 212, icon: Government, label: "Government", description: 'Modernizing government services with digital platforms, secure data management, and citizen-centric solutions. Our technology bridges the gap between public needs and efficient governance.' },
    ]

    return <div className="mt-3 w-full flex-row flex rounded-2xl bg-white px-[20px] py-[20px] shadow-lg">
        <div className="flex-[3] px-[20px] py-[20px] bg-[#F4F4F4] rounded-[10px] flex-col">
            <div className="flex flex-row items-center">
                <label className="font-[Barlow] font-medium text-[#000000] text-lg">INDUSTRIES</label>
                <img className="mx-[20px] h-[8px] w-[16px]" src={ArrowRight} />
            </div>
            <div className="flex flex-col mt-[10px] overflow-y-scroll h-[480px] pr-3">
                {
                    menuItems.map(item => <ServiceMenuItems selectedItem={selectedItem} updateSelection={updateSelection} key={item.id} item={item} />)
                }
            </div>
        </div>
        <div className="flex-[7] mx-[20px]">
            <div className="flex flex-col px-[20px] py-[20px] rounded-[10px] border-[1px] border-[#D9D9D9]">
                <label className="text-black font-[Barlow] font-semibold text-[26px]">{menuItems.filter(item => item.id == selectedItem)[0]?.label}</label>
                <label className="font-[Roboto] text-[#00000080] text-lg font-normal mt-[20px]" >{menuItems.filter(item => item.id == selectedItem)[0]?.description}</label>


                <div className="flex flex-wrap mt-[25px]">
                    {subItems.filter(item => item.parentId === selectedItem).map((item) => {
                        return <SubMenuItems selectedSubItem={selectedSubItem} updateSelection={updateSubSection} key={item.id} item={item} click={props.click} />
                    })}
                </div>

                <div>
                    <div className="flex flex-row py-[18px] px-[20px] bg-linear-to-r to-[#B4FFA3] from-[#043E7F] my-[30px] rounded-[14px] items-center justify-between">
                        <div className="flex flex-row items-center">
                            <label className="font-[Barlow] font-semibold text-[28px]">AI {menuItems.filter(item => item.id == selectedItem)[0]?.label} Insights</label>
                            <img src={RightArrowRight} className="w-[27px] h-[20px] ml-[20px]" />
                        </div>
                        <img src={IconsGroup} className="h-[80px]"/>
                    </div>

                </div>
            </div>


        </div>
    </div>
}

export default IndustriesMenu;
