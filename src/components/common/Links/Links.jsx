import React from "react";

export default function Links({ links }) {

  return (
    <div>
      <ul className="flex flex-col w-full lg:mt-[45px] mt-[20px] lg:gap-6 gap-3">
        {links.map((item, index) => (
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
