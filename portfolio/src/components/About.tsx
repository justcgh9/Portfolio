import React from "react";
import "../styles/about.css";
import { ContentChildrenProps } from "@/types";

const About: React.FC<ContentChildrenProps> = ({
  active,
}: ContentChildrenProps) => {
  return (
    <div className={"info " + (active ? "show" : "hide")} id="info-about">
      <div className="text">
        <p>
          I&apos;m a fun guy who loves diving into the world of web development
          and constantly learning new things...
        </p>
        <p>When I&apos;m not coding, you can usually find me speedcubing...</p>
      </div>
    </div>
  );
};

export default About;
