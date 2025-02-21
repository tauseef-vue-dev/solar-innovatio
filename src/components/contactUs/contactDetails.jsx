import React from "react";
import phoneIcon from "../../assets/phoneIcon.svg";
import mapIcon from "../../assets/map-icon.svg";
import emailIcon from "../../assets/emailIcon.svg";

export default function ContactDetails() {
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
    <div className="flex flex-col items-start">
      {contactDetails.map((contact) => (
        <div key={contact.id} className="flex gap-4 items-start pb-8">
          <img src={contact.icon} alt="icon" className="mt-1" />
          <span className="text-base text-[#666666] leading-[21px]">
            {contact.content}
          </span>
        </div>
      ))}
      <div className="border-t border-[#DEDEDE] w-full mt-2"></div>
      <span className="text-base text-[#363636] max-w-[242px] mt-5">
        We will get back to you within 24 hours. Or call us now.
      </span>
    </div>
  );
}
