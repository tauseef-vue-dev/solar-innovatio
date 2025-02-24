import React from "react";

export default function UsefulLinks() {
  const usefulLinks = [
    {
      id: 1,
      label: "Help Center",
    },
    {
      id: 2,
      label: "Privacy Policy",
    },
    {
      id: 3,
      label: "Terms & Condition",
    },
  ];
  return (
    <div>
      <ul className="flex flex-col w-full lg:mt-[45px] mt-[20px] lg:gap-6 gap-3">
        {usefulLinks.map((item, index) => (
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
