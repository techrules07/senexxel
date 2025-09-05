import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

import CloudService1 from '../assets/cloud-service-1.png';
import CloudService2 from '../assets/cloud-service-2.png';

import BackupCard1 from '../assets/backup-card-1.svg';
import BackupCard2 from '../assets/backup-card-2.svg';
import BackupCard3 from '../assets/backup-card-3.svg';

const CloudSystemManagement = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      {/* Title */}
      <p className="text-center text-2xl sm:text-3xl lg:text-4xl mt-10 font-[Barlow] font-semibold text-black">
        Cloud Service Management
      </p>

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row my-12 lg:my-16 items-center">
        <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
          <div className="relative">
            <img className="w-[220px] sm:w-[280px] lg:w-[320px] relative z-[1]" src={CloudService1} alt="Cloud Service 1" />
            <img src={SemiCircleRect} className="absolute -top-20 -left-20 z-0 w-40 sm:w-48 lg:w-56" alt="" />
            <img src={Dots} className="absolute -bottom-12 -right-14 z-0 w-28 sm:w-32" alt="" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start text-center lg:text-left">
          <div className="bg-[#DFEEFF] rounded-full px-3 py-1 mb-2">
            <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">HARNESS THE CLOUD</span>
          </div>
          <h2 className="font-[Barlow] font-semibold text-2xl sm:text-3xl text-black mt-2">
            Simplified Cloud Operations
          </h2>
          <p className="mt-4 text-black max-w-full lg:max-w-[600px] font-[Roboto] text-base sm:text-lg lg:text-[22px]">
            Optimize cloud performance with efficient service management. Deliver scalability, cost efficiency, and reliability for cloud-based ecosystems.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row my-12 lg:my-36 items-center">
        <div className="flex-1 flex flex-col items-start text-center lg:text-left lg:pl-16">
          <div className="bg-[#DFEEFF] rounded-full px-3 py-1 mb-2">
            <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">CLOUD OPTIMIZATION EXPERTS</span>
          </div>
          <h2 className="font-[Barlow] font-semibold text-2xl sm:text-3xl text-black mt-2">
            Maximizing Cloud Potential
          </h2>
          <p className="mt-4 text-black max-w-full lg:max-w-[600px] font-[Roboto] text-base sm:text-lg lg:text-[22px]">
            Manage cloud environments with precision to ensure peak performance. Drive innovation with tailored cloud service strategies.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
          <div className="relative">
            <img className="w-[220px] sm:w-[280px] lg:w-[320px] relative z-[1]" src={CloudService2} alt="Cloud Service 2" />
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
            img: BackupCard1,
            title: "Cloud Service Management",
            text: "Optimize and manage your cloud infrastructure for maximum efficiency."
          },
          {
            img: BackupCard2,
            title: "Network Monitoring and Management",
            text: "Proactive monitoring to ensure network performance and security."
          },
          {
            img: BackupCard3,
            title: "Security Services",
            text: "Comprehensive protection against cyber threats with expert security solutions."
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

      {/* Final Section */}
      <div className="flex flex-col w-full items-center justify-center py-12">
        <div className="bg-[#DFEEFF] rounded-full px-3 py-1 mb-3">
          <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">Managed IT Services</span>
        </div>
        <h2 className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl lg:text-3xl text-center">
          Our Proven Path to Excellence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8 px-2 sm:px-6 lg:px-12">
          {[{
            title: "Proactive Monitoring",
            desc: "Identifying and resolving issues before they impact operations."
          },
          {
            title: "IT Infrastructure Management",
            desc: "Ensuring systems are up-to-date, secure, and scalable."
          },
          {
            title: "Continuous Support",
            desc: "Offering round-the-clock in assistance to maximize productivity."
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
};

export default CloudSystemManagement;
