import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetails } from "../utils/SubItems";
import { subItems } from "../utils/Constant";
import { IndustriesItems } from "../utils/IndustriesItems";
import RightArrow from "../assets/right-arrow-big.svg";
import Footer from "../Components/Footer";

const Insights = () => {

    const id = useParams().id;
    const [item, setItem] = useState();
    const [main, setMain] = useState();
    const [selectedId, setSelectedId] = useState(1);

    useEffect(() => {
        setItem(ItemDetails.find(item => {
            return item.parentId == parseInt(id)
        }));
        setMain(subItems.find(item => item.id == parseInt(id)));
    }, [id])

    return <div className="pt-[70px] bg-white flex-1 ">
        <div className="bg-linear-to-b to-[#2C78CD] from-[#03295D] w-full">
            {item && <img src={item.bannerImages} className="w-full" />}
        </div>

        {
            main && <p className="text-center text-4xl mt-10 font-[Barlow] font-semibold text-[black]">{main.label}</p>
        }

        {
            item && <div className="flex flex-row flex-wrap mt-[10px] px-[20px]">
                {
                    IndustriesItems.filter(industries => industries.mainId === selectedId).map((industries) => {
                        return <div className="flex flex-col items-center flex-[0_0_25%] mt-[25px] px-[10px]">
                            <div className="bg-white shadow-md rounded-[10px]">
                                <div className="flex flex-col items-start">
                                    <img src={industries.img} />
                                    <div className="flex flex-col mx-[15px]">
                                        <label className="font-[Barlow] text-black font-semibold text-lg mt-[15px]">{industries.title}</label>
                                        <label className="mt-[24px] font-[Roboto] text-[#00000080]">{industries.desc}</label>

                                        <div className="h-[1px] bg-[#0000001A] w-full mt-[24px]"> </div>

                                        <div className="w-full flex flex-row mt-[15px] pb-[15px] justify-between items-center">
                                            <label className="font-[Roboto] text-sm text-[#000000]">{industries.name}</label>
                                             <label className="font-[Roboto] text-sm text-[#00000080]">{industries.date}</label>
                                        </div>
                                    </div>
                                    
                                </div>

                                
                            </div>
                        </div>
                    })
                }

                 <label className="px-[20px] font-[Barlow] text-[#000000] font-semibold text-4xl mt-[70px]">Connecting People, Purpose, and Possibilities</label>

                 <div className="w-full flex flex-row mt-[40px]">
                    <div className="flex flex-1 px-[10px]">
                        <div className="flex flex-1 flex-col border-[1px] border-[#C8C8C8] rounded-[14px] p-[20px]">
                            <div className="justify-between flex-1 flex flex-row">
                                 <label className="text-[#000000] font-[Roboto] text-[26px] font-medium">About</label>
                            <img src={RightArrow} className="h-[26px]"/>
                            </div>
                           

                             <label className="text-[#00000080] mt-[30px] font-[Roboto] text-[16px]">At Senexxel, we deliver innovative solutions that empower businesses to grow and succeed. Our commitment is to excellence and meaningful impact</label>
                        </div>
                    </div>

                    <div className="flex flex-1 px-[10px]">
                        <div className="flex flex-1 flex-col border-[1px] border-[#C8C8C8] rounded-[14px] p-[20px]">
                            <div className="justify-between flex-1 flex flex-row">
                                 <label className="text-[#000000] font-[Roboto] text-[26px] font-medium">Careers</label>
                            <img src={RightArrow} className="h-[26px]"/>
                            </div>
                           

                             <label className="text-[#00000080] mt-[30px] font-[Roboto] text-[16px]">Join our team and turn your passion into purpose. At Senexxel, we foster growth, collaboration, and opportunities for success.</label>
                        </div>
                    </div>

                    <div className="flex flex-1 px-[10px]">
                        <div className="flex flex-1 flex-col border-[1px] border-[#C8C8C8] rounded-[14px] p-[20px]">
                            <div className="justify-between flex-1 flex flex-row">
                                 <label className="text-[#000000] font-[Roboto] text-[26px] font-medium">Contact Us</label>
                            <img src={RightArrow} className="h-[26px]"/>
                            </div>
                           

                             <label className="text-[#00000080] mt-[30px] font-[Roboto] text-[16px]">Let’s create success together! Reach out to us for innovative solutions tailored to your business needs.</label>
                        </div>
                    </div>

                    
                 </div>
            </div>
        }

<div className="mt-[50px]">
<Footer />
</div>

        

    </div>
}

export default Insights;