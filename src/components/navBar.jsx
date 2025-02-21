import React from "react";

export default function NavBar() {
  const navBarItems = [
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
    <nav className="h-[50px] bg-white flex items-center conatiner">
      <ul className="flex justify-between w-full ">
        {navBarItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#section-${item.id}`}
              className={`text-lg leading-[17px] font-poppins ${
                index === 0
                  ? "text-[#86BE3F] font-medium"
                  : "text-[#8A8888] font-normal"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <ul></ul>
    </nav>
  );
}
