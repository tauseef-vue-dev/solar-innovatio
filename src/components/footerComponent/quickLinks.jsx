import React from "react";

export default function QuickLinks() {
  const quickLinks = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Chi Siamo",
    },
    {
      id: 3,
      label: "S.I.R.E",
    },
    {
      id: 4,
      label: "SIRE Features",
    },
    {
      id: 5,
      label: "Why you need SIRE?",
    },
    {
      id: 6,
      label: "How it Works?",
    },
  ];
  return (
    <div>
      <ul className="flex flex-col w-full lg:mt-[45px] mt-[20px] lg:gap-6 gap-3">
        {quickLinks.map((item, index) => (
          <li key={index}>
            <a href={`#section-${item.id}`} className="text-base">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
