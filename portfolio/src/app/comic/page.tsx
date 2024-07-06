import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import { ComicData } from "@/types";
import "../../styles/comic.css";

async function fetchComic() {
  const email = "a.kabardiyadi@innopolis.university";
  const response = await axios.get(
    `https://fwd.innopolis.university/api/hw2?${new URLSearchParams({ email })}`,
  );
  const comicId = response.data;

  const comicResponse = await axios.get(
    `https://fwd.innopolis.university/api/comic?id=${comicId}`,
  );
  const comicData: ComicData = comicResponse.data;

  return comicData;
}

export default async function Comic() {
  const comics: ComicData = await fetchComic();
  const date = new Date(comics.year, comics.month - 1, comics.day);
  return (
    <div className="comic-main-container">
      <div id="rectangle"></div>
      <div id="comic-container">
        <h1 id="comic-title">{comics.safe_title}</h1>
        <div className="relative h-80" style={{ width: "45rem" }}>
          <Image id="comic-img" fill={true} src={comics.img} alt={comics.alt} />
        </div>
        <div className="comic-date-details">
          <p id="comic-date">{date.toLocaleDateString()}</p>
          <p id="comic-release">Released {formatDistanceToNow(date)} ago</p>
        </div>
      </div>
    </div>
  );
}
