import React from "react";
import footerBg from "../assets/footer-bg.png";
import logo2 from "../assets/logo 2.png";
import logo1 from "../assets/logo-white.svg";
import QuickLinks from "./footerComponent/quickLinks";
import UsefulLinks from "./footerComponent/usefulLinks";
import ContactUs from "./footerComponent/contactUs";

export default function Footer() {

  return (
    <div
      className="relative flex items-center justify-center py-[33px] bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Logo as background */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${logo2})` }}
      />

      {/* Content on top of logo */}
      <div className="w-full conatiner">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-white">
          <div className="col-span-2">
            <img src={logo1} alt="" />
            <div className="max-w-[274px] mt-6">
              <span className="text-base">
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci maecenas tortor odio Leo dui fermentum tristique urna
                tellus eget amet aliquam. Id vitae orci maecenas tortor odioLeo
              </span>
            </div>
          </div>
          <div className="col-span-1">
            <span className="text-base font-medium">Quick Links</span>
            <QuickLinks />
          </div>
          <div className="col-span-1">
            <span className="text-base font-medium">Useful Links</span>
            <UsefulLinks />
          </div>
          <div className="col-span-2">
            <span className="text-base font-medium">Contact Us</span>
            <ContactUs />
          </div>
        </div>
        <div className="border-t border-[#DEDEDE] w-full mt-8"></div>
      </div>
    </div>
  );
}
