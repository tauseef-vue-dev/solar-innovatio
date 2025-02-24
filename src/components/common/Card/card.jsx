import React from 'react'
import dollarImg from "../../../assets/dollar-icon.svg";


export default function Card({ title, description }) {
  return (
    <div className="flex gap-4">
    <img className="h-[61px]" src={dollarImg} alt="" />
    <div className="flex flex-col">
      <p className="text-[20px] font-semibold text-white mb-2.5">{title}</p>
      <p className="text-white text-sm">{description}</p>
    </div>
  </div>
  )
}
