import React from "react";
import ITServicesBanner from "../assets/it-serices-banner.svg";

import TechSupport from "../Components/TechSupport";
import Footer from "../Components/Footer";


const ItServices = () => {
    return (
        <div className="pt-[70px] bg-white flex-1">
            <div className="flex flex-row items-center bg-linear-to-r to-[#2C78CD] from-[#03295D] pl-[44px] pr-[44px]">
                <div className="flex flex-4 flex-col">
                    <h1 className="font-[Barlow] text-[34px] font-bold">Managed IT Services</h1>
                    <p className="w-[490px] font-[Roboto] font-[Roboto] font-normal mt-[20px]">Focus on your core business while we handle your IT infrastructure with proactive management and 24/7 support.</p>
                </div>
                <div className="flex flex-3 pt-[35px] pb-[35px] justify-center">
                    <img src={ITServicesBanner} alt="IT Services Banner" className="h-[380px]" />
                </div>
            </div>

            <TechSupport />
            <Footer />
        </div>
    );
};

export default ItServices;