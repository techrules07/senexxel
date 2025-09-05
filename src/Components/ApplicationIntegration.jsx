import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import SupportImg from '../assets/support-image.png';
import ApplicationEcoSystem from '../assets/application-eco-system.png';
import Dotted from '../assets/dots-mems.svg';
import ApiDevelopmentManagement from '../assets/api-development-management-card.svg';
import IOTIntegration from '../assets/iot-integration-management.svg';
import DataIntegrationCard from '../assets/data-integration-card.svg';

const ApplicationIntegration = () => { 
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24">
            <p className="text-center text-3xl sm:text-4xl mt-10 font-[Barlow] font-semibold text-black">
                Enterprise Application Integration
            </p>

            {/* Section 1 */}
            <div className="flex flex-col md:flex-row my-12 gap-8">
                <div className="flex-[2] flex items-center justify-center">
                    <div className="relative">
                        <img className="w-full max-w-[300px] relative z-[1]" src={SupportImg} />
                        <img src={SemiCircleRect} className="absolute -top-24 -left-24 z-0 hidden sm:block" />
                        <img src={Dots} className="absolute -bottom-12 -right-14 z-0 hidden sm:block" />
                    </div>
                </div>
                <div className="flex-[3] flex flex-col items-start justify-center">
                    <div className="flex bg-[#DFEEFF] rounded-full px-3 py-1">
                        <label className="font-[Roboto] text-sm sm:text-base text-[#014490]">
                            UNIFIED BUSINESS WORKFLOWS
                        </label>
                    </div>
                    <label className="font-[Barlow] font-semibold text-2xl sm:text-3xl text-black mt-3">
                        Seamlessly Connecting Applications
                    </label>
                    <label className="mt-4 text-black max-w-[600px] font-[Roboto] text-base sm:text-lg">
                        Simplify complex workflows by integrating disparate enterprise systems. Ensure seamless data flow and interoperability between applications for optimized operations.
                    </label>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col-reverse md:flex-row my-24 gap-8">
                <div className="flex-[3] md:pl-12 flex flex-col items-start justify-center">
                    <div className="flex bg-[#DFEEFF] rounded-full px-3 py-1">
                        <label className="font-[Roboto] text-sm sm:text-base text-[#014490]">
                            SCALABLE INTEGRATION SOLUTIONS
                        </label>
                    </div>
                    <label className="font-[Barlow] font-semibold text-2xl sm:text-3xl text-black mt-3">
                        Future-Ready Application Ecosystems
                    </label>
                    <label className="mt-4 text-black max-w-[600px] font-[Roboto] text-base sm:text-lg">
                        Design scalable integration frameworks that adapt to business growth. Enable efficient communication between legacy and modern systems with minimal disruption.
                    </label>
                </div>

                <div className="flex-[2] flex items-center justify-center">
                    <div className="relative">
                        <img className="w-full max-w-[300px] relative z-[1]" src={ApplicationEcoSystem} />
                        <div className="absolute -top-16 -right-16 z-0 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-[#046BDF]" />
                        <img src={Dotted} className="absolute -bottom-12 -left-12 z-0 hidden sm:block" />
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col items-center mt-12">
                <label className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl text-center">
                    Discover more of Managed IT Services
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                    {[
                        {
                            img: ApiDevelopmentManagement,
                            title: "API Development and Management",
                            text: "We create custom APIs to improve communication between applications and enhance scalability."
                        },
                        {
                            img: IOTIntegration,
                            title: "IOT Integration",
                            text: "We integrate IoT devices with your IT systems for real-time data collection and improved automation."
                        },
                        {
                            img: DataIntegrationCard,
                            title: "Data Integration Services",
                            text: "Our data integration unifies multiple sources for real-time analytics and better decision-making."
                        }
                    ].map((card, idx) => (
                        <div key={idx} className="shadow-md border border-[#CECECE] rounded-[10px] p-6 flex flex-col">
                            <div className="flex flex-row items-center">
                                <div className="flex items-center justify-center bg-[#EFFFEB] rounded-[10px] p-4">
                                    <img src={card.img} className="w-10" />
                                </div>
                                <label className="ml-4 text-black font-[Barlow] font-medium text-lg sm:text-xl">
                                    {card.title}
                                </label>
                            </div>
                            <label className="mt-6 text-[#000000B3] font-[Roboto] text-sm sm:text-base">
                                {card.text}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Last Section */}
            <div className="flex flex-col items-center justify-center py-12">
                <div className="flex bg-[#DFEEFF] rounded-full px-3 py-1">
                    <label className="font-[Roboto] text-sm sm:text-base text-[#014490]">
                        Managed IT Services
                    </label>
                </div>
                <label className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl mt-6 text-center">
                    Our Proven Path to Excellence
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full bg-[#E9F0FF] rounded-[20px] mt-8 p-6">
                    {[
                        {
                            title: "Proactive Monitoring",
                            text: "Identifying and resolving issues before they impact operations."
                        },
                        {
                            title: "IT Infrastructure Management",
                            text: "Ensuring systems are up-to-date, secure, and scalable."
                        },
                        {
                            title: "Continuous Support",
                            text: "Offering round-the-clock in assistance to maximize productivity."
                        }
                    ].map((card, idx) => (
                        <div key={idx} className="relative flex flex-col justify-between bg-gradient-to-b from-[#03295D] to-[#2C78CD] rounded-[10px] p-6 h-[230px] overflow-hidden">
                            <label className="relative text-[#D8FF8F] font-[Barlow] text-xl sm:text-2xl font-semibold">
                                {card.title}
                            </label>
                            <label className="text-white font-[Roboto] text-base sm:text-lg">
                                {card.text}
                            </label>
                            <div className="w-20 h-20 sm:w-24 sm:h-24 p-3 bg-[#F4FFC34D] rounded-full absolute -right-10 -top-10 flex items-center justify-center">
                                <div className="w-full h-full bg-[#F4FFC399] rounded-full flex items-center justify-center p-3">
                                    <div className="w-full h-full bg-[#F4FFC3] rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ApplicationIntegration;
