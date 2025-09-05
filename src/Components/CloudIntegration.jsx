import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

import Cloud1 from '../assets/cloud-1.png';
import Cloud2 from '../assets/cloud-2.png';
import CloudCard1 from '../assets/cloud-card-1.svg';
import CloudCard2 from '../assets/cloud-card-2.svg';
import CloudCard3 from '../assets/cloud-card-3.svg';

const CloudIntegration = () => { 
    return <div>
                            <p className="text-center text-4xl mt-10 font-[Barlow] font-semibold text-[black]">Cloud Tech Integration</p>
                    
                            <div className="flex flex-row my-[50px]">
                                <div className="flex-[2] flex items-center justify-center">
                                    <div className="relative">
                                        <img className="w-[300px] relative z-[1]" src={Cloud1}></img>
                                        <img src={SemiCircleRect} className="absolute top-[-95px] left-[-95px] z-[0]" />
                                        <img src={Dots} className="absolute bottom-[-50px] right-[-56px] z-[0]" />
                                    </div>
                                </div>
                                <div className="flex-[3] justify-center flex-col items-start flex ">
                                    <div className="flex bg-[#DFEEFF] rounded-full px-[12px]">
                                        <label className="font-[Roboto] font-normal text-base text-[#014490]">UNLOCK BUSINESS POTENTIAL</label>
                                    </div>
                                    <label className="font-[Barlow] font-semibold text-3xl text-black mt-[10px]">Efficient API Ecosystems</label>
                                    <label className="mt-[20px] text-black w-[600px] font-[Roboto] font-normal text-[22px]">Develop robust APIs for seamless interaction across platforms Ensure secure, scalable, and reliable API management for enterprise growth.</label>
                                </div>
                    
                    
                            </div>
                    
                            <div className="flex flex-row my-[150px]">
                    
                                <div className="flex-[3] pl-[100px] justify-center flex-col items-start flex ">
                                    <div className="flex bg-[#DFEEFF] rounded-full px-[12px]">
                                        <label className="font-[Roboto] font-normal text-base text-[#014490]">EMPOWER DIGITAL INTERACTIONS</label>
                                    </div>
                                    <label className="font-[Barlow] font-semibold text-3xl text-black mt-[10px]">APIs for Enhanced Connectivity</label>
                                    <label className="mt-[20px] text-black w-[600px] font-[Roboto] font-normal text-[22px]">Enable dynamic interactions between applications and systems. Drive innovation with APIs that deliver real-time functionality and scalability.</label>
                                </div>
                    
                                <div className="flex-[2] flex items-center justify-center">
                                    <div className="relative">
                                        <img className="w-[300px] relative z-[1]" src={Cloud2}></img>
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
                                                    <img src={CloudCard1} className="w-[50px]" />
                                                </div>
                    
                                                <label className="text-[#000000] font-[Barlow] font-medium text-[22px] ml-[15px]">Custom Software Integration</label>
                                            </div>
                    
                                            <label className="text-[Roboto] text-[#000000B3] text-base mt-[24px]">We develop custom solutions that fit your business needs and integrate them into your systems to enhance productivity.</label>
                                        </div>
                                    </div>
                    
                                    <div className="flex flex-1 justify-center px-[22px]">
                                        <div className="flex flex-col shadow-md border-[1px] border-[#CECECE] rounded-[10px] px-[12px] py-[24px]">
                                            <div className="flex flex-row items-center">
                                                <div className="flex flex-col items-center justify-center bg-[#EFFFEB] rounded-[10px] px-[15px] py-[15px]">
                                                    <img src={CloudCard2} className="w-[50px]" />
                                                </div>
                    
                                                <label className="text-[#000000] font-[Barlow] font-medium text-[22px] ml-[15px]">Enterprise Application Integration</label>
                                            </div>
                    
                                            <label className="text-[Roboto] text-[#000000B3] text-base mt-[24px]">We integrate your ERP and CRM systems for seamless workflows and consistent real time data</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 justify-center px-[22px]">
                                        <div className="flex flex-col shadow-md border-[1px] border-[#CECECE] rounded-[10px] px-[12px] py-[24px]">
                                            <div className="flex flex-row items-center">
                                                <div className="flex flex-col items-center justify-center bg-[#EFFFEB] rounded-[10px] px-[15px] py-[15px]">
                                                    <img src={CloudCard3} className="w-[50px]" />
                                                </div>
                    
                                                <label className="text-[#000000] font-[Barlow] font-medium text-[22px] ml-[15px]">API Development and Management</label>
                                            </div>
                    
                                            <label className="text-[Roboto] text-[#000000B3] text-base mt-[24px]">We create custom APIs to improve communication between applications and enhance scalability.</label>
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
                                            <label className="relative text-[#D8FF8F] font-[Barlow] text-[28px] font-semibold">Requirement Analysis</label>
                                             <label className="text-white font-[Roboto] text-xl mb-[30px]">Understanding and defining integration needs to ensure seamless communication between systems.</label>
                    
                                             <div className="w-[100px] h-[100px] p-[12px] bg-[#F4FFC34D] rounded-full absolute right-[-45px] top-[-45px] flex flex-col justify-center items-center">
                                                <div className="w-full h-full bg-[#F4FFC399] rounded-full flex justify-center items-center p-[12px]">
                                                    <div className="w-full h-full bg-[#F4FFC3] rounded-full"></div>
                                                </div>
                                             </div>
                                        </div>
                                    </div>
                    
                                    <div className="flex flex-1 justify-center items-center flex-col px-[20px]">
                                        <div className="justify-between h-[230px] flex flex-col relative bg-linear-to-b to-[#2C78CD] from-[#03295D] px-[20px] rounded-[10px] py-[20px] overflow-hidden">
                                            <label className="relative text-[#D8FF8F] font-[Barlow] text-[28px] font-semibold">Custom Integration Development</label>
                                             <label className="text-white font-[Roboto] text-xl mb-[30px]">Building tailored interfaces to connect diverse systems effectively.</label>
                    
                                             <div className="w-[100px] h-[100px] p-[12px] bg-[#F4FFC34D] rounded-full absolute right-[-45px] top-[-45px] flex flex-col justify-center items-center">
                                                <div className="w-full h-full bg-[#F4FFC399] rounded-full flex justify-center items-center p-[12px]">
                                                    <div className="w-full h-full bg-[#F4FFC3] rounded-full"></div>
                                                </div>
                                             </div>
                                        </div>
                                    </div>
                    
                                    <div className="flex flex-1 justify-center items-center flex-col px-[20px]">
                                        <div className="justify-between h-[230px] flex flex-col relative bg-linear-to-b to-[#2C78CD] from-[#03295D] px-[20px] rounded-[10px] py-[20px] overflow-hidden">
                                            <label className="relative text-[#D8FF8F] font-[Barlow] text-[28px] font-semibold">Performance Optimization</label>
                                             <label className="text-white font-[Roboto] text-xl mb-[30px]">Continuous monitoring to maintain efficiency and reduce downtime.</label>
                    
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

export default CloudIntegration;