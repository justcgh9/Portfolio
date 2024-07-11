import React from "react";
import { NavigationElementProps } from "@/types";
import "../styles/navigationElement.css";

const NavigationElement: React.FC<NavigationElementProps> = ({
  text,
  setActive,
}: NavigationElementProps) => {
  const func = (text: string) => {
    // console.log(text);
    setActive(text);
  };
  return (
    <li>
      <a
        onMouseEnter={() => func(text)}
        className="block font-league-gothic text-[5vmin] no-underline uppercase text-menu py-2 transform scale-95 opacity-70 transition-transform transition-opacity duration-550 ease-linear"
      >
        {text}
      </a>
    </li>
  );
};

export default NavigationElement;
