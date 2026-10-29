import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetails } from "../utils/SubItems";
import { subItems } from "../utils/Constant";
import { IndustriesItems } from "../utils/IndustriesItems";
import RightArrow from "../assets/right-arrow-big.svg";
import Footer from "../Components/Footer";

const Insights = () => {
  const id = useParams().id;
  const [item, setItem] = useState();
  const [main, setMain] = useState();
  const [selectedId, setSelectedId] = useState(1);

  useEffect(() => {
    setItem(ItemDetails.find((item) => item.parentId == parseInt(id)));
    setMain(subItems.find((item) => item.id == parseInt(id)));
  }, [id]);

  return (
    <div className="pt-[70px] bg-white flex-1">
      {/* Banner Section */}
      <div className="bg-gradient-to-b to-[#2C78CD] from-[#03295D] w-full">
        {item && (
          <img src={item.bannerImages} className="w-full h-auto object-cover" />
        )}
      </div>

      {/* Title */}
      {main && (
        <p className="text-center text-2xl sm:text-3xl md:text-4xl mt-10 font-[Barlow] font-semibold text-black px-4">
          {main.label}
        </p>
      )}

      {/* Industries Section */}
      {item && (
        <div className="mt-6 px-4 sm:px-6 lg:px-[20px]">
          <div className="flex flex-wrap gap-6 justify-center">
            {IndustriesItems.filter(
              (industries) => industries.mainId === selectedId
            ).map((industries) => (
              <div
                key={industries.title}
                className="flex flex-col items-center w-full sm:w-[48%] lg:w-[23%] mt-4"
              >
                <div className="bg-white shadow-md rounded-[10px] w-full">
                  <div className="flex flex-col items-start">
                    <img
                      src={industries.img}
                      alt={industries.title}
                      className="w-full h-[180px] object-cover rounded-t-[10px]"
                    />
                    <div className="flex flex-col px-4 py-3">
                      <label className="font-[Barlow] text-black font-semibold text-lg mt-2">
                        {industries.title}
                      </label>
                      <label className="mt-4 font-[Roboto] text-[#00000080] text-sm sm:text-base">
                        {industries.desc}
                      </label>

                      <div className="h-[1px] bg-[#0000001A] w-full mt-4"></div>

                      <div className="w-full flex flex-row mt-3 pb-3 justify-between items-center">
                        <label className="font-[Roboto] text-sm text-[#000000]">
                          {industries.name}
                        </label>
                        <label className="font-[Roboto] text-sm text-[#00000080]">
                          {industries.date}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting Section */}
          <p className="px-4 sm:px-6 font-[Barlow] text-[#000000] font-semibold text-2xl sm:text-3xl lg:text-4xl mt-14 text-center">
            Connecting People, Purpose, and Possibilities
          </p>

          {/* About / Careers / Contact */}
          <div className="w-full flex flex-col lg:flex-row gap-6 mt-10">
            {[
              {
                title: "About",
                text: "At Vinnteam, we deliver innovative solutions that empower businesses to grow and succeed. Our commitment is to excellence and meaningful impact",
              },
              {
                title: "Careers",
                text: "Join our team and turn your passion into purpose. At Vinnteam, we foster growth, collaboration, and opportunities for success.",
              },
              {
                title: "Contact Us",
                text: "Let’s create success together! Reach out to us for innovative solutions tailored to your business needs.",
              },
            ].map((box) => (
              <div
                key={box.title}
                className="flex flex-1 flex-col border border-[#C8C8C8] rounded-[14px] p-6"
              >
                <div className="flex flex-row justify-between items-center">
                  <label className="text-[#000000] font-[Roboto] text-xl sm:text-2xl font-medium">
                    {box.title}
                  </label>
                  <img src={RightArrow} className="h-6" alt="arrow" />
                </div>

                <label className="text-[#00000080] mt-6 font-[Roboto] text-sm sm:text-base">
                  {box.text}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default Insights;
