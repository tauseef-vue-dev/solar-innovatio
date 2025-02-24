import React from "react";
import Card1Cover from "../assets/card-1-cover.png";
import Card2Cover from "../assets/card-2-cover.png";
import arrowRight from "../assets/arrow-right-icon.png";

export default function SliderComponent() {
  const card1 = [
    {
      id: 1,
      description:
        "Struttura meccanizzata in poliuera e sensoristica intelligente",
    },
    {
      id: 2,
      description: "Pannelli alta efficienza da 1KW",
    },
    {
      id: 3,
      description: "Inverter e conne ssione aII'impianto domestico",
    },
    {
      id: 4,
      description: "App di controllo e gesti one",
    },
  ];
  const cardsContent = [
    {
      id: 1,
      description: "Siste ma 2 kW con accumuIo.",
    },
    {
      id: 2,
      description: "Tempo di ricarica medio in estate is 5 ore e 30 minuti",
    },
    {
      id: 3,
      description: "Te mpo di scarica a 16A is 8 ore.",
    },
    {
      id: 4,
      description: "Autonomia dalla rete eIettrica 62Po.",
    },
    {
      id: 5,
      description:
        "Autonomia in caso di blackaut 2gg Immissio ne di CO2 da 1.022 kg a SOO kg annui",
    },
  ];
  return (
    <div className="conatiner">
      <div className=" mt-20 flex flex-col items-center justify-center">
        <div className="mx-auto flex flex-col items-center justify-center">
          <span className="text-[36px] font-semibold leading-[30px] text-[#363636]">
            Scegli il tuo SIRE
          </span>
          <div className="bg-[#81BD48] h-1 w-28 mt-6 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-20">
          <div className="col-span-1">
            <img src={Card1Cover} alt="" />
            <div className="bg-white shadow-custom p-6">
              <span className="text-[24px] font-semibold text-[#86BE3F]">
                S.I.R.E Direct
              </span>
              <div className="max-w-[413px]">
                {card1.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 py-2.5">
                    <img src={arrowRight} alt="" className=" mt-1" />
                    <span className="text-[16px] text-[#666666]">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="text-[16px] font-medium text-[#363636]">
                  CONSIGLIATO PER:
                </span>
              </div>
              <div className="max-w-[468px] mt-2">
                <ul className="pl-5">
                  {cardsContent.map((item) => (
                    <li
                      key={item.id}
                      className="text-[16px] text-[#666666] py-1"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                      }}
                    >
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <img src={Card2Cover} alt="" />
            <div className="bg-white shadow-custom p-6">
              <span className="text-[24px] font-semibold text-[#86BE3F]">
                S.I.R.E Full
              </span>
              <div className="max-w-[413px]">
                {card1.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 py-2.5">
                    <img src={arrowRight} alt="" className=" mt-1" />
                    <span className="text-[16px] text-[#666666]">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="text-[16px] font-medium text-[#363636]">
                  CONSIGLIATO PER:
                </span>
              </div>
              <div className="max-w-[468px] mt-2">
                <ul className="pl-5">
                  {cardsContent.map((item) => (
                    <li
                      key={item.id}
                      className="text-[16px] text-[#666666] py-1"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                      }}
                    >
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
