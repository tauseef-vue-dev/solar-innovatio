import React from "react";
import phoneIcon from "../../assets/phone-white.svg";
import mapIcon from "../../assets/map-white.svg";
import emailIcon from "../../assets/email-white.svg";

export default function ContactUs() {
  const contactDetails = [
    {
      id: 1,
      icon: mapIcon,
      content:
        "Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci",
    },
    {
      id: 2,
      icon: emailIcon,
      content: "email@email.com support@email.com",
    },
    {
      id: 3,
      icon: phoneIcon,
      content: "+29 98595 8998",
    },
  ];

  return (
    <div className="flex flex-col items-start lg:mt-[45px] mt-[20px] text-white">
      {contactDetails.map((contact) => (
        <div key={contact.id} className="flex gap-4 items-start lg:pb-8 pb-3">
          <img src={contact.icon} alt="icon" className="mt-1" />
          <span className="text-base">
            {contact.content}
          </span>
        </div>
      ))}
    </div>
  );
}
