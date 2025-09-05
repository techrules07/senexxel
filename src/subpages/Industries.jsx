import { ItemDetails } from "../utils/SubItems";
import { subItems } from "../utils/Constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../Components/DtailsCard";
import Footer from "../Components/Footer";

const Industries = () => {
  const id = useParams().id;
  const [item, setItem] = useState();
  const [main, setMain] = useState();

  useEffect(() => {
    setItem(
      ItemDetails.find((item) => item.parentId == parseInt(id))
    );
    setMain(subItems.find((item) => item.id == parseInt(id)));
  }, [id]);

  return (
    <div className="pt-[70px] bg-white flex-1">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r to-[#2C78CD] from-[#03295D] px-6 sm:px-10 md:px-[44px] py-8 gap-8 lg:gap-0">
        {/* Left Side Text */}
        <div className="flex flex-col flex-1 items-start text-center lg:text-left">
          {main && (
            <div className="bg-[#F3FFE0] px-4 py-1 rounded-full mb-3">
              <p className="font-[Roboto] text-sm sm:text-base text-[#3E6400] font-normal">
                {`Industries for ${main.main}`}
              </p>
            </div>
          )}

          {main && (
            <h1 className="font-[Barlow] text-2xl sm:text-3xl md:text-[34px] font-bold text-white">
              {main.label}
            </h1>
          )}

          {main && item && (
            <p className="max-w-full md:max-w-[490px] font-[Roboto] font-normal mt-4 text-sm sm:text-base text-white/90">
              {item.mainDesc}
            </p>
          )}
        </div>

        {/* Right Side Images */}
        <div className="flex flex-1 justify-center lg:justify-end flex-wrap gap-4">
          {item && (
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <img
                src={item.bannerImages[0].image}
                className="w-[140px] sm:w-[160px] md:w-[200px] h-auto rounded-lg"
                alt="banner-1"
              />
              <img
                src={item.bannerImages[1].image}
                className="w-[140px] sm:w-[160px] md:w-[200px] h-auto rounded-lg"
                alt="banner-2"
              />
            </div>
          )}
          {item && (
            <div className="flex">
              <img
                src={item.bannerImages[2].image}
                className="w-[160px] sm:w-[200px] md:w-[240px] h-auto rounded-lg"
                alt="banner-3"
              />
            </div>
          )}
        </div>
      </div>

      {/* Details Card */}
      {item && <DetailsCard items={item} />}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Industries;
