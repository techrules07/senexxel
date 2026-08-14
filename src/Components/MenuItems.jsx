import SystemIntegration from "../assets/system-integration.svg";
import ManagedItServices from "../assets/managed-it-services.svg";
import ApplicationServices from "../assets/application-services.svg";
import InfraServices from "../assets/infra-services.svg";
import BusinessProcess from "../assets/business-process.svg";
import ConsultingServices from "../assets/consulting-services.svg";
import { useEffect, useState } from "react";
import ServiceMenuItems from "./ServiceMenuItems";
import { useNavigate } from "react-router-dom";

import { subItems } from "../utils/Constant";

const MenuItems = (props) => {

    const items = [
         { id: 1, parentId: 1, icon: SystemIntegration, label: "System Integration", description: 'Seamlessly connect your IT systems to streamline operations and enhance productivity.', link: '/system-integration' },
                // { id: 2, parentId: 1, icon: ManagedItServices, label: "Managed IT Services", description: 'Comprehensive IT management, ensuring your systems run smoothly with 24/7 support.', link: '/system-integration/api' },
                { id: 3, parentId: 1, icon: ApplicationServices, label: "Application Services", description: 'Custom application development and maintenance to drive business growth and innovation.', link: '/system-integration/iot' },
                { id: 4, parentId: 1, icon: InfraServices, label: "Infrastructure Services", description: 'Efficient management and optimization of your IT infrastructure for stability and scalability.', link: '/system-integration/data' },
                { id: 5, parentId: 1, icon: BusinessProcess, label: "Business process Services", description: 'Automating and optimizing workflows to improve efficiency and reduce operational costs.', link: '/system-integration/cloud' },
                { id: 6, parentId: 1, icon: ConsultingServices, label: "Consulting Services", description: 'Strategic IT consulting to guide your digital transformation and align technology with business goals.', link: '/system-integration/api'},
    ]

    const [subMenuItemsFromMenu, setSubMenuItems] = useState([])

    const [selectedItems, setSelectedItems] = useState([]);
    const [choosed, setChoosed] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const selected = items.filter(item => props.selectedItems === item.parentId);
        setSelectedItems(selected);
    }, [])

    const selectedItemFn = (id) => {
        console.log("selected function", id)
        setChoosed(id);
        setSubMenuItems(subItems.filter(item => item.parentId === choosed))
        navigate(`/services-sub/${id}`) 
    }

    return <div className="flex w-full bg-white mt-[80px] pt-[40px]">
        <div className="flex flex-row flex-wrap h-screen">
            {selectedItems.map(itm => {
            return <ServiceMenuItems key={itm.id} item={itm} updateSelection={selectedItemFn} selectedItem={choosed} />
        })}
        </div>
        
    </div>
}

export default MenuItems;