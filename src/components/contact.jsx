import React from "react";
import ContactDetails from "./contactUs/contactDetails";
import ContactForm from "./contactUs/contactForm";
import Title from "./common/Title/title";

export default function Contact() {
  return (
    <div className="container">
      <div className=" mt-20 mx-auto flex flex-col items-center justify-center">
        <Title text="CONTACT US" color="#363636" />
          <div className="bg-[#81BD48] h-1 w-28 mt-6 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
          <div className="col-span-1 md:col-span-1 border border-[#DEDEDE] rounded-[9px] pl-7 pr-6 py-7 flex flex-col">
            <ContactDetails />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 border border-[#DEDEDE] rounded-[9px] px-7 pt-7 pb-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
