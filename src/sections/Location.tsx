import React from "react";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import { Children } from "../util/interface";

const Locations = () => {
  return (
    <div className="bg-black text-white w-screen pb-[20em]">
      <div className="text-6xl flex justify-center items-center pb-10">
        But <p className="text-red-500 pl-3">where?</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center md:pl-[15em] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-w-fit h-full sticky justify-center items-center">
          <LocationItem title="Where?" Icon={<FaLocationArrow size={25} />}>
            M. Chinnaswamy Stadium
            <br />
            Mahatma Gandhi Road
            <br /> Bengaluru, IN 560001
          </LocationItem>
          <LocationItem title="Who?" Icon={<FaPhone size={25} />}>
            +91 80 2222 2222
            <br />
            Mr. Ben Dover
          </LocationItem>
          <LocationItem title="Who but older?" Icon={<FaEnvelope size={25} />}>
            bendover@rithul.dev
            <br />
            Mr. Ben Dover
          </LocationItem>
        </div>
      </div>
    </div>
  );
};

interface LocationProps extends Children {
  title: string;
  Icon: React.ReactNode;
}

const LocationItem = ({ children, title, Icon }: LocationProps) => {
  return (
    <div className="mt-10">
      <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
        <div className="relative">
          <dt>
            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-white-500 text-white">
              {Icon}
            </div>
            <p className="ml-16 text-lg font-medium leading-6 text-white-900">
              {title}
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">{children}</dd>
        </div>
      </dl>
    </div>
  );
};

export default Locations;
