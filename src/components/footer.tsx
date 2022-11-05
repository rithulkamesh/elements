import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <hr className="text-white mx-5" />
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start">
              <a href={"https://rithul.dev"} target="blank">
                <Image
                  alt={"Profile Pic"}
                  className="rounded-full"
                  src="/profile.png"
                  width="40"
                  height="40"
                />
              </a>
            </div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              Designed by Rithul Kamesh for DiPS Elements on 5th Nov 2022
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;