import { useMemo } from "react";

const ServiceMenuItems = (props) => useMemo(() => {

    return <div className={`${props.selectedItem === props.item.id ? 'bg-[#046BDF1A] border-[1px] border-solid border-[#046BDF]': ''} px-[10px] py-[10px] cursor-pointer flex flex-row rounded-[8px]`} onMouseEnter={() => {props.updateSelection(props.item.id)}} onClick={() => {}}>
        <div className={`cursor-pointer ${props.selectedItem === props.item.id ? 'bg-[#FFFFFF]' :'bg-[#046BDF1A]' } w-[50px] h-[50px] flex justify-center items-center rounded-[8px]`}>
            <img className="cursor-pointer w-[30px] h-[30px]" src={props.item.icon}/>
        </div>

        <label className={`cursor-pointer font-[Barlow] font-medium text-[26px]  ${props.selectedItem === props.item.id ? 'text-[#046BDF]' : 'text-black'} ml-[18px]`}>{props.item.label}</label>
        
    </div>
}, [props.selectedItem])

export default ServiceMenuItems;