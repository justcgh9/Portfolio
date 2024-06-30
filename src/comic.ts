import { formatDistanceToNow } from 'date-fns';

interface ComicData {
    alt: string;
    day: number;
    img: string;
    link: string;
    month: number;
    news: string;
    num: number;
    safe_title: string;
    title: string;
    transcript: string;
    year: number;
}

async function fetchComic(): Promise<undefined> {
    const email = 'a.kabardiyadi@innopolis.university';
    const idUrl = `https://fwd.innopolis.university/api/hw2?${new URLSearchParams({ email })}`;

    const loadingCircle = document.getElementById('loading-circle') as HTMLElement;
    loadingCircle.style.display = 'block'; 

    try {
        const idResponse: Response = await fetch(idUrl);
        if (!idResponse.ok) throw new Error('Failed to fetch comic ID');
        const comicId: string = await idResponse.text();

        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
        const comicResponse: Response = await fetch(comicUrl);
        if (!comicResponse.ok) throw new Error('Failed to fetch comic details');
        const comicData: ComicData = await comicResponse.json();
        console.log(comicData)

        const myTitle: HTMLElement | null = document.getElementById('comic-title')
        myTitle!.textContent = comicData.safe_title;
        console.log(comicData.safe_title);

        const comicImg: HTMLImageElement = document.getElementById('comic-img') as HTMLImageElement;
        comicImg!.src = comicData.img;
        comicImg!.alt = comicData.alt;

        const uploadDate: Date = new Date(comicData.year, comicData.month - 1, comicData.day);
        const myDate: HTMLElement | null = document.getElementById('comic-date')
        myDate!.textContent = uploadDate.toLocaleDateString();


        const myReleased : HTMLElement | null = document.getElementById('comic-release')
        myReleased!.textContent = "Released " + formatDistanceToNow(uploadDate);

    } catch (error) {
        console.error(error);
    } finally {
        loadingCircle.style.display = 'none';
    }
}

fetchComic();

