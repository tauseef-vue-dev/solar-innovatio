import React from "react";

export default function NavBar() {
  const navBarItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "Chi Siamo" },
    { id: 3, label: "S.I.R.E" },
    { id: 4, label: "SIRE Features" },
    { id: 5, label: "Why you need SIRE?" },
    { id: 6, label: "How it Works?" },
  ];

  return (
    <div className="container">
      <nav className="h-[50px] bg-white hidden lg:flex items-center">
        <ul className="flex justify-between w-full">
          {navBarItems.map(({ id, label }, index) => (
            <li key={id}>
              <a
                href={`#section-${id}`}
                className={`text-lg leading-[17px] font-poppins ${
                  index === 0
                    ? "text-[#86BE3F] font-medium"
                    : "text-[#8A8888] font-normal"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
