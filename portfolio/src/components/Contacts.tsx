import ContactLink from "./ContactLink";
import "../styles/contacts.css";
import Git from "../assets/photos/simple-icons_github.svg";
import Telegram from "../assets/photos/simple-icons_telegram.svg";
import Email from "../assets/photos/simple-icons_gmail.svg";
import Insta from "../assets/photos/simple-icons_instagram.svg";
import { ContentChildrenProps } from "@/types";

export default function Contacts({ active }: ContentChildrenProps) {
  return (
    <div className={"info " + (active ? "show" : "hide")} id="info-contact">
      <ul className="contacts-list">
        <ContactLink
          id={"gh-link"}
          refs={"https://github.com/justcgh9"}
          src={Git}
          alt={"GitHub"}
          username={"justcgh9"}
        />
        <ContactLink
          id={"tg-link"}
          refs={"https://t.me/Eth3ri4l"}
          src={Telegram}
          alt={"telegram"}
          username={"@Eth3ri4l"}
        />
        <ContactLink
          id={"email"}
          refs={"mailto:a.kabardiyadi@innopolis.university"}
          src={Email}
          alt={"Email"}
          username={"a.kabardiyadi@innopolis.university"}
        />
        <ContactLink
          id={"instagram"}
          refs={"https://www.instagram.com/justcgh9/"}
          src={Insta}
          alt={"Instagram"}
          username={"@justcgh9"}
        />
      </ul>
    </div>
  );
}
