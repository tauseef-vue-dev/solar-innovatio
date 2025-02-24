import React from "react";
import AverlogBg from "../assets/averlo-bg.png";

export default function Averlo() {
  return (
    <div
      className="flex items-center justify-between container py-[33px] mt-28 bg-cover bg-center"
      style={{
        backgroundImage: `url(${AverlogBg})`,
      }}
    ></div>
  );
}
