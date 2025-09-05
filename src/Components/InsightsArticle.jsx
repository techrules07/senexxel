
import { useState } from 'react';
import ScrollableItem1 from '../assets/scrollable-item1.png';
import ScrollableItem2 from '../assets/scrollable-item2.png';
import ScrollableItem3 from '../assets/scrollable-item3.png';
import ScrollableItem4 from '../assets/scrollable-item4.png';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';

const InsightsArticle = () => {

    const [data] = useState([
        { id: 1, image: ScrollableItem1, content: 'Explore the key abilities that empower professionals to adapt, innovate, and excel in the era of artificial intelligence.', title: 'Essential Skills for Thriving in an AI-Driven World', name: 'Sam Ashok', time: '5 min read', tag: 'Experience' },
        { id: 2, image: ScrollableItem2, content: 'Raj Patel discusses the importance of teamwork and creativity in driving success in a fast-changing world.', title: 'Unlocking Innovation Through Collaboration', name: 'Raj Patel', time: '3 min read', tag: 'Research' },
        { id: 3, image: ScrollableItem3, content: 'Emma Smith shares her top strategies for professionals to adapt and thrive in today’s evolving workplace.', title: 'Guide to Building Resilience in a Tech-Driven Era', name: 'Emma Smith', time: '7 min read', tag: 'Experience' },
        { id: 4, image: ScrollableItem4, content: 'Discover insights from John Carter on developing critical skills to stay ahead in an AI-powered world.', title: 'AI Skills for the Future Workforce', name: 'John Carter', time: '5 min read', tag: 'Sll News' }])

    return <div className="flex py-[60px] w-full items-center flex-col px-[55px]">
        <label className="text-black font-[Barlow] text-[40px] font-semibold">Insights and articles</label>
        <div className="relative mt-[25px] w-full flex items-center justify-center">
            <label className="relative font-[Barlow] text-[#046BDF] text-[22px] font-semibold">Explore all Articles</label>
            <div className='flex flex-row absolute top-0 right-0'>

                <div className='rounded-full bg-gradient-to-t from-[#182C8D] to-[#294CF3] w-[44px] h-[44px] flex items-center justify-center'>
                    <img src={ArrowLeft} className='w-[16px]' />
                </div>

                <div className='rounded-full bg-gradient-to-t from-[#182C8D] to-[#294CF3] w-[44px] h-[44px] flex items-center justify-center ml-[30px]'>
                    <img src={ArrowRight} className='w-[16px]' />
                </div>
            </div>
        </div>

        <div className="flex flex-row w-full mt-[30px]">
            {
                data.map(item => {
                    return <div className='flex flex-1 flex-col px-[10px]'>
                        <div className='flex flex-col bg-white drop-shadow-md rounded-bl-[10px] rounded-br-[10px]'>
                            <img src={item.image} />
                            <div className='px-[12px] mt-[15px] flex flex-col'>
                                <label className='font-[Barlow] h-[36px] font-semibold text-base text-black'>{item.title}</label>
                                <label className='font-[Roboto] font-medium text-base text-[#00000080] mt-[25px]'>{item.content}</label>

                                <div className='w-full mt-[15px] bg-[#00000016] h-[1px]'></div>
                                <div className='flex flex-row justify-between py-[15px]'>
                                    <label className='font-[Roboto] text-sm font-normal text-[#000000]'>{item.name}</label>
                                    <label className='font-[Roboto] text-sm font-normal text-[#00000080]'>{item.time}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default InsightsArticle;