import React from "react";
import About from "./About";
import PhotosCarousel from "./PhotosCarousel";
import '../styles/content.css'

export default function Content() {
    return <section className='content'>
        <About/>
        <PhotosCarousel></PhotosCarousel>
    </section>
}