"use client";
import React from "react";
import NavigationElement from "./NavigationElement";
import "../styles/navigation.css";
import { NavigationProps } from "@/types";

const Navigation: React.FC<NavigationProps> = ({
  setActive,
}: NavigationProps) => {
  const items = ["About me", "Photos", "Portfolio", "Contact Me"];

  return (
    <section className="navigation">
      <nav className="menu">
        <ul>
          {items.map((item) => (
            <NavigationElement
              key={item}
              text={item}
              setActive={setActive}
            ></NavigationElement>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
