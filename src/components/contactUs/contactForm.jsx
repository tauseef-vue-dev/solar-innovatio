import React from "react";
import ExInput from "./../common/Input/input";
import Button from "./../common/Button/button";

export default function ContactForm() {
  const inputs = [
    { id: 1, type: "text", placeholder: "First Name" },
    { id: 2, type: "text", placeholder: "Last Name" },
    { id: 3, type: "text", placeholder: "Email" },
    { id: 4, type: "textarea", placeholder: "Your Message", rows: 5 },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {inputs.slice(0, 2).map((input) => (
          <div key={input.id} className="col-span-1">
            <ExInput type={input.type} placeholder={input.placeholder} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mt-4">
        <ExInput type={inputs[2].type} placeholder={inputs[2].placeholder} />
      </div>
      <div className="grid grid-cols-1 mt-4">
        <ExInput
          type={inputs[3].type}
          placeholder={inputs[3].placeholder}
          rows={inputs[3].rows}
        />
      </div>
      <div className="mt-4 flex items-end justify-end">
        <Button btnText="Send" />
      </div>
    </div>
  );
}
