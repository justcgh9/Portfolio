"use client"
import Image from "next/image";
import {formatDistanceToNow} from 'date-fns';
import axios from 'axios';
import { ComicData } from "@/types";
import { useEffect, useState } from "react";


export default function Comic() {

    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [imgSrc, setImgSrc] = useState<string>('')
    const [imgAlt, setImgAlt] = useState<string>('')
    const [released, setReleased] = useState<string>('')
    

    useEffect(() => {
        const fetchComic = async () => {
            try {
                const email = 'a.kabardiyadi@innopolis.university'
                const response = await axios.get(`https://fwd.innopolis.university/api/hw2?${new URLSearchParams({ email })}`)
                const comicId = response.data
        
                const comicResponse = await axios.get(`https://fwd.innopolis.university/api/comic?id=${comicId}`)
                const comicData: ComicData = comicResponse.data;
                const date = new Date(comicData.year, comicData.month - 1, comicData.day)
                
                setTitle(comicData.safe_title)
                setDate(date.toLocaleDateString())
                setReleased(formatDistanceToNow(date))
                setImgAlt(comicData.alt)
                setImgSrc(comicData.img)
            } catch(error) {
                console.error(error)
            }
            
        }

        fetchComic()
    },[])


    return <div className="min-h-screen flex justify-center items-center">
        <div id="comic-container">
            <h1 id="comic-title">{title}</h1>
            <div className="relative h-20">
                <Image id="comic-img" fill={true} src={imgSrc} alt={imgAlt}/>
            </div>
            <p id="comic-date">{date}</p>
            <p id="comic-release">Released {released}</p>
        </div>
    </div>
}