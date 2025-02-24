import React from "react";
import arrowRight from "../../../assets/arrow-right-icon.png";

export default function Slider({ image, title }) {
  const card1Details = [
    {
      id: 1,
      description:
        "Struttura meccanizzata in poliuera e sensoristica intelligente",
    },
    { id: 2, description: "Pannelli alta efficienza da 1KW" },
    { id: 3, description: "Inverter e conne ssione aII'impianto domestico" },
    { id: 4, description: "App di controllo e gestione" },
  ];

  const cardsContent = [
    { id: 1, description: "Siste ma 2 kW con accumuIo." },
    {
      id: 2,
      description: "Tempo di ricarica medio in estate is 5 ore e 30 minuti",
    },
    { id: 3, description: "Te mpo di scarica a 16A is 8 ore." },
    { id: 4, description: "Autonomia dalla rete eIettrica 62Po." },
    {
      id: 5,
      description:
        "Autonomia in caso di blackaut 2gg Immissio ne di CO2 da 1.022 kg a SOO kg annui",
    },
  ];
  return (
    <div className="col-span-1">
      <img src={image} alt={title} />
      <div className="bg-white shadow-custom p-6">
        <span className="text-[24px] font-semibold text-[#86BE3F]">
          {title}
        </span>
        <div className="max-w-[413px]">
          {card1Details.map((item) => (
            <div key={item.id} className="flex items-start gap-3 py-2.5">
              <img src={arrowRight} alt="arrow" className="mt-1" />
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
          <ul className="pl-5 list-disc">
            {cardsContent.map((item) => (
              <li key={item.id} className="text-[16px] text-[#666666] py-1">
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
