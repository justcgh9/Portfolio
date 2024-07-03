import React, { useRef} from "react";
import {PortfolioCardProps} from "../types"
import giftImg from '../assets/photos/gift_asssistant_bot.svg'
import matrixImg from '../assets/photos/matrix.svg'
import aImg from '../assets/photos/A4A.svg'
import jsonImg from '../assets/photos/json2video.svg'
import PortfolioCard from "./PortfolioCard";
import '../styles/portfolio.css'
import { ContentChildrenProps } from "../types";

const Portfolio: React.FC<ContentChildrenProps> = function ({active}: ContentChildrenProps) {

    const myProjects = [
        {
            title: 'Gift Bot Asssistant',
            img: giftImg,
            alt: 'Gift Bot Image',
            description: 'Gift Assistant is a telegram bot with AI support which helps to choose a gift based on different details.'
        },
        {
            title: 'MatriKZ',
            img: matrixImg,
            alt: 'Matrix Image',
            description: 'Mobile application for matrix operations, which include Inverses, Systems of linear equations, etc.'
        },
        {
            title: 'A4A',
            img: aImg,
            alt: 'A4A image',
            description: 'AI powered service that processes exam sheets and classifies questions by topics.'
        },
        {
            title: 'Json2Video',
            img: jsonImg,
            alt: 'Json2Video Image',
            description: 'Web application devoted to converting json formatted data to videos.'
        }   
    ]


    return <div id="info-portfolio" className={"info " + (active ? "show" : "hide")} > 
        <div className="portfolio_content">{myProjects.map((item) => <PortfolioCard title={item.title} description={item.description} img={item.img} alt={item.alt}/>)}</div>
    </div>
}

export default Portfolio;