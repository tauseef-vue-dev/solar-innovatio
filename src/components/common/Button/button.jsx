import React from "react";

export default function Button({ btnText }) {
  return (
    <div>
      <button className="bg-[#86BE3F] px-[22px] py-[14px] rounded-[3px] text-base font-normal leading-[12px] text-white">
        {btnText}
      </button>
    </div>
  );
}
