import SysIntegration from '../assets/system-integration.png';
import CloudSystemManagement from '../Components/CloudServiceManagement';
import DataBackUpRecovery from '../Components/DataBackupRecovery';
import Footer from '../Components/Footer';
import NetworkManagement from '../Components/NetworkManagement';
import SecurityService from '../Components/SecurityServices';

const ManagedServices = ({type}) => { 
    return (
        <div className="pt-[70px] bg-white flex-1">
            <div className="flex flex-row items-center bg-linear-to-r to-[#2C78CD] from-[#03295D] pl-[44px] pr-[44px]">
                <div className="flex flex-4 flex-col">
                    <h1 className="font-[Barlow] text-[34px] font-bold">Managed IT Services</h1>
                    <p className="w-[490px] font-[Roboto] font-[Roboto] font-normal mt-[20px]">Focus on your core business while we handle your IT infrastructure with proactive management and 24/7 support.</p>
                </div>
                <div className="flex flex-3 pt-[35px] pb-[35px] justify-center">
                    <img src={SysIntegration} alt="IT Services Banner" className="h-[380px]" />
                </div>
            </div>
            {
                type === 7 && <DataBackUpRecovery />
            }
            {
                type === 8 && <CloudSystemManagement />
            }
            {
                type === 9 && <NetworkManagement />
            }
            {
                type === 10 && <SecurityService />
            }
            
            <Footer />
        </div>
    );
}

export default ManagedServices;