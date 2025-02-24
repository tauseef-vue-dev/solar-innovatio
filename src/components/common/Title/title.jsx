import React from "react";

export default function Title({ text, color }) {
  return (
    <span
      className={`text-center text-[36px] font-semibold leading-[40px] font-poppins text-[${color}]`}
    >
      {text}
    </span>
  );
}
