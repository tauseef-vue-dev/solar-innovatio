import React from "react";
import bgImage from "../assets/bg-image.png";

export default function HeroSection() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container text-center">
        <div className="flex flex-col gap-6 mx-auto max-w-[947px]">
          <h1 className="text-[48px] md:text-[64px] font-bold leading-tight">
            Il tuo accesso al sole
          </h1>
          <p className="text-[20px] md:text-[24px] font-medium leading-[33px]">
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
            assenza di tetto. La tua fonte d'energia, gratuita e sostenibile
          </p>
        </div>
      </div>
    </div>
  );
}
