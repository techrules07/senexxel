import React from "react";
import ContactUsImg from "../assets/contact-us-img.png";
import EmailUs from "../assets/email-us.svg";
import WhatsappUs from "../assets/whatsapp.svg";
import MapIndia from "../assets/map-india.svg";
import RightArrow from "../assets/right-arrow.svg";
import USAFlag from "../assets/usa-flag.png";
import IndiaFlag from "../assets/india-flag.png";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div className="pt-[30px] bg-white flex flex-col w-full">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Section */}
        <div className="px-6 lg:px-[50px] py-[40px] lg:py-[80px] flex flex-col items-start flex-1">
          <label className="font-[Barlow] font-semibold text-[20px] lg:text-[22px] bg-gradient-to-r from-[#03295D] to-[#2C78CD] bg-clip-text text-fill border-b-[2px] border-[#D5FF2E] pb-[5px]">
            CONTACT US
          </label>
          <label className="font-[Barlow] font-semibold text-[24px] lg:text-[32px] text-[#000000] mt-[20px] lg:mt-[25px]">
            Get in Touch - We’re here to{" "}
            <span className="bg-gradient-to-r from-[#2C78CD] to-[#03295D] bg-clip-text text-fill">
              Help!
            </span>
          </label>
          <label className="font-[Roboto] font-normal text-[16px] lg:text-[18px] text-[#000000B3] mt-3">
            Looking to take your business further? Our team offers custom
            solutions that help you grow and succeed. Get in touch today and
            let’s start building your future!
          </label>

          {/* Contact Image */}
          <img
            src={ContactUsImg}
            className="mt-[30px] lg:mt-[40px] w-full h-auto max-h-[400px] lg:max-h-[500px] object-contain"
          />

          {/* More Ways to Connect */}
          <label className="font-[Barlow] font-semibold text-[26px] lg:text-[38px] text-[#000000] mt-[40px] lg:mt-[50px]">
            More ways to Connect
          </label>

          <div className="flex flex-col sm:flex-row w-full mt-4 gap-4">
            {/* Email */}
            <div className="p-[15px] flex flex-row border border-[#E4E4E4] rounded-[10px] flex-1">
              <img src={EmailUs} className="w-[30px] h-[30px]" />
              <div className="flex flex-col ml-[15px]">
                <label className="font-[Barlow] font-medium text-lg text-[#000000]">
                  Email Us
                </label>
                <label className="font-[Roboto] font-medium text-sm text-[#000000B3] break-all">
                  support@senexxel.com
                </label>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-[15px] flex flex-row border border-[#E4E4E4] rounded-[10px] flex-1">
              <img src={WhatsappUs} className="w-[30px] h-[30px]" />
              <div className="flex flex-col ml-[15px]">
                <label className="font-[Barlow] font-medium text-lg text-[#000000]">
                  Business Support
                </label>
                <label className="font-[Roboto] font-medium text-sm text-[#000000B3]">
                  +11 8850290382
                </label>
              </div>
            </div>
          </div>

          {/* Our Locations */}
          <div className="mt-[40px] lg:mt-[50px] w-full">
            <label className="font-[Barlow] font-semibold text-[26px] lg:text-[38px] text-[#000000]">
              Our Locations
            </label>

            <div className="flex flex-col sm:flex-row mt-[20px] gap-5 w-full">
              {/* India */}
              <div className="p-[10px] flex flex-col relative border border-[#C4C4C4] rounded-[10px] flex-1">
                <img src={MapIndia} className="w-full object-contain" />
                <div className="absolute flex flex-row p-[4px] bg-[#0000004D] rounded-full top-[20px] right-[20px] items-center">
                  <img src={IndiaFlag} className="w-[20px] h-[20px]" />
                  <label className="text-white font-[Roboto] font-medium text-sm lg:text-base ml-[5px]">
                    INDIA
                  </label>
                </div>
                <label className="font-[Roboto] font-normal text-sm text-[#000000] mt-[12px]">
                  First floor, Technopearl, HITEC City, Hyderabad, Telangana,
                  500081
                </label>

                <div className="w-full flex justify-end flex-row mt-[20px] items-center">
                  <label className="font-[Roboto] font-normal text-sm text-[#165BD3]">
                    Contact us
                  </label>
                  <img src={RightArrow} className="ml-[12px]" />
                </div>
              </div>

              {/* USA */}
              <div className="p-[10px] flex flex-col relative border border-[#C4C4C4] rounded-[10px] flex-1">
                <img src={MapIndia} className="w-full object-contain" />
                <div className="absolute flex flex-row p-[4px] bg-[#0000004D] rounded-full top-[20px] right-[20px] items-center">
                  <img src={USAFlag} className="w-[20px] h-[20px]" />
                  <label className="text-white font-[Roboto] font-medium text-sm lg:text-base ml-[5px]">
                    USA
                  </label>
                </div>
                <label className="font-[Roboto] font-normal text-sm text-[#000000] mt-[12px]">
                  1060 E Pioneer Pkwy, Suite #535, Arlington, TX, 76010
                </label>

                <div className="w-full flex justify-end flex-row mt-[20px] items-center">
                  <label className="font-[Roboto] font-normal text-sm text-[#165BD3]">
                    Contact us
                  </label>
                  <img src={RightArrow} className="ml-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 py-[40px] lg:py-[80px] px-6 lg:px-[50px]">
          <div className="w-full border border-[#F2F2F2] px-[20px] lg:px-[30px] py-[15px] rounded-[10px] flex flex-col">
            <label className="font-[Barlow] font-semibold text-[18px] text-[#165BD3]">
              Reach out to us
            </label>

            {[
              { label: "Name*", placeholder: "Enter your name" },
              { label: "Business Email*", placeholder: "Enter your business mail id" },
              { label: "Company Name", placeholder: "Enter your company name" },
              { label: "Contact Number*", placeholder: "Enter your contact number" },
              { label: "Reason for Contacting Us*", placeholder: "Enter your reason" },
            ].map((field, idx) => (
              <div key={idx} className="mt-[20px]">
                <label className="font-[Roboto] font-normal text-[16px] lg:text-[18px] text-[#000000]">
                  {field.label}
                </label>
                <input
                  type="text"
                  className="border border-[#DFDFDF] rounded-[10px] px-[15px] py-[10px] mt-[10px] w-full font-[Roboto] text-[16px] lg:text-[18px] font-normal"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            {/* Message */}
            <div className="mt-[20px]">
              <label className="font-[Roboto] font-normal text-[16px] lg:text-[18px] text-[#000000]">
                Message (optional)
              </label>
              <textarea
                className="border border-[#DFDFDF] rounded-[10px] px-[15px] py-[10px] mt-[10px] w-full h-[140px] font-[Roboto] text-[16px] lg:text-[18px] font-normal resize-none"
                placeholder="Questions/Messages"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full bg-[#165BD3] cursor-pointer rounded-[16px] flex justify-center mt-[30px] py-[14px] lg:py-[16px]">
              <label className="font-[Roboto] text-[16px] lg:text-[18px] font-normal cursor-pointer text-white">
                CONTACT ME
              </label>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
