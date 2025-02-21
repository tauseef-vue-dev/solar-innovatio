import React from "react";
import subscribBg from "../assets/subscribe-bg.png";

export default function Subscribe() {
  return (
    <div
      className="flex items-center justify-between conatiner py-[33px] mt-28 bg-cover bg-center"
      style={{
        backgroundImage: `url(${subscribBg})`,
      }}
    >
      <div className="flex flex-col gap-3 text-white max-w-[503px] px-[36px]">
        <span className="text-[24px] font-semibold">
          Subscribe for Newsletter
        </span>
        <span className="text-base ">
          Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae
          orci maecenas tortor odio
        </span>
      </div>
      <div className="min-w-[427px]">
        <input
          type="text"
          className="border border-[#DEDEDE] h-[45px] rounded-full w-full p-2 outline-none bg-white"
          placeholder="Type Email here"
        />
      </div>
    </div>
  );
}
