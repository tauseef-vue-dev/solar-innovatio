import React from "react";
import headerLogo from "../assets/logo 1.svg";
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import Button from "./common/Button/button";

export default function Header() {
  return (
    <div className="h-[77px] bg-white border-b-1 border-[#F3EDED] flex items-center justify-between container font-poppins">
      <img src={headerLogo} alt="" />
      <div className="flex gap-10 justify-between">
        <div className="lg:flex items-center gap-5 hidden">
          <img src={phoneIcon} alt="" />
          <span className="text-[#8A8888] text-base font-regular">
            0203 519 4420
          </span>
        </div>
        <div className="md:flex items-center gap-5 hidden">
          <img src={emailIcon} alt="" />
          <span className="text-[#8A8888] text-base font-regular">
            info@solarinnovatio.com
          </span>
        </div>
        <div>
            <Button btnText="Contact us"/>
        </div>
      </div>
    </div>
  );
}
