import React, {useEffect, useState} from 'react';
import ProviderItem from './ProviderItem';
import IpadPro from "../assets/Ipad-pro.svg";

const WhatWeProvide = () => {

    const [data] = useState([{id: 1, data: "Systems Integration"}, {id: 2, data: "Managed IT Services"}, {id: 3, data: "Application Services"}, {id: 4, data: "Infrastructure Services"}, {id: 5, data: "Business process Services"}, {id: 6, data: "Consulting Services"}]);
    const [selected, setSelected] = useState(1);
    const [previousSelection, setPreviousSelection] = useState(-1);
    const [currentSelection, setCurrentSelection] = useState(-1);


    const updateSelected = (id) => {
        setSelected(id);
        if (previousSelection !== -1) {
            setPreviousSelection(id);
            setCurrentSelection(id)
        }
        else if (id !== currentSelection) {
            setPreviousSelection(currentSelection)
            setCurrentSelection(id);
        }

        setCurrentSelection(id);
    }

    return <div className='pt-[50px] pb-[50px] hidden'>
        <div className='flex flex-col items-center'>
            <label className='font-[Barlow] font-semibold text-[#000000] text-[26px]'>WHAT WE PROVIDE</label>
            <label className='font-[Barlow] font-bold text-[30px] text-[#000000] mt-[24px]'>Satisfied Customers. Empowered Employees. That’s Real Impact</label>

            <div className='w-full flex-row flex-nowrap mt-[50px] overflow-x-auto'>
            <div className='flex w-max pl-[15px]'>
            {
                data.map(item => {
                    return <ProviderItem key={item.id} data={item} updateSelected={updateSelected} currentSelection={selected} />
                })
            }
            </div>
            </div>

            <img src={IpadPro} className='w-[75%] mt-[80px] mb-[80px]' />

        </div>
        
    </div>
}

export default WhatWeProvide;