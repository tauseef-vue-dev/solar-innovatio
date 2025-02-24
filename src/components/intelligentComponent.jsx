import React from "react";
import bgImage from "../assets/cards-bg.png";
import dollarImg from "../assets/dollar-icon.svg";

export default function IntelligentComponent() {
  const cardItems = [
    {
      id: 1,
      title: "Versatile",
      description:
        "Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie.",
    },
    {
      id: 2,
      title: "Economia Circolare",
      description:
        "Ricarica i tuoi dispositivi o l’auto elettrica con la tua elettricità. Con un veicolo elettrico medio puoi coprire fino a 29.000 km all’anno, a emissioni zero",
    },
    {
      id: 3,
      title: "Automatizzato",
      description:
        "Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi XX sensori regolano l'esposizione in base alle condizioni atmosferiche.		",
    },
    {
      id: 4,
      title: "Connesso",
      description:
        "Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta",
    },
    {
      id: 5,
      title: "Con Accumulo",
      description:
        "Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di notte o in giornate nuvolose",
    },
    {
      id: 6,
      title: "Resistente",
      description:
        "Il sistema è rivestito in poliurea, un materiale protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti, graffi",
    },
  ];
  return (
    <div
      className="bg-cover bg-center py-[45px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="conatiner">
        <div className="flex flex-col  gap-6 text-white items-center justify-center mx-auto max-w-[947px]">
          <span className="text-center text-[36px] font-semibold leading-[30px] text-white font-poppins">
            Connesso, Intelligente, Resistente
          </span>
          <div className="bg-white h-1 w-28 mt-2 rounded mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[76px] mt-16 mx-auto max-w-[1320px]">
          {cardItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <img className="h-[61px]" src={dollarImg} alt="" />
              <div className="flex flex-col">
                <p className="text-[20px] font-bsemibold text-white mb-2.5">
                  {item.title}
                </p>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
