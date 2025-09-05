import React, {useState} from "react";
import AboutFullScreen from '../assets/about-home.svg';
import AboutLogo from '../assets/about-logo.svg';
import VideoImg from '../assets/video-image.png';
import BannerAbout from '../assets/Banner.png';
import AboutCard from "../Components/AboutCard";
import OurAchievements from "../Components/Achievements";
import InsightsArticle from "../Components/InsightsArticle";
import Footer from '../Components/Footer';

const About = () => {
    const [aboutCards] = useState([{id: 1, count: '10+', title: 'Integration Partners', about: 'What We Do'}, {id: 2, count: '20+', title: 'Customers Worldwide', about: 'Driven by Purpose'}, {id: 3, count: '1000+', title: 'Employees Worldwide', about: 'Creating Solutions Together'}])
    
    return <div className="flex flex-1 bg-white  pt-[150px] flex-col">
        <div className="flex flex-col items-center w-[947px] mx-auto text-center">
            <label className="font-[Barlow] text-black font-semibold text-[28px]">Senexxel collaborates with businesses to create <span className="bg-gradient-to-r from-[#294CF3] to-[#77CA04] bg-clip-text text-fill">transformative experiences</span> that foster engagement and drive excellence</label>
        </div>

        <div className="flex flex-col justify-center items-center relative">

            <img src={AboutFullScreen} className="relative" />
            <img src={AboutLogo} className="absolute bottom-[-137px]" />
            <img src={VideoImg} className="absolute top-[70px] w-[600px] h-[318px]"/>
            <div className="w-[600px] h-[318px] absolute top-[70px] bg-[#03030316] rounded-[20px]"></div>
        </div>

        <div className="bg-white flex flex-col w-full items-center pt-[100px] pb-[50px]">

            <label className="font-[Barlow] text-[50px] text-black font-semibold">Our <span className="bg-gradient-to-r from-[#046BDF] to-[#023A79] bg-clip-text text-fill">Skill</span></label>

            <div className="flex flex-col w-full mt-[30px] ">
                <img src={BannerAbout} className="w-full relative" />

                <div className="flex flex-col absolute w-full">
                    <label className="text-white font-semibold text-[34px] font-[Barlow] ml-[80px] mt-[30px]">About Senexxel</label>
                    <div className="flex flex-row px-[50px] w-full justify-between">
                        {
                            aboutCards.map(item => {
                                return <AboutCard item={item}/>
                            })
                        }
                      
                    </div>
                </div>
            </div>

        </div>

        {/* <OurAchievements /> */}
        <Footer />
    </div>
}

export default About