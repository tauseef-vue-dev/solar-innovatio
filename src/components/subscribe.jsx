import React from "react";
import subscribBg from "../assets/subscribe-bg.png";

export default function Subscribe() {
  return (
    <div
      className="py-[33px] mt-28 bg-cover bg-center"
      style={{
        backgroundImage: `url(${subscribBg})`,
      }}
    >
      <div className="conatiner">
        <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between">
          <div className="flex flex-col gap-3 text-white max-w-[503px]">
            <span className="text-[24px] font-semibold">
              Subscribe for Newsletter
            </span>
            <span className="text-base ">
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci maecenas tortor odio
            </span>
          </div>
          <div className="w-full lg:max-w-[427px]">
            <input
              type="text"
              className="border border-[#DEDEDE] h-[45px] rounded-full w-full p-2 outline-none bg-white"
              placeholder="Type Email here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
