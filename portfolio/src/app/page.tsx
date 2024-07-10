import Cutaway from "@/components/Cutaway";
import "@/styles/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Awesome Portfolio website",
};

export default function Home() {
  return (
    <div className="body">
      <div id="rectangle"></div>
      <div className="main">
        <Cutaway />
      </div>
    </div>
  );
}
