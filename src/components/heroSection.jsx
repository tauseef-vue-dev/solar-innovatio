import React from "react";
import bgImage from "../assets/bg-image.png"; // Adjust the path if needed

export default function HeroSection() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="text-center flex flex-col gap-6 text-white item-center justify-center max-w-[947px]">
        <span className="text-[64px] font-bold leading-[56px]">
          Il tuo accesso al sole
        </span>
        <span className="text-[24px] font-medium leading-[33px]">
          Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
          assenza di tetto. La tua fonte d'energia, gratuita e sostenibile
        </span>
      </div>
    </div>
  );
}
