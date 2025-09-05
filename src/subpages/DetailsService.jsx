import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetails } from '../utils/SubItems';
import DetailsCard from '../Components/DtailsCard';
import Footer from '../Components/Footer';

const DetailsService = () => { 
    const { id } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        setItem(ItemDetails.find(item => item.parentId == parseInt(id ?? "0")));
    }, [id]);

    return (
        <div className="pt-[70px] bg-white flex-1">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#03295D] to-[#2C78CD] px-6 md:px-12">
                
                {/* Left Content */}
                <div className="flex flex-col flex-1 text-center md:text-left mt-6 md:mt-0">
                    {item && (
                        <>
                            <h1 className="font-[Barlow] text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                {item.titleMain}
                            </h1>
                            <p className="max-w-full md:max-w-md lg:max-w-lg font-[Roboto] font-normal mt-4 text-sm sm:text-base text-white opacity-90">
                                {item.mainDesc}
                            </p>
                        </>
                    )}
                </div>

                {/* Right Image */}
                <div className="flex flex-1 justify-center py-6">
                    {item && (
                        <img 
                            src={item.bannerImage} 
                            alt="IT Services Banner" 
                            className="h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
                        />
                    )}
                </div>
            </div>

            {/* Details Card Section */}
            {item && <DetailsCard items={item} />}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DetailsService;
