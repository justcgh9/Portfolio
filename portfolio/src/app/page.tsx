"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import PhotosCarousel from "@/components/PhotosCarousel";
import "@/styles/index.css"

export default function Home() {
  return (<div className="body">
      <div id='rectangle'></div>
      <Header></Header>
      <div>
        <Navigation></Navigation>
        
      </div>
      <Footer/>
    </div>
  );
}
