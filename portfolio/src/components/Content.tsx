"use client";
import React from "react";
import About from "./About";
import PhotosCarousel from "./PhotosCarousel";
import "../styles/content.css";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import { ContentProps } from "@/types";

export default function Content({ active }: ContentProps) {
  return (
    <section className="content">
      <About active={active === "About me"} />
      <PhotosCarousel active={active === "Photos"} />
      <Portfolio active={active === "Portfolio"} />
      <Contacts active={active === "Contact Me"} />
    </section>
  );
}
