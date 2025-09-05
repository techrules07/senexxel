import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { ItemDetails } from '../utils/SubItems';
import DetailsCard from '../Components/DtailsCard';
import Footer from '../Components/Footer';
const DetailsService = () => { 

    const id = useParams().id;
    const [item, setItem] = useState();

    useEffect(() => {
        setItem(ItemDetails.find(item => item.parentId == parseInt(id)));
    }, [id]) 

    return <div className="pt-[70px] bg-white flex-1">
            <div className="flex flex-row items-center bg-linear-to-r to-[#2C78CD] from-[#03295D] pl-[44px] pr-[44px]">
                <div className="flex flex-4 flex-col">
                    {item && <h1 className="font-[Barlow] text-[34px] font-bold">{item.titleMain}</h1> }
                    {item && <p className="w-[490px] font-[Roboto] font-[Roboto] font-normal mt-[20px]">{item.mainDesc}</p> }
                </div>
                <div className="flex flex-3 pt-[35px] pb-[35px] justify-center">
                    {item && <img src={item.bannerImage} alt="IT Services Banner" className="h-[380px]" />}
                </div>
            </div>

            {
                item && <DetailsCard items={item} />
            }
            
            
            <Footer />
        </div>
}

export default DetailsService;