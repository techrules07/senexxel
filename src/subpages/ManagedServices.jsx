import SysIntegration from '../assets/system-integration.png';
import CloudSystemManagement from '../Components/CloudServiceManagement';
import DataBackUpRecovery from '../Components/DataBackupRecovery';
import Footer from '../Components/Footer';
import NetworkManagement from '../Components/NetworkManagement';
import SecurityService from '../Components/SecurityServices';

const ManagedServices = ({ type }) => {
    return (
        <div className="pt-[70px] bg-white flex-1">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r to-[#2C78CD] from-[#03295D] px-6 lg:px-11">
                {/* Left Content */}
                <div className="flex flex-col flex-1 text-center lg:text-left">
                    <h1 className="font-[Barlow] text-[26px] md:text-[34px] font-bold text-white">
                        Managed IT Services
                    </h1>
                    <p className="max-w-[490px] mx-auto lg:mx-0 font-[Roboto] font-normal mt-5 text-white text-base md:text-lg">
                        Focus on your core business while we handle your IT infrastructure with proactive management and 24/7 support.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex flex-1 pt-6 lg:pt-[35px] pb-6 lg:pb-[35px] justify-center">
                    <img
                        src={SysIntegration}
                        alt="IT Services Banner"
                        className="h-[220px] md:h-[300px] lg:h-[380px] object-contain"
                    />
                </div>
            </div>

            {/* Conditional Render Sections */}
            {type === 7 && <DataBackUpRecovery />}
            {type === 8 && <CloudSystemManagement />}
            {type === 9 && <NetworkManagement />}
            {type === 10 && <SecurityService />}

            <Footer />
        </div>
    );
};

export default ManagedServices;
