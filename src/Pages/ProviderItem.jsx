import React from "react";

const ProviderItem = ({ data, currentSelection, updateSelected }) => { 

    const handleClick = () => {
        updateSelected(data.id);
    }

    return <div className={`pt-[14px] pb-[14px] pl-[22px] pr-[22px] flex flex-row justify-center items-center ${currentSelection == data.id ? `bg-gradient-to-r from-[#006EE4] to-[#00093B]` : `bg-[#046BDF16]`}  ml-[15px] mr-[15px] rounded-[10px] border-[#046BDF] border-solid border`} onClick={handleClick}>
    <label className={`font-[Barlow] ${currentSelection == data.id ? `text-[#FFFFFF]`: `text-[#000000]`} font-medium text-[26px]`}>{data.data}</label>
</div>
}

export default ProviderItem;