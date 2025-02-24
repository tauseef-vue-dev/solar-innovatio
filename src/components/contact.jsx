import React from "react";
import ContactDetails from "./contactUs/contactDetails";
import ContactForm from "./contactUs/contactForm";

export default function Contact() {
  return (
    <div className="conatiner mt-20 mx-auto flex flex-col items-center justify-center">
      <span className="text-[36px] font-semibold leading-[30px] text-[#363636] font-poppins">
        CONTACT US
      </span>
      <div className="bg-[#81BD48] h-1 w-28 mt-6 rounded"></div>
      <div className="grid grid-cols-3 gap-6 w-full mt-8">
        <div className="col-span-1 border border-[#DEDEDE] rounded-[9px] pl-7 pr-6 py-7 flex flex-col">
          <ContactDetails />
        </div>
        <div className="col-span-2 border border-[#DEDEDE] rounded-[9px] px-7 pt-7 pb-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
