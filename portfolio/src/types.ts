import { Dispatch, SetStateAction } from "react";

export interface NavigationElementProps {
  text: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export interface PortfolioCardProps {
  title: string;
  img: string;
  alt: string;
  description: string;
}

export interface NavigationProps {
  setActive: Dispatch<SetStateAction<string>>;
}

export interface ContentProps {
  active: string;
}

export interface ContentChildrenProps {
  active: boolean;
}

export interface ComicData {
  alt: string;
  day: number;
  img: string;
  link: string;
  month: number;
  news: string;
  num: number;
  safe_title: string;
  title: string;
  transcript: string;
  year: number;
}
