import SemiCircleRect from '../assets/semicircle-rect.svg';
import Dots from '../assets/dots.svg';
import Dotted from '../assets/dots-mems.svg';

const DetailsCard = (props) => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      {/* Section Title */}
      <p className="text-center text-2xl sm:text-3xl lg:text-4xl mt-10 font-[Barlow] font-semibold text-black">
        {props?.items.title}
      </p>

      {/* First Row */}
      <div className="flex flex-col md:flex-row items-center gap-8 my-12 md:my-20">
        {/* Image Left */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img className="w-48 sm:w-64 md:w-72 lg:w-[300px] relative z-[1]" src={props?.items.image1} />
            <img src={SemiCircleRect} className="absolute -top-20 -left-20 z-0 w-40 sm:w-44" />
            <img src={Dots} className="absolute -bottom-12 -right-12 z-0 w-28 sm:w-32" />
          </div>
        </div>

        {/* Text Right */}
        <div className="flex-1 flex flex-col items-start text-center md:text-left">
          <div className="flex bg-[#DFEEFF] rounded-full px-4 py-1 self-center md:self-start">
            <label className="font-[Roboto] font-normal text-sm sm:text-base text-[#014490]">
              {props?.items.round1}
            </label>
          </div>
          <label className="font-[Barlow] font-semibold text-xl sm:text-2xl lg:text-3xl text-black mt-3">
            {props?.items.title1}
          </label>
          <label className="mt-4 text-black font-[Roboto] font-normal text-base sm:text-lg lg:text-xl max-w-full md:max-w-[600px]">
            {props?.items.detail1}
          </label>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 my-20 md:my-36">
        {/* Text Left */}
        <div className="flex-1 flex flex-col items-start text-center md:text-left px-4 md:pl-16">
          <div className="flex bg-[#DFEEFF] rounded-full px-4 py-1 self-center md:self-start">
            <label className="font-[Roboto] font-normal text-sm sm:text-base text-[#014490]">
              {props?.items.round2}
            </label>
          </div>
          <label className="font-[Barlow] font-semibold text-xl sm:text-2xl lg:text-3xl text-black mt-3">
            {props?.items.title2}
          </label>
          <label className="mt-4 text-black font-[Roboto] font-normal text-base sm:text-lg lg:text-xl max-w-full md:max-w-[600px]">
            {props?.items.detail2}
          </label>
        </div>

        {/* Image Right */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img className="w-48 sm:w-64 md:w-72 lg:w-[300px] relative z-[1]" src={props?.items.image2} />
            <div className="absolute -top-16 -right-16 z-0 w-28 sm:w-36 md:w-40 h-28 sm:h-36 md:h-40 rounded-full bg-[#046BDF]" />
            <img src={Dotted} className="absolute -bottom-12 -left-12 z-0 w-28 sm:w-32" />
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <div className="flex mt-12 justify-center flex-col items-center">
        <label className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl">
          {props?.items.discover}
        </label>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-6 lg:px-12 my-10">
          {props?.items.items.map((it, idx) => (
            <div key={idx} className="flex flex-col shadow-md border border-[#CECECE] rounded-[10px] px-4 py-6">
              <div className="flex flex-row items-center">
                <div className="flex flex-col items-center justify-center bg-[#EFFFEB] rounded-[10px] p-4">
                  <img src={it.icon} className="w-10 sm:w-12" />
                </div>
                <label className="text-black font-[Barlow] font-medium text-lg sm:text-xl ml-4">
                  {it.label}
                </label>
              </div>
              <label className="text-[Roboto] text-[#000000B3] text-sm sm:text-base mt-4">
                {it.details}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Row / Fallback */}
      {props.items.cards ? (
        <div className="flex flex-col w-full items-center justify-center py-12">
          <div className="flex bg-[#DFEEFF] rounded-full px-4 py-1">
            <label className="font-[Roboto] font-normal text-sm sm:text-base text-[#014490]">
              {props.items.cardRoud}
            </label>
          </div>
          <label className="text-black font-[Barlow] font-semibold text-2xl sm:text-3xl mt-6">
            {props.items.cardTitle}
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] bg-[#E9F0FF] rounded-[20px] mt-8 p-6">
            {props.items.cards.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between h-[230px] relative bg-gradient-to-b from-[#03295D] to-[#2C78CD] rounded-[10px] p-6 overflow-hidden">
                <label className="text-[#D8FF8F] font-[Barlow] text-xl sm:text-2xl font-semibold">
                  {item.title}
                </label>
                <label className="text-white font-[Roboto] text-base sm:text-lg mb-6">{item.desc}</label>
                <div className="w-20 h-20 sm:w-24 sm:h-24 p-3 bg-[#F4FFC34D] rounded-full absolute -right-8 -top-8 flex justify-center items-center">
                  <div className="w-full h-full bg-[#F4FFC399] rounded-full flex justify-center items-center p-3">
                    <div className="w-full h-full bg-[#F4FFC3] rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailsCard;
