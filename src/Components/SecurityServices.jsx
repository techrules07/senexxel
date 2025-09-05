import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

import Security1 from '../assets/security-1.png';
import Security2 from '../assets/security-2.png';

import CustomCard1 from '../assets/custom-card-1.svg';
import CustomCard2 from '../assets/custom-card-2.svg';
import CustomCard3 from '../assets/custom-card-3.svg';

const SecurityService = () => {
  return (
    <div className="px-4 md:px-10 lg:px-16">
      {/* Title */}
      <p className="text-center text-2xl md:text-3xl lg:text-4xl mt-10 font-[Barlow] font-semibold text-black">
        Security Services
      </p>

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center my-12 lg:my-20 gap-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img className="w-[220px] md:w-[300px] relative z-[1]" src={Security1} alt="Security 1" />
            <img src={SemiCircleRect} className="absolute -top-20 -left-20 z-0 w-[150px] md:w-[200px]" alt="semi-bg" />
            <img src={Dots} className="absolute -bottom-12 -right-14 z-0 w-[100px]" alt="dots" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start text-center lg:text-left">
          <div className="bg-[#DFEEFF] rounded-full px-4 py-1 mx-auto lg:mx-0">
            <label className="font-[Roboto] text-sm md:text-base text-[#014490]">
              DEFEND YOUR DIGITAL ASSETS
            </label>
          </div>
          <label className="font-[Barlow] font-semibold text-xl md:text-2xl lg:text-3xl text-black mt-4">
            Comprehensive IT Security
          </label>
          <p className="mt-4 text-black max-w-[600px] font-[Roboto] text-base md:text-lg lg:text-xl mx-auto lg:mx-0">
            Protect your business with advanced cybersecurity solutions. Safeguard against threats and vulnerabilities with 360° protection.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-center my-12 lg:my-32 gap-10">
        <div className="flex-1 flex flex-col items-start text-center lg:text-left">
          <div className="bg-[#DFEEFF] rounded-full px-4 py-1 mx-auto lg:mx-0">
            <label className="font-[Roboto] text-sm md:text-base text-[#014490]">
              SECURE BY DESIGN
            </label>
          </div>
          <label className="font-[Barlow] font-semibold text-xl md:text-2xl lg:text-3xl text-black mt-4">
            Fortifying Business Infrastructure
          </label>
          <p className="mt-4 text-black max-w-[600px] font-[Roboto] text-base md:text-lg lg:text-xl mx-auto lg:mx-0">
            Mitigate risks with tailored security solutions. Build a secure IT environment to ensure the safety of your operations and data.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img className="w-[220px] md:w-[300px] relative z-[1]" src={Security2} alt="Security 2" />
            <div className="absolute -top-16 -right-16 z-0 w-[120px] md:w-[160px] h-[120px] md:h-[160px] rounded-full bg-[#046BDF]" />
            <img src={Dotted} className="absolute -bottom-12 -left-12 z-0 w-[100px]" alt="dotted" />
          </div>
        </div>
      </div>

      {/* Discover More */}
      <div className="flex flex-col items-center mt-12">
        <label className="text-black font-[Barlow] font-semibold text-xl md:text-2xl lg:text-3xl text-center">
          Discover more of Managed IT Services
        </label>

        <div className="flex flex-col md:flex-row gap-6 w-full mt-8">
          {[{
            img: CustomCard1,
            title: "Cloud Service Management",
            desc: "Optimize and manage your cloud infrastructure for maximum efficiency."
          }, {
            img: CustomCard2,
            title: "Network Monitoring and Management",
            desc: "Proactive monitoring to ensure network performance and security."
          }, {
            img: CustomCard3,
            title: "Security Services",
            desc: "Comprehensive protection against cyber threats with expert security solutions."
          }].map((card, i) => (
            <div key={i} className="flex flex-1 justify-center">
              <div className="flex flex-col shadow-md border border-[#CECECE] rounded-[10px] p-6 w-full max-w-sm">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-[#EFFFEB] rounded-[10px] p-4">
                    <img src={card.img} className="w-[40px] md:w-[50px]" alt={card.title} />
                  </div>
                  <label className="text-[#000000] font-[Barlow] font-medium text-lg md:text-xl ml-4">
                    {card.title}
                  </label>
                </div>
                <p className="text-[#000000B3] font-[Roboto] text-sm md:text-base mt-4">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Path to Excellence */}
      <div className="flex flex-col items-center text-center mt-20">
        <div className="bg-[#DFEEFF] rounded-full px-4 py-1">
          <label className="font-[Roboto] text-sm md:text-base text-[#014490]">Managed IT Services</label>
        </div>
        <label className="text-black font-[Barlow] font-semibold text-xl md:text-2xl lg:text-3xl mt-6">
          Our Proven Path to Excellence
        </label>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl bg-[#E9F0FF] rounded-[20px] mt-8 p-6">
          {[
            {
              title: "Proactive Monitoring",
              desc: "Identifying and resolving issues before they impact operations."
            },
            {
              title: "IT Infrastructure Management",
              desc: "Ensuring systems are up-to-date, secure, and scalable."
            },
            {
              title: "Continuous Support",
              desc: "Offering round-the-clock assistance to maximize productivity."
            }
          ].map((step, i) => (
            <div key={i} className="flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#03295D] to-[#2C78CD] rounded-[10px] p-6 text-left">
              <label className="text-[#D8FF8F] font-[Barlow] text-lg md:text-xl lg:text-2xl font-semibold">
                {step.title}
              </label>
              <p className="text-white font-[Roboto] text-sm md:text-base lg:text-lg mt-4 mb-8">{step.desc}</p>

              <div className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] p-3 bg-[#F4FFC34D] rounded-full absolute -top-8 -right-8 flex justify-center items-center">
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

export default SecurityService;
