import React from "react";

export default function InputField({ type, placeholder, rows }) {
  if (type === "textarea") {
    return (
      <textarea
        rows={rows || 5}
        className="border border-[#DEDEDE] h-[115px] rounded-[5px] w-full p-2 outline-none"
        placeholder={placeholder}
      />
    );
  }
  return (
    <input
      type={type}
      className="border border-[#DEDEDE] h-[45px] rounded-[5px] w-full p-2 outline-none"
      placeholder={placeholder}
    />
  );
}
