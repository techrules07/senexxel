import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

import Custom1 from '../assets/custom-1.png';
import Custom2 from '../assets/custom-2.png';
import CustomCard1 from '../assets/custom-card-1.svg';
import CustomCard2 from '../assets/custom-card-2.svg';
import CustomCard3 from '../assets/custom-card-3.svg';

const CloudSoftwareIntegration = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-12">
            {/* Title */}
            <p className="text-center text-2xl sm:text-3xl lg:text-4xl mt-10 font-[Barlow] font-semibold text-black">
                Custom Software Integration
            </p>

            {/* Section 1 */}
            <div className="flex flex-col lg:flex-row my-12 lg:my-16 items-center lg:items-start">
                <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
                    <div className="relative">
                        <img className="w-[220px] sm:w-[280px] lg:w-[300px] relative z-[1]" src={Custom1} alt="Custom 1" />
                        <img src={SemiCircleRect} className="absolute -top-20 -left-20 z-0 w-40 sm:w-48 lg:w-56" alt="" />
                        <img src={Dots} className="absolute -bottom-12 -right-14 z-0 w-28 sm:w-32" alt="" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-start text-center lg:text-left">
                    <div className="bg-[#DFEEFF] rounded-full px-3 py-1 mb-2">
                        <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">TAILORED FOR YOUR BUSINESS</span>
                    </div>
                    <h2 className="font-[Barlow] font-semibold text-2xl sm:text-3xl text-black mt-2">
                        Custom Integration That Fits Perfectly
                    </h2>
                    <p className="mt-4 text-black max-w-full lg:max-w-[600px] font-[Roboto] text-base sm:text-lg lg:text-[22px]">
                        Design and implement software integration solutions tailored to your needs. Achieve enhanced productivity with tools built specifically for your business.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col-reverse lg:flex-row my-12 lg:my-36 items-center lg:items-start">
                <div className="flex-1 flex flex-col items-start text-center lg:text-left lg:pl-16">
                    <div className="bg-[#DFEEFF] rounded-full px-3 py-1 mb-2">
                        <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">PERSONALIZED BUSINESS SOLUTIONS</span>
                    </div>
                    <h2 className="font-[Barlow] font-semibold text-2xl sm:text-3xl text-black mt-2">
                        Transforming Software for Seamless Workflows
                    </h2>
                    <p className="mt-4 text-black max-w-full lg:max-w-[600px] font-[Roboto] text-base sm:text-lg lg:text-[22px]">
                        Integrate custom software with your existing systems for unmatched functionality. Boost operational efficiency with personalized integration strategies.
                    </p>
                </div>

                <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
                    <div className="relative">
                        <img className="w-[220px] sm:w-[280px] lg:w-[300px] relative z-[1]" src={Custom2} alt="Custom 2" />
                        <div className="absolute -top-16 -right-16 z-0 w-32 sm:w-40 lg:w-44 h-32 sm:h-40 lg:h-44 rounded-full bg-[#046BDF]" />
                        <img src={Dotted} className="absolute -bottom-12 -left-12 z-0 w-28 sm:w-32" alt="" />
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col items-center mt-12 lg:mt-16">
                <h2 className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl lg:text-3xl text-center">
                    Discover more of Managed IT Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2 sm:px-6 lg:px-12 my-8">
                    {[{
                        img: CustomCard1,
                        title: "Enterprise Application Integration",
                        text: "We create custom APIs to improve communication between applications and enhance scalability."
                    },
                    {
                        img: CustomCard2,
                        title: "API Development and Management",
                        text: "We integrate your ERP and CRM systems for seamless workflows and consistent real time data"
                    },
                    {
                        img: CustomCard3,
                        title: "IOT Integration",
                        text: "We integrate IoT devices with your IT systems for real-time data collection and improved automation."
                    }].map((card, idx) => (
                        <div key={idx} className="flex flex-col shadow-md border border-[#CECECE] rounded-[10px] px-4 py-6">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center bg-[#EFFFEB] rounded-[10px] p-4">
                                    <img src={card.img} className="w-10 sm:w-12" alt={card.title} />
                                </div>
                                <span className="ml-4 text-black font-[Barlow] font-medium text-lg sm:text-xl">{card.title}</span>
                            </div>
                            <p className="mt-4 text-[#000000B3] font-[Roboto] text-sm sm:text-base">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Last Section */}
            <div className="flex flex-col w-full items-center justify-center py-12">
                <div className="bg-[#DFEEFF] rounded-full px-3 py-1 mb-3">
                    <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">Managed IT Services</span>
                </div>
                <h2 className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl lg:text-3xl text-center">
                    Our Proven Path to Excellence
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8 px-2 sm:px-6 lg:px-12">
                    {[{
                        title: "Requirement Analysis",
                        desc: "Understanding and defining integration needs to ensure seamless communication between systems."
                    },
                    {
                        title: "Custom Integration Development",
                        desc: "Building tailored interfaces to connect diverse systems effectively."
                    },
                    {
                        title: "Performance Optimization",
                        desc: "Continuous monitoring to maintain efficiency and reduce downtime."
                    }].map((step, idx) => (
                        <div key={idx} className="h-auto flex flex-col relative bg-gradient-to-b from-[#03295D] to-[#2C78CD] px-6 py-6 rounded-[10px] overflow-hidden">
                            <span className="text-[#D8FF8F] font-[Barlow] text-xl sm:text-2xl font-semibold">{step.title}</span>
                            <p className="text-white font-[Roboto] text-base sm:text-lg mt-2 mb-6">{step.desc}</p>
                            <div className="w-20 h-20 p-3 bg-[#F4FFC34D] rounded-full absolute -top-6 -right-6 flex justify-center items-center">
                                <div className="w-full h-full bg-[#F4FFC399] rounded-full flex justify-center items-center p-3">
                                    <div className="w-full h-full bg-[#F4FFC3] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CloudSoftwareIntegration;
