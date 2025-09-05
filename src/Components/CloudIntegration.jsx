import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

import Cloud1 from '../assets/cloud-1.png';
import Cloud2 from '../assets/cloud-2.png';
import CloudCard1 from '../assets/cloud-card-1.svg';
import CloudCard2 from '../assets/cloud-card-2.svg';
import CloudCard3 from '../assets/cloud-card-3.svg';

const CloudIntegration = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Title */}
      <p className="text-center text-2xl sm:text-3xl lg:text-4xl mt-10 font-[Barlow] font-semibold text-black">
        Cloud Tech Integration
      </p>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center my-12 md:my-[50px] gap-8">
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img className="w-[220px] sm:w-[280px] md:w-[300px] relative z-[1]" src={Cloud1} alt="Cloud1" />
            <img src={SemiCircleRect} className="absolute top-[-60px] sm:top-[-80px] left-[-70px] sm:left-[-95px] z-[0]" />
            <img src={Dots} className="absolute bottom-[-40px] right-[-40px] z-[0]" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start text-center md:text-left">
          <div className="bg-[#DFEEFF] rounded-full px-4 py-1 self-center md:self-start">
            <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">UNLOCK BUSINESS POTENTIAL</span>
          </div>
          <h2 className="font-[Barlow] font-semibold text-xl sm:text-2xl lg:text-3xl text-black mt-3">
            Efficient API Ecosystems
          </h2>
          <p className="mt-4 text-black text-base sm:text-lg lg:text-xl font-[Roboto] max-w-xl">
            Develop robust APIs for seamless interaction across platforms. Ensure secure,
            scalable, and reliable API management for enterprise growth.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center my-16 md:my-[150px] gap-8">
        <div className="flex-1 flex flex-col items-start text-center md:text-left">
          <div className="bg-[#DFEEFF] rounded-full px-4 py-1 self-center md:self-start">
            <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">EMPOWER DIGITAL INTERACTIONS</span>
          </div>
          <h2 className="font-[Barlow] font-semibold text-xl sm:text-2xl lg:text-3xl text-black mt-3">
            APIs for Enhanced Connectivity
          </h2>
          <p className="mt-4 text-black text-base sm:text-lg lg:text-xl font-[Roboto] max-w-xl">
            Enable dynamic interactions between applications and systems. Drive innovation
            with APIs that deliver real-time functionality and scalability.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img className="w-[220px] sm:w-[280px] md:w-[300px] relative z-[1]" src={Cloud2} alt="Cloud2" />
            <div className="absolute top-[-50px] right-[-50px] w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] rounded-full bg-[#046BDF]" />
            <img src={Dotted} className="absolute bottom-[-40px] left-[-40px] z-[0]" />
          </div>
        </div>
      </div>

      {/* Discover Cards */}
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-black font-[Barlow] font-semibold text-xl sm:text-2xl lg:text-3xl text-center">
          Discover more of Managed IT Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-10 px-2">
          {[
            {
              img: CloudCard1,
              title: 'Custom Software Integration',
              desc: 'We develop custom solutions that fit your business needs and integrate them into your systems to enhance productivity.',
            },
            {
              img: CloudCard2,
              title: 'Enterprise Application Integration',
              desc: 'We integrate your ERP and CRM systems for seamless workflows and consistent real-time data.',
            },
            {
              img: CloudCard3,
              title: 'API Development and Management',
              desc: 'We create custom APIs to improve communication between applications and enhance scalability.',
            },
          ].map((card, idx) => (
            <div key={idx} className="shadow-md border border-[#CECECE] rounded-[10px] px-4 py-6">
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center bg-[#EFFFEB] rounded-[10px] p-3">
                  <img src={card.img} className="w-[40px] sm:w-[50px]" alt={card.title} />
                </div>
                <span className="text-[#000] font-[Barlow] font-medium text-lg sm:text-xl ml-4">
                  {card.title}
                </span>
              </div>
              <p className="text-[#000000B3] text-sm sm:text-base mt-4 font-[Roboto]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Excellence Path */}
      <div className="flex flex-col items-center py-12">
        <div className="bg-[#DFEEFF] rounded-full px-4 py-1">
          <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">Managed IT Services</span>
        </div>
        <h2 className="text-black font-[Barlow] font-semibold text-xl sm:text-2xl lg:text-3xl mt-5 text-center">
          Our Proven Path to Excellence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 bg-[#E9F0FF] rounded-[20px] p-6">
          {[
            {
              title: 'Requirement Analysis',
              desc: 'Understanding and defining integration needs to ensure seamless communication between systems.',
            },
            {
              title: 'Custom Integration Development',
              desc: 'Building tailored interfaces to connect diverse systems effectively.',
            },
            {
              title: 'Performance Optimization',
              desc: 'Continuous monitoring to maintain efficiency and reduce downtime.',
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-gradient-to-b from-[#03295D] to-[#2C78CD] text-white rounded-[10px] p-6 relative overflow-hidden min-h-[220px]"
            >
              <h3 className="text-[#D8FF8F] font-[Barlow] text-lg sm:text-xl lg:text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="font-[Roboto] text-sm sm:text-base lg:text-lg mt-3">{step.desc}</p>

              {/* Circle Accent */}
              <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] p-3 bg-[#F4FFC34D] rounded-full absolute right-[-30px] top-[-30px] flex justify-center items-center">
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

export default CloudIntegration;
