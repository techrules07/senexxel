import React, { useState } from "react";
import VinnteamLogo from "../assets/vinnteam.svg";
import ArrowDown from "../assets/DropdownPng.png";
import Dialer from "../assets/dialer.svg";
import ServiceMenu from "./ServiceMenu";
import IndustriesMenu from "./IndustriesMenu";
import InsightsMenu from "./InsightsMenu";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const [showIndustriesMenu, setShowIndustriesMenu] = useState(false);
  const [showInsightsMenu, setShowInsightsMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAllMenus = () => {
    setShowServiceMenu(false);
    setShowIndustriesMenu(false);
    setShowInsightsMenu(false);
  };

  const menuItems = [
    {
      label: "Services",
      onHover: () => {
        setShowIndustriesMenu(false);
        setShowServiceMenu(true);
        setShowInsightsMenu(false);
      },
      dropdown: true,
      href: "/services",
    },
    {
      label: "Industries",
      onHover: () => {
        setShowServiceMenu(false);
        setShowIndustriesMenu(true);
        setShowInsightsMenu(false);
      },
      dropdown: true,
    },
    {
      label: "Insights",
      onHover: () => {
        setShowServiceMenu(false);
        setShowIndustriesMenu(false);
        setShowInsightsMenu(true);
      },
      dropdown: true,
    },
    {
      label: "About",
      href: "/about",
      onHover: closeAllMenus,
    },
    {
      label: "Careers",
      href: "/careers",
      onHover: closeAllMenus,
    },
  ];

  return (
    <nav className="navbar fixed top-0 w-full z-50 bg-gradient-to-r from-[#38BDF8] to-[#0284C7] px-4 lg:px-[44px] py-3">
      {/* Top Row */}
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <a href="/" className="flex items-center">
            <img
              className="h-[42px] w-[151px]"
              src={VinnteamLogo}
              alt="Vinnteam"
            />
          </a>
          <span className="mt-1 w-[151px] text-center font-[Barlow] text-white font-semibold text-sm leading-tight">
            An Evonsys company
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              onMouseEnter={item.onHover}
              onClick={() => {
                if (item.label === "About") {
                  navigate("/about");
                }
                if (item.label === "Careers") {
                  navigate("/careers");
                }
              }}
              className="flex items-center text-white px-3 py-2 text-[18px] font-medium font-[Barlow] cursor-pointer"
            >
              {item.label}
              {item.dropdown && (
                <img
                  className="w-[15px] ml-[8px] mt-[3px]"
                  src={ArrowDown}
                  alt=""
                />
              )}
            </a>
          ))}
          {/* Contact Us Button */}
          <div
            className="flex items-center pt-[6px] pb-[6px] pr-[12px] pl-[8px] bg-gradient-to-r from-[#294CF3] to-[#182C8D] rounded-full cursor-pointer"
            onMouseEnter={closeAllMenus}
            onClick={() => navigate("/contact-us")}
          >
            <div className="flex items-center">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <img className="w-[14px] h-[14px]" src={Dialer} alt="" />
              </div>
              <label className="font-[Barlow] text-[18px] text-white ml-[8px]">
                Contact Us
              </label>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden flex flex-col mt-4 space-y-2">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => {
                closeAllMenus();
                setMobileOpen(false);
              }}
              className="text-white px-3 py-2 text-[18px] font-medium font-[Barlow]"
            >
              {item.label}
            </a>
          ))}
          <div className="flex">
              <div
            className="flex items-center pt-[6px] pb-[6px] pr-[12px] pl-[8px] bg-gradient-to-r from-[#294CF3] to-[#182C8D] rounded-full cursor-pointer"
            onClick={() => {
              setMobileOpen(false);
              navigate("/contact-us");
            }}
          >
            <div className="flex items-center">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <img className="w-[14px] h-[14px]" src={Dialer} alt="" />
              </div>
              <label className="font-[Barlow] text-[18px] text-white ml-[8px]">
                Contact Us
              </label>
            </div>
          </div>
          </div>
        
        </div>
      )}

      {/* Dropdown Menus */}
      {showServiceMenu && (
        <ServiceMenu updateServiceMenu={setShowServiceMenu} click={closeAllMenus} />
      )}
      {showIndustriesMenu && (
        <IndustriesMenu
          updateIndustriesMenu={setShowIndustriesMenu}
          click={closeAllMenus}
        />
      )}
      {showInsightsMenu && (
        <InsightsMenu
          updateInsightsMenu={setShowInsightsMenu}
          click={closeAllMenus}
        />
      )}
    </nav>
  );
};

export default NavBar;
