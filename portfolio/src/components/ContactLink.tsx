import "../styles/contactLink.css";
import Image from "next/image";

interface ContactProps {
  id: string;
  refs: string;
  src: string;
  alt: string;
  username: string;
}

export default function ContactLink(props: ContactProps) {
  console.log(props.src);
  return (
    <li>
      <a
        className="contact-link"
        id={props.id}
        href={props.refs}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={props.src} alt={props.alt} />
        <p className="username">{props.username}</p>
      </a>
    </li>
  );
}
