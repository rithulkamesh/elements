import React from "react";
import { Children } from "../util/interface";

interface Props extends Children {
  href?: string;
}

const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <a
      className={`p-5 border-solid border-2 border-white hover:text-black hover:bg-white duration-75 rounded-sm`}
      href={href ? href : ""}
    >
      {children}
    </a>
  );
};

export default Button;
