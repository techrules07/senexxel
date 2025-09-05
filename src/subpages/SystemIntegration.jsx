import SysIntegration from '../assets/system-integration.png';
import APIIntegration from '../Components/APIIntegration';
import ApplicationIntegration from '../Components/ApplicationIntegration';
import CloudIntegration from '../Components/CloudIntegration';
import CloudSoftwareIntegration from '../Components/CloudSoftwareIntegration';
import DataBackUpRecovery from '../Components/DataBackupRecovery';
import DataIntegration from '../Components/DataIntegration';
import Footer from '../Components/Footer';
import IOTIntegration from '../Components/IOTIntegration';

const SystemIntegration = ({ type }) => {
  return (
    <div className="pt-[70px] bg-white flex-1">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#03295D] to-[#2C78CD] px-4 sm:px-8 md:px-12 lg:px-[44px]">
        
        {/* Left Content */}
        <div className="flex flex-1 flex-col text-center md:text-left py-8 md:py-0">
          <h1 className="font-[Barlow] text-2xl sm:text-3xl md:text-[34px] font-bold text-white">
            Systems Integration
          </h1>
          <p className="max-w-[490px] w-full font-[Roboto] text-base sm:text-lg mt-4 text-white mx-auto md:mx-0">
            Seamlessly connect diverse systems and applications to enhance efficiency and streamline operations across your enterprise
          </p>
        </div>

        {/* Right Image */}
        <div className="flex flex-1 justify-center py-6 md:py-[35px]">
          <img
            src={SysIntegration}
            alt="IT Services Banner"
            className="w-full max-w-[380px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Conditional Components */}
      {type === 1 && <ApplicationIntegration />}
      {type === 2 && <APIIntegration />}
      {type === 3 && <IOTIntegration />}
      {type === 4 && <DataIntegration />}
      {type === 5 && <CloudIntegration />}
      {type === 6 && <CloudSoftwareIntegration />}
      {type === 7 && <DataBackUpRecovery />}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SystemIntegration;
