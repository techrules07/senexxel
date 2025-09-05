const AchievementsCards = (props) => {


    return  <li className="me-2 flex-[1] cursor-pointer" onClick={() => props.updateSelection(props.index)}>

                    <label className={`cursor-pointer inline-block p-4 rounded-t-lg ${props.isSelected ? 'text-[#294CF3] border-[#294CF3]  border-b-[10px]' : 'text-black'}`} aria-current="page">{props.item}</label>
                </li>
}

export default AchievementsCards;