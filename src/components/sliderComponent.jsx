import React from "react";
import Card1Cover from "../assets/card-1-cover.png";
import Card2Cover from "../assets/card-2-cover.png";
import Slider from "./common/Slider/slider";
import Title from "./common/Title/title";



export default function SliderComponent() {
  return (
    <div className="container">
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="mx-auto flex flex-col items-center justify-center">
        <Title text="Scegli il tuo SIRE" color="#363636" />
          <div className="bg-[#81BD48] h-1 w-28 mt-6 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-20">
          <Slider image={Card1Cover} title="S.I.R.E Direct" />
          <Slider image={Card2Cover} title="S.I.R.E Full" />
        </div>
      </div>
    </div>
  );
}
