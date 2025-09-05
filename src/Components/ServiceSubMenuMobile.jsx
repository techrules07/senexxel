import React, { useEffect, useState } from "react";
import { subItems } from "../utils/Constant";
import { useNavigate, useParams } from "react-router-dom";

const ServiceSubMenuMobile = () => {

     const id = useParams().id;
     const [subMenu, setSubMenu] = useState([]);

     useEffect(() => {
        setSubMenu(subItems.filter(item => {
            // console.log(item)
            return item.parentId == id
        }))
     }, [id])

     const navigation = useNavigate()

    return <div className="flex flex-col w-full bg-white mt-[80px] pt-[40px]">
        {subMenu.map(item => {
            return <div
      className={`cursor-pointer flex flex-col sm:flex-row sm:flex-[0_0_50%] lg:flex-[0_0_33%] p-4 rounded-2xl transition-all duration-200`}
      onClick={() => {
        navigation(`${item.link}`)
      }}
    >
      {/* Icon + Label row */}
      <div className="flex bg-white flex-row items-center">
        <div className="h-14 w-14 flex items-center justify-center bg-gradient-to-b from-[#006EE4] to-[#00093B] rounded-xl">
          <img
            className="w-8 h-8 object-contain"
            src={item.image}
            alt={item.label}
          />
        </div>
        <label className="ml-4 font-[Barlow] font-medium text-lg sm:text-xl lg:text-2xl text-[#000000]">
          {item.label}
        </label>
      </div>

      {/* Description */}
      <label className="mt-2 sm:mt-3 text-[#00000080] font-[Roboto] text-sm sm:text-base lg:text-lg font-normal">
        {item.description}
      </label>
    </div>
        })}
    </div>
}

export default ServiceSubMenuMobile;