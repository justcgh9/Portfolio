import Link from "next/link";
import "../styles/comicBtn.css";
import { ContentChildrenProps } from "@/types";

export default function ComicBtn({ active }: ContentChildrenProps) {
  return (
    <div className={"info " + (active ? "show" : "hide")} id="info-comic">
      <Link href="/comic">
        <button className="comic-btn" id="comic-btn">
          Click me!
        </button>
      </Link>
    </div>
  );
}
