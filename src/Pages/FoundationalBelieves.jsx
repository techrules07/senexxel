import React from "react";
import HalfCircle from "../assets/half-circle.svg";
import CorporateWorkers from "../assets/corporate-workers.png";
import VinnteamMark from "../assets/vinnteam-rounded.png";

const FoundationalBelieves = () => { 
    return <div className="flex flex-col justify-center items-center pb-[10px]">
        <label className="text-black font-[Barlow] font-bold text-3xl">Our Foundational Beliefs and What Fuels Our Success</label>

        <div className="flex flex-col relative mt-[140px] mb-[80px] items-center">
            <img src={HalfCircle} />
            <img src={CorporateWorkers} className="absolute w-[650px] bottom-[0]" />
            <img src={VinnteamMark} className="absolute top-[-150px]" alt="Vinnteam mark" />
        </div>
    </div>
}

export default FoundationalBelieves;
