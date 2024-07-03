import React from "react";
import Image from "next/image";
import { PortfolioCardProps } from "../types";
import "../styles/portfolioCard.css";

export default function PortfolioCard({
  title,
  img,
  alt,
  description,
}: PortfolioCardProps) {
  return (
    <div className="card">
      <div className="card_title">
        <h3 className="titleoftheproject">{title}</h3>
      </div>
      <div className="card_content">
        <Image src={img} alt={alt} className="card_image" />
        <div className="card_description">{description}</div>
      </div>
    </div>
  );
}
