import Link from "next/link";
import "./ComicBtn.css";

export default function ComicBtn(){
    return (
    <div className="info hide" id="info-comic">
        <Link href="/comic">
        <button  className="comic-btn" id="comic-btn">Click me!</button>
        </Link>
    </div>
    );
}