import { useNavigate } from "react-router-dom";

const SubMenuItems = (props) => {
    const navigate = useNavigate();
    return <div className={`cursor-pointer flex flex-col flex-[0_0_50%] px-[10px] py-[10px] rounded-[12px] ${props.selectedSubItem === props.item.id ? 'bg-[#F3FFE0]': ''}`} onMouseEnter={() => {props.updateSelection(props.item.id)}} onClick={() => {
        props.click();
        if (props.item.link) {
            navigate(props.item.link);
        }else {
            navigate('/it-services');
        }
        
    }}>
        <div className="cursor-pointer flex flex-row">
            <div className="h-[55px] w-[55px] flex flex-col justify-center items-center cursor-pointer bg-linear-to-b to-[#00093B] from-[#006EE4] rounded-[10px]">
                <img className="w-[30px] h-[30px]" src={props.item.image}/>
            </div>
            <label className="cursor-pointer font-[Barlow] font-medium text-[22px] text-[#000000] ml-[15px]">{props.item.label}</label>
        </div>
        <label className="cursor-pointer text-[#00000080] font-[Roboto] text-sm font-normal mt-[10px]">{props.item.description}</label>
    </div>
}

export default SubMenuItems;