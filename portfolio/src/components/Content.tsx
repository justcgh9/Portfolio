import React from "react";
import About from "./About";
import PhotosCarousel from "./PhotosCarousel";
import '../styles/content.css'
import Portfolio from "./Portfolio";
import ComicBtn from "./ComicBtn";
import Contacts from "./Contacts";

export default function Content() {
    return <section className='content'>
        <About/>
        <PhotosCarousel/>   
        <Portfolio/>
        <Contacts/>
        <ComicBtn/>
    </section>
}