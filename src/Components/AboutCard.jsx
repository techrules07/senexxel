import React from "react";

const AboutCard = (props) => {
    return <div className="w-[340px] h-[300px] bg-[#00000080] border-[1px] rounded-[14px] border-[#FFFFFF80] mt-[30px] flex-col flex">
        
        <div className="flex flex-col flex-60 justify-end items-center">
            <label className="text-[#BFFF72] font-[Barlow] font-medium text-[28px]">{props.item.count}</label>
            <label className="text-[#BFFF72] font-[Barlow] font-medium text-[28px]">{props.item.title}</label>
        </div>
        <div className="flex flex-col flex-40 items-center justify-start">
            <label className="font-[Barlow] font-semibold text-[28px] mt-[30px] text-center">{props.item.about}</label>
        </div>
    </div>
}

export default AboutCard