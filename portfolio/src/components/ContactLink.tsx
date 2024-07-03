import "./ContactLink.css";

interface ContactProps{
    id: string;
    ref: string;
    src: string;
    alt: string;
    username: string;
}

export default function ContactLink(props: ContactProps){
    return (
        <li>
            <a className="contact-link" id={props.id} href={props.ref} target="_blank" rel="noreferrer">
                <img src={props.src} alt={props.alt}/>
                <p className="username">{props.username}</p>
            </a>
        </li>
    );
}