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
    return <div className="pt-[30px] bg-white flex flex-1 flex-col w-full">
        <div className="flex flex-row flex-1">
            <div className="px-[50px] flex flex-col py-[80px] items-start flex-1">
                <label className="font-[Barlow] font-semibold text-[22px] bg-gradient-to-r from-[#03295D] to-[#2C78CD] bg-clip-text text-fill border-b-[2px] border-solid border-[#D5FF2E] pb-[5px]">CONTACT US</label>
                <label className="font-[Barlow] font-semibold text-[32px] text-[#000000] mt-[25px]">Get in Touch - We’re here to <span className="bg-gradient-to-r from-[#2C78CD] to-[#03295D] bg-clip-text text-fill">Help!</span></label>
                <label className="font-[Roboto] font-normal text-[18px] text-[#000000B3]">Looking to take your business further? Our team offers custom solutions that help you grow and succeed.
                    Get in touch today and let’s start building your future!</label>

                <img src={ContactUsImg} className="mt-[40px] h-[500px]"  />


                <label className="font-[Barlow] font-semibold text-[38px] text-[#000000] mt-[50px]">More ways to Connect</label>

                <div className="flex flex-row w-full">
                    <div className="p-[15px] flex-2 flex flex-row border border-solid border-[#E4E4E4] rounded-[10px]">
                        <div className="flex-1 flex">
                            <img src={EmailUs} className="" />
                        </div>

                        <div className="flex flex-col flex-5  ml-[15px]">
                            <label className="font-[Barlow] font-medium text-lg text-[#000000]">Email Us</label>
                            <label className="font-[Roboto] font-medium text-sm text-[#000000B3]">support@senexxel.com</label>
                        </div>
                    </div>

                    <div className="p-[15px] ml-[28px] flex-2 flex flex-row border border-solid border-[#E4E4E4] rounded-[10px]">
                        <div className="flex-1 flex">
                            <img src={WhatsappUs} className="" />
                        </div>

                        <div className="flex flex-col flex-5 ml-[15px]">
                            <label className="font-[Barlow] font-medium text-lg text-[#000000]">Business Support</label>
                            <label className="font-[Roboto] font-medium text-sm text-[#000000B3]">+11 8850290382</label>
                        </div>
                    </div>

                    <div className="flex-1"></div>
                </div>

                <div className="mt-[50px]">
                    <label className="font-[Barlow] font-semibold text-[38px] text-[#000000] mt-[50px]">Our Locations</label>

                    <div className="flex flex-row w-[530px] mt-[30px]">
                        <div className="p-[10px] flex-1 flex flex-col relative border border-solid border-[#C4C4C4] rounded-[10px]">
                            <img src={MapIndia} />
                            <div className="absolute flex flex-row p-[4px] bg-[#0000004D] rounded-full top-[20px] right-[20px] items-center">
                                <img src={IndiaFlag} className="w-[20px] h-[20px]" />
                                <label className="text-white font-[Roboto] font-medium text-base ml-[5px]">INDIA</label>
                            </div>
                            <label className="font-[Roboto] font-normal text-sm text-[#000000] mt-[12px]">First floor, Technopearl, HITEC City, Hyderabad, Telangana, 500081</label>

                            <div className="w-full flex justify-end flex-row mt-[44px] items-center">
                                <label className="font-[Roboto] font-normal text-sm text-[#165BD3]">Contact us</label>
                                <img src={RightArrow} className="ml-[12px]" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col p-[10px] relative border border-solid border-[#C4C4C4] rounded-[10px] ml-[20px]">
                            <img src={MapIndia} />
                            <div className="absolute flex flex-row pr-[10px] p-[4px] bg-[#0000004D] rounded-full top-[20px] right-[20px] items-center">
                                <img src={USAFlag} className="w-[20px] h-[20px]" />
                                <label className="text-white font-[Roboto] font-medium text-base ml-[5px]">USA</label>
                            </div>
                            <label className="font-[Roboto] font-normal text-sm text-[#000000] mt-[12px]">1060 E Pioneer pkwy, Suite#535, Arlington, TX, 76010</label>

                            <div className="w-full flex justify-end flex-row mt-[44px] items-center">
                                <label className="font-[Roboto] font-normal text-sm text-[#165BD3]">Contact us</label>
                                <img src={RightArrow} className="ml-[12px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 py-[80px] px-[50px]">
                <div className="w-full border border-solid border-[#F2F2F2] px-[30px] py-[15px] rounded-[10px] flex flex-col">
                    <label className="font-[Barlow] font-semibold text-[18px] text-[#165BD3]">Reach out to us</label>

                    <label className="font-[Roboto] font-normal text-[18px] text-[#000000] mt-[25px]">Name*</label>
                    <input type="text" className="border border-solid border-[#DFDFDF] rounded-[10px] px-[15px] py-[10px] mt-[10px] w-full font-[Roboto] text-[18px] font-normal" id="input" placeholder="Enter your name" />

                    <label className="font-[Roboto] font-normal text-[18px] text-[#000000] mt-[20px]">Business Email*</label>
                    <input type="text" className="border border-solid border-[#DFDFDF] rounded-[10px] px-[15px] py-[10px] mt-[10px] w-full font-[Roboto] text-[18px] font-normal" id="input" placeholder="Enter your business mail id" />

                     <label className="font-[Roboto] font-normal text-[18px] text-[#000000] mt-[20px]">Company Name</label>
                    <input type="text" className="border border-solid border-[#DFDFDF] rounded-[10px] px-[15px] py-[10px] mt-[10px] w-full font-[Roboto] text-[18px] font-normal" id="input" placeholder="Enter your company name" />

                    <label className="font-[Roboto] font-normal text-[18px] text-[#000000] mt-[20px]">Contact Number*</label>
                    <input type="text" className="border border-solid border-[#DFDFDF] rounded-[10px] px-[15px] py-[10px] mt-[10px] w-full font-[Roboto] text-[18px] font-normal" id="input" placeholder="Enter your contact number" />
                    
                    <label className="font-[Roboto] font-normal text-[18px] text-[#000000] mt-[20px]">Reason for Contacting Us*</label>
                    <input type="text" className="border border-solid border-[#DFDFDF] rounded-[10px] px-[15px] py-[10px] mt-[10px] w-full font-[Roboto] text-[18px] font-normal" id="input" placeholder="Enter your reason" />

                    <label className="font-[Roboto] font-normal text-[18px] text-[#000000] mt-[20px]">Message (optional)</label>
                    <input type='text' className="border border-solid border-[#DFDFDF] rounded-[10px] px-[15px] py-[10px] mt-[10px] w-full h-[140px] font-[Roboto] text-[18px] font-normal" id="input" placeholder="Questions/Messages" />


                    <div className="w-full bg-[#165BD3] cursor-pointer rounded-[16px] flex justify-center mt-[30px] py-[16px]">
                        <label className="font-[Roboto] text-[18px] font-normal cursor-pointer">CONTACT ME</label>
                    </div>
                </div>
            </div>
        </div>

    <Footer />
    </div>
}

export default ContactUs;