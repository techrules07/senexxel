import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

import Security1 from '../assets/security-1.png';
import Security2 from '../assets/security-2.png';


import CustomCard1 from '../assets/custom-card-1.svg';
import CustomCard2 from '../assets/custom-card-2.svg';
import CustomCard3 from '../assets/custom-card-3.svg';

const SecurityService = () => {
    return <div>
                    <p className="text-center text-4xl mt-10 font-[Barlow] font-semibold text-[black]">Security Services</p>
            
                    <div className="flex flex-row my-[50px]">
                        <div className="flex-[2] flex items-center justify-center">
                            <div className="relative">
                                <img className="w-[300px] relative z-[1]" src={Security1}></img>
                                <img src={SemiCircleRect} className="absolute top-[-95px] left-[-95px] z-[0]" />
                                <img src={Dots} className="absolute bottom-[-50px] right-[-56px] z-[0]" />
                            </div>
                        </div>
                        <div className="flex-[3] justify-center flex-col items-start flex ">
                            <div className="flex bg-[#DFEEFF] rounded-full px-[12px]">
                                <label className="font-[Roboto] font-normal text-base text-[#014490]">DEFEND YOUR DIGITAL ASSETS</label>
                            </div>
                            <label className="font-[Barlow] font-semibold text-3xl text-black mt-[10px]">Comprehensive IT Security</label>
                            <label className="mt-[20px] text-black w-[600px] font-[Roboto] font-normal text-[22px]">Protect your business with advanced cybersecurity solutions Safeguard against threats and vulnerabilities with 360° protection.</label>
                        </div>
            
            
                    </div>
            
                    <div className="flex flex-row my-[150px]">
            
                        <div className="flex-[3] pl-[100px] justify-center flex-col items-start flex ">
                            <div className="flex bg-[#DFEEFF] rounded-full px-[12px]">
                                <label className="font-[Roboto] font-normal text-base text-[#014490]">SECURE BY DESIGN</label>
                            </div>
                            <label className="font-[Barlow] font-semibold text-3xl text-black mt-[10px]">Fortifying Business Infrastructure</label>
                            <label className="mt-[20px] text-black w-[600px] font-[Roboto] font-normal text-[22px]">Mitigate risks with tailored security solutions Build a secure IT environment to ensure the safety of your operations and data.</label>
                        </div>
            
                        <div className="flex-[2] flex items-center justify-center">
                            <div className="relative">
                                <img className="w-[300px] relative z-[1]" src={Security2}></img>
                                <div className="absolute top-[-70px] right-[-62px] z-[0] w-[160px] h-[160px] rounded-full bg-[#046BDF]" />
                                <img src={Dotted} className="absolute bottom-[-50px] left-[-45px] z-[0]" />
                            </div>
                        </div>
            
                    </div>
            
                    <div className="flex mt-[50px] justify-center flex-col items-center">
                        <label className="text-black font-[Barlow] font-semibold text-3xl">Discover more of Managed IT Services</label>
            
                        <div className="flex flex-row w-full px-[44px] my-[36px]">
                            <div className="flex flex-1 justify-center px-[22px]">
                                <div className="flex flex-col shadow-md border-[1px] border-[#CECECE] rounded-[10px] px-[12px] py-[24px]">
                                    <div className="flex flex-row items-center">
                                        <div className="flex flex-col items-center justify-center bg-[#EFFFEB] rounded-[10px] px-[15px] py-[15px]">
                                            <img src={CustomCard1} className="w-[50px]" />
                                        </div>
            
                                        <label className="text-[#000000] font-[Barlow] font-medium text-[22px] ml-[15px]">Cloud Service Management</label>
                                    </div>
            
                                    <label className="text-[Roboto] text-[#000000B3] text-base mt-[24px]">Optimize and manage your cloud infrastructure for maximum efficiency.</label>
                                </div>
                            </div>
            
                            <div className="flex flex-1 justify-center px-[22px]">
                                <div className="flex flex-col shadow-md border-[1px] border-[#CECECE] rounded-[10px] px-[12px] py-[24px]">
                                    <div className="flex flex-row items-center">
                                        <div className="flex flex-col items-center justify-center bg-[#EFFFEB] rounded-[10px] px-[15px] py-[15px]">
                                            <img src={CustomCard2} className="w-[50px]" />
                                        </div>
            
                                        <label className="text-[#000000] font-[Barlow] font-medium text-[22px] ml-[15px]">Network Monitoring and Management</label>
                                    </div>
            
                                    <label className="text-[Roboto] text-[#000000B3] text-base mt-[24px]">Proactive monitoring to ensure network performance and security.</label>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-center px-[22px]">
                                <div className="flex flex-col shadow-md border-[1px] border-[#CECECE] rounded-[10px] px-[12px] py-[24px]">
                                    <div className="flex flex-row items-center">
                                        <div className="flex flex-col items-center justify-center bg-[#EFFFEB] rounded-[10px] px-[15px] py-[15px]">
                                            <img src={CustomCard3} className="w-[50px]" />
                                        </div>
            
                                        <label className="text-[#000000] font-[Barlow] font-medium text-[22px] ml-[15px]">Security Services</label>
                                    </div>
            
                                    <label className="text-[Roboto] text-[#000000B3] text-base mt-[24px]">Comprehensive protection against cyber threats with expert security solutions.</label>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="flex flex-col w-full items-center justify-center py-[50px]">
                        <div className="flex bg-[#DFEEFF] rounded-full px-[12px]">
                            <label className="font-[Roboto] font-normal text-base text-[#014490]">Managed IT Services</label>
                        </div>
                        <label className="text-black font-[Barlow] font-semibold text-3xl mt-[20px]">Our Proven Path to Excellence</label>
            
                        <div className="flex w-[85%] bg-[#E9F0FF] rounded-[20px] mt-[30px] py-[15px]">
                            <div className="flex flex-1 justify-center items-center flex-col px-[20px]">
                                <div className="justify-between h-[230px] flex flex-col relative bg-linear-to-b to-[#2C78CD] from-[#03295D] px-[20px] rounded-[10px] py-[20px] overflow-hidden">
                                    <label className="relative text-[#D8FF8F] font-[Barlow] text-[28px] font-semibold">Proactive Monitoring</label>
                                    <label className="text-white font-[Roboto] text-xl mb-[30px]">Identifying and resolving issues before they impact operations.</label>
            
                                    <div className="w-[100px] h-[100px] p-[12px] bg-[#F4FFC34D] rounded-full absolute right-[-45px] top-[-45px] flex flex-col justify-center items-center">
                                        <div className="w-full h-full bg-[#F4FFC399] rounded-full flex justify-center items-center p-[12px]">
                                            <div className="w-full h-full bg-[#F4FFC3] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="flex flex-1 justify-center items-center flex-col px-[20px]">
                                <div className="justify-between h-[230px] flex flex-col relative bg-linear-to-b to-[#2C78CD] from-[#03295D] px-[20px] rounded-[10px] py-[20px] overflow-hidden">
                                    <label className="relative text-[#D8FF8F] font-[Barlow] text-[28px] font-semibold">IT Infrastructure Management</label>
                                    <label className="text-white font-[Roboto] text-xl mb-[30px]">Ensuring systems are up-to-date, secure, and scalable.</label>
            
                                    <div className="w-[100px] h-[100px] p-[12px] bg-[#F4FFC34D] rounded-full absolute right-[-45px] top-[-45px] flex flex-col justify-center items-center">
                                        <div className="w-full h-full bg-[#F4FFC399] rounded-full flex justify-center items-center p-[12px]">
                                            <div className="w-full h-full bg-[#F4FFC3] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="flex flex-1 justify-center items-center flex-col px-[20px]">
                                <div className="justify-between h-[230px] flex flex-col relative bg-linear-to-b to-[#2C78CD] from-[#03295D] px-[20px] rounded-[10px] py-[20px] overflow-hidden">
                                    <label className="relative text-[#D8FF8F] font-[Barlow] text-[28px] font-semibold">Continuous Support</label>
                                    <label className="text-white font-[Roboto] text-xl mb-[30px]">Offering round-the-clock in assistance to maximize productivity.</label>
            
                                    <div className="w-[100px] h-[100px] p-[12px] bg-[#F4FFC34D] rounded-full absolute right-[-45px] top-[-45px] flex flex-col justify-center items-center">
                                        <div className="w-full h-full bg-[#F4FFC399] rounded-full flex justify-center items-center p-[12px]">
                                            <div className="w-full h-full bg-[#F4FFC3] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
}

export default SecurityService;