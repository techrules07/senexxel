import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

import Backup1 from '../assets/backup-1.png';
import Backup2 from '../assets/backup-2.png';

import BackupCard1 from '../assets/backup-card-1.svg';
import BackupCard2 from '../assets/backup-card-2.svg';
import BackupCard3 from '../assets/backup-card-3.svg';

const DataBackUpRecovery = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      {/* Title */}
      <p className="text-center text-2xl sm:text-3xl lg:text-4xl mt-10 font-[Barlow] font-semibold text-black">
        Data Backup and Recovery
      </p>

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row my-12 lg:my-20 items-center gap-8 lg:gap-16">
        {/* Left image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img
              className="w-[200px] sm:w-[260px] lg:w-[320px] relative z-[1]"
              src={Backup1}
              alt="Backup 1"
            />
            <img
              src={SemiCircleRect}
              className="absolute -top-16 -left-16 z-0 w-32 sm:w-40 lg:w-56"
              alt=""
            />
            <img
              src={Dots}
              className="absolute -bottom-10 -right-12 z-0 w-20 sm:w-28 lg:w-32"
              alt=""
            />
          </div>
        </div>

        {/* Right text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="bg-[#DFEEFF] rounded-full px-4 py-1 mb-3">
            <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">
              SAFEGUARD YOUR DATA
            </span>
          </div>
          <h2 className="font-[Barlow] font-semibold text-2xl sm:text-3xl lg:text-4xl text-black">
            Reliable Backup and Recovery Solutions
          </h2>
          <p className="mt-4 text-black max-w-full lg:max-w-[600px] font-[Roboto] text-sm sm:text-lg lg:text-xl">
            Protect your critical data with automated backups and secure recovery
            processes. Ensure business continuity even during unexpected
            disruptions.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row my-12 lg:my-28 items-center gap-8 lg:gap-16">
        {/* Left text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-16">
          <div className="bg-[#DFEEFF] rounded-full px-4 py-1 mb-3">
            <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">
              DATA LOSS PREVENTION
            </span>
          </div>
          <h2 className="font-[Barlow] font-semibold text-2xl sm:text-3xl lg:text-4xl text-black">
            Restoring Confidence in Every Crisis
          </h2>
          <p className="mt-4 text-black max-w-full lg:max-w-[600px] font-[Roboto] text-sm sm:text-lg lg:text-xl">
            Minimize the impact of data loss with robust recovery solutions.
            Safeguard sensitive information with secure, fail-safe backups.
          </p>
        </div>

        {/* Right image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img
              className="w-[200px] sm:w-[260px] lg:w-[320px] relative z-[1]"
              src={Backup2}
              alt="Backup 2"
            />
            <div className="absolute -top-12 -right-12 z-0 w-24 sm:w-32 lg:w-44 h-24 sm:h-32 lg:h-44 rounded-full bg-[#046BDF]" />
            <img
              src={Dotted}
              className="absolute -bottom-10 -left-10 z-0 w-20 sm:w-28 lg:w-32"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center mt-12 lg:mt-20">
        <h2 className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl lg:text-4xl text-center">
          Discover more of Managed IT Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2 sm:px-6 lg:px-12 my-8">
          {[
            {
              img: BackupCard1,
              title: 'Cloud Service Management',
              text: 'Optimize and manage your cloud infrastructure for maximum efficiency.',
            },
            {
              img: BackupCard2,
              title: 'Network Monitoring and Management',
              text: 'Proactive monitoring to ensure network performance and security.',
            },
            {
              img: BackupCard3,
              title: 'Security Services',
              text: 'Comprehensive protection against cyber threats with expert security solutions.',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col shadow-md border border-[#CECECE] rounded-[10px] p-6 bg-white"
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-[#EFFFEB] rounded-[10px] p-4">
                  <img src={card.img} className="w-10 sm:w-12" alt={card.title} />
                </div>
                <span className="ml-4 text-black font-[Barlow] font-medium text-lg sm:text-xl">
                  {card.title}
                </span>
              </div>
              <p className="mt-4 text-[#000000B3] font-[Roboto] text-sm sm:text-base">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Section */}
      <div className="flex flex-col w-full items-center justify-center py-12">
        <div className="bg-[#DFEEFF] rounded-full px-4 py-1 mb-3">
          <span className="font-[Roboto] text-sm sm:text-base text-[#014490]">
            Managed IT Services
          </span>
        </div>
        <h2 className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl lg:text-4xl text-center">
          Our Proven Path to Excellence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8 px-2 sm:px-6 lg:px-12">
          {[
            {
              title: 'Proactive Monitoring',
              desc: 'Identifying and resolving issues before they impact operations.',
            },
            {
              title: 'IT Infrastructure Management',
              desc: 'Ensuring systems are up-to-date, secure, and scalable.',
            },
            {
              title: 'Continuous Support',
              desc: 'Offering round-the-clock assistance to maximize productivity.',
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col relative bg-gradient-to-b from-[#03295D] to-[#2C78CD] px-6 py-8 rounded-[10px] overflow-hidden"
            >
              <span className="text-[#D8FF8F] font-[Barlow] text-lg sm:text-xl lg:text-2xl font-semibold">
                {step.title}
              </span>
              <p className="text-white font-[Roboto] text-sm sm:text-base lg:text-lg mt-2 mb-6">
                {step.desc}
              </p>
              <div className="w-16 sm:w-20 h-16 sm:h-20 p-3 bg-[#F4FFC34D] rounded-full absolute -top-6 -right-6 flex justify-center items-center">
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

export default DataBackUpRecovery;
