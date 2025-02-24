import React from "react";
import bgImage from "../assets/cards-bg.png";
import Card from "./common/Card/card";
import Title from "./common/Title/title";

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
      "Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi XX sensori regolano l'esposizione in base alle condizioni atmosferiche.",
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

export default function IntelligentComponent() {
  return (
    <div
      className="bg-cover bg-center py-[45px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="flex flex-col gap-6 text-white items-center justify-center mx-auto max-w-[947px]">
          <Title text="Connesso, Intelligente, Resistente" color="#FFFFFF" />
          <div className="bg-white h-1 w-28 mt-2 rounded mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[76px] mt-16 mx-auto max-w-[1320px]">
          {cardItems.map(({ id, title, description }) => (
            <Card key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
}
