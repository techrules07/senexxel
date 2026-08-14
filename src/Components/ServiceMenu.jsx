import React from "react";
import ArrowRight from "../assets/arrow-right-greater.svg";
import SystemIntegration from "../assets/system-integration.svg";
import ManagedItServices from "../assets/managed-it-services.svg";
import ApplicationServices from "../assets/application-services.svg";
import InfraServices from "../assets/infra-services.svg";
import BusinessProcess from "../assets/business-process.svg";
import ConsultingServices from "../assets/consulting-services.svg";
import ServiceMenuItems from "./ServiceMenuItems";
import SubMenuItems from "./SubMenuItems";

import { subItems } from "../utils/Constant";

const ServiceMenu = (props) => {

    const menuItems = [
        { id: 1, icon: SystemIntegration, label: "System Integration", description: 'Seamlessly connect your IT systems to streamline operations and enhance productivity.' },
        // { id: 2, icon: ManagedItServices, label: "Managed IT Services", description: 'Comprehensive IT management, ensuring your systems run smoothly with 24/7 support.' },
        { id: 3, icon: ApplicationServices, label: "Application Services", description: 'Custom application development and maintenance to drive business growth and innovation.' },
        { id: 4, icon: InfraServices, label: "Infrastructure Services", description: 'Efficient management and optimization of your IT infrastructure for stability and scalability.' },
        { id: 5, icon: BusinessProcess, label: "Business process Services", description: 'Automating and optimizing workflows to improve efficiency and reduce operational costs.' },
        { id: 6, icon: ConsultingServices, label: "Consulting Services", description: 'Strategic IT consulting to guide your digital transformation and align technology with business goals.'},
    ]

    const [selectedItem, setSelectedItem] = React.useState(1);
    const [selectedSubItem, setSelectedSubItem] = React.useState(0);


    const updateSelection = (id) => {
        setSelectedSubItem(0);
        setSelectedItem(id);
    }

    const updateSubSection = (id) => {
        setSelectedSubItem(id);
    }

    return <div onMouseLeave={() => { props.updateServiceMenu(false) }} onMouseEnter={() => { props.updateServiceMenu(true) }} className="w-full flex-row flex  bg-white px-[20px] py-[20px]">
        <div className="flex-[3] px-[20px] py-[20px] bg-[#F4F4F4] rounded-[10px] flex-col">
            <div className="flex flex-row items-center">
                <label className="font-[Barlow] font-medium text-[#000000] text-lg">SERVICES</label>
                <img className="mx-[20px] h-[8px] w-[16px]" src={ArrowRight} />
            </div>
            <div className="flex flex-col mt-[10px]">
                {
                    menuItems.map(item => <ServiceMenuItems selectedItem={selectedItem} updateSelection={updateSelection} key={item.id} item={item} />)
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

export default ServiceMenu;