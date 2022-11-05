import React from "react";
import { Children } from "../util/interface";

interface Props extends Children {
  disabled?: boolean;
  price: number;
  title: string;
}

const TicketCard = ({ disabled, children, price, title }: Props) => {
  return (
    <div
      id="plan"
      className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
    >
      <div id="title" className="w-full py-5 border-b border-gray-800">
        <h2 className="font-bold text-3xl text-white">{title}</h2>
        <h3 className="font-normal text-indigo-500 text-xl mt-2">${price}</h3>
      </div>
      <div id="content" className="">
        <div id="contain" className="leading-8 mb-10 text-lg font-light">
          {children}
          <div id="choose" className="w-full mt-10 px-6">
            <a
              className={`w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out ${
                !disabled && "hover:bg-indigo-600"
              } hover:text-white`}
            >
              {disabled ? "Sold Out" : "Choose"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
