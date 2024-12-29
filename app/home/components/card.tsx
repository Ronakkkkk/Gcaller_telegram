import React from "react";
import Image from "next/image";

interface CardProps {
  imageurl: string;
  smallText: string;
  biggerText: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ imageurl, smallText, biggerText, value }) => {
  return (
    <div className=" bg-[#9747FF1A] h-[159px] w-full rounded-[12px] border border-white/30 gap-4 flex flex-col">
      <div className="flex justify-start px-3 py-3 gap-2 items-center">
        <Image src={imageurl} width={24} height={24} style={{ objectFit: "contain" }} alt="Phone" />

        <div className=" flex flex-col text-white leading-6 font-medium  ">
          <span className=" text-xs">{smallText}</span>
          <span className="text-[20px]">{biggerText}</span>
        </div>
      </div>
      <div className=" px-3 text-[44px] text-white font-medium leading-[66px]">{value}</div>
    </div>
  );
};

export default Card;
