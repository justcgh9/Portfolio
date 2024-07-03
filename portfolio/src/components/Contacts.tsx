import ContactLink from "./ContactLink";
import "./Contacts.css";
import Git from "../../assets/photos/simple-icons_github.svg";
import Telegram from "../../assets/photos/simple-icons_telegram.svg";
import Email from "../../assets/photos/simple-icons_gmail.svg";
import Insta from "../../assets/photos/simple-icons_instagram.svg";

export default function Contacts(){
    return (
        <div className="info hide" id="info-contact">
            <ul className="contacts-list">
                <ContactLink id={"gh-link"}
                    ref={"https://github.com/justcgh9"}
                    src={Git}
                    alt={"GitHub"}
                    username={"justcgh9"} />
                <ContactLink id={"tg-link"}
                    ref={"https://t.me/Eth3ri4l"}
                    src={Telegram}
                    alt={"telegram"}
                    username={"@Eth3ri4l"} />
                <ContactLink id={"email"}
                    ref={"mailto:a.kabardiyadi@innopolis.university"}
                    src={Email}
                    alt={"Email"}
                    username={"a.kabardiyadi@innopolis.university"} />
                <ContactLink id={"instagram"}
                    ref={"https://www.instagram.com/justcgh9/"}
                    src={Insta}
                    alt={"Instagram"}
                    username={"@justcgh9"} />
            </ul>
        </div>
    );
}