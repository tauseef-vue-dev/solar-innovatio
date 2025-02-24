import React from "react";
import dotsImage from "../assets/dots-icon.png";
import beforeImg from "../assets/before.svg";
import afterImg from "../assets/after.svg";

export default function Testimonials() {
  return (
    <div className="py-[100px] px-8 lg:px-16 relative">
      <div className="absolute left-[100px] hidden md:block">
        <img src={dotsImage} alt="" />
      </div>
      <div className="max-w-[1153px] mx-auto flex flex-col items-center justify-center mt-3">
        <span className="text-[36px] font-semibold leading-[30px] text-[#86BE3F] font-poppins">
          Chi Siamo
        </span>
        <div className="bg-[#81BD48] h-1 w-28 mt-6 rounded"></div>
        <div className="mt-10 max-w-[1120px] mx-auto">
          <p className="text-[17px] font-normal text-center text-[#666666]">
            Solar Innovatio è una startup innovativa italiana specializzata
            nella progettazione e realizzazione di sistemi fotovoltaici
            intelligenti. Solar Innovatio unisce alla decennale esperienza
            maturata nel panorama italiano nell'ambito delle soluzioni
            fotovoltaiche un approccio ingegneristico, innovativo, digitale alla
            principale fonte di energia rinnovabile.
          </p>
        </div>
        <div className="flex mt-8">
          <div className="pr-3 pt-1">
            <img src={beforeImg} alt="" />
          </div>
          <div className="max-w-[790px] mx-auto">
            <p className="text-[21px] font-medium text-center text-[#363636] italic">
              Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
              componente di una soluzione ingegneristica più completa che
              comprende sensoristiche avanzate e l'integrazione con i sistemi
              domotici di casa.
            </p>
          </div>
          <div className="pl-3 flex items-end">
            <img src={afterImg} alt="" />
          </div>
        </div>
        <div className="mt-28 flex items-center gap-3">
          <div className="border-1 w-4 border-[#86BE3F] rounded"></div>
          <span className="text-lg font-medium leading-[16px] text-[#86BE3F] font-poppins">
            Cristian Testoni
          </span>
          <div className="border-1 w-4 border-[#86BE3F] rounded"></div>
        </div>
      </div>
    </div>
  );
}
