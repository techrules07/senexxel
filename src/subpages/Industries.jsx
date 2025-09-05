import { ItemDetails } from '../utils/SubItems';
import { subItems } from '../utils/Constant';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../Components/DtailsCard';
import Footer from '../Components/Footer';

const Industries = () => {

    const id = useParams().id;
    const [item, setItem] = useState();
    const [main, setMain] = useState();

    useEffect(() => {
        setItem(ItemDetails.find(item => {
           
            return item.parentId == parseInt(id)
        }));
        setMain(subItems.find(item => item.id == parseInt(id)));
    }, [id]) 

    console.log("item", main);

    return <div className="pt-[70px] bg-white flex-1">
            <div className="flex flex-row items-center bg-linear-to-r to-[#2C78CD] from-[#03295D] pl-[44px] pr-[44px]">
                <div className="flex flex-4 flex-col items-start">
                    {
                        main && <div className='bg-[#F3FFE0] px-[10px] rounded-full'>
                        <p className='font-[Roboto] text-base text-[#3E6400] font-normal'>{`Industries for ${main.main}`}</p>
                    </div>
                    }
                    
                    {
                        main && <h1 className="font-[Barlow] text-[34px] font-bold">{main.label}</h1>
                    }
                    {
                        main && <p className="w-[490px] font-[Roboto] font-[Roboto] font-normal mt-[20px]">{item.mainDesc}</p>
                    }
                    
                    
                </div>
                <div className="flex flex-3 pt-[35px] pb-[35px] justify-center">
                    {
                         item  && <div className='flex flex-1 justify-center'>
                            <div className='flex flex-1 flex-col items-end' >
                                <img src={item.bannerImages[0].image} className='mr-[10px] mt-[5px] mb-[5px] w-[200px] h-[160]' />
                                 <img src={item.bannerImages[1].image} className='mr-[10px] mt-[5px] mb-[5px] w-[200px] h-[160]' />
                            </div>
                            <div className='flex flex-1'>
                                <img src={item.bannerImages[2].image} className='mt-[5px] mb-[5px] w-[200px]' />
                            </div>
                        </div>
                    }
                    
                </div>
            </div>

             {
                item && <DetailsCard items={item} />
            }
            <Footer />
        </div>
}

export default Industries;