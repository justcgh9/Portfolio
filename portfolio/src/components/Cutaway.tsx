"use client";
import Navigation from "@/components/Navigation";
import Content from "@/components/Content";
import "@/styles/index.css";
import { useState } from "react";

export default function Cutaway() {
  const [active, setActive] = useState<string>("");
  return (
    <>
      <Navigation setActive={setActive}></Navigation>
      <Content active={active}></Content>
    </>
  );
}
