"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Content from "@/components/Content";
import "@/styles/index.css";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<string>("");

  return (
    <div className="body">
      <div id="rectangle"></div>
      <Header></Header>
      <div className="main">
        <Navigation setActive={setActive}></Navigation>
        <Content active={active}></Content>
      </div>
      <Footer />
    </div>
  );
}
