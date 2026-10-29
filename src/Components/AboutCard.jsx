import React from "react";

const AboutCard = (props) => {
    return <div className="w-full min-h-[120px] sm:min-h-[140px] lg:min-h-[220px] rounded-[14px] border border-[#FFFFFF80] bg-[#00000080] backdrop-blur-md p-4 sm:p-5 lg:p-6 flex flex-col justify-between text-center">
        <div>
            <p className="text-[#BFFF72] font-[Barlow] font-medium text-2xl sm:text-[28px]">{props.item.count}</p>
            <p className="text-[#BFFF72] font-[Barlow] font-medium text-xl sm:text-2xl leading-tight mt-2">{props.item.title}</p>
        </div>
        <p className="font-[Barlow] font-semibold text-xl sm:text-2xl leading-tight mt-6">{props.item.about}</p>
    </div>
}

export default AboutCard
