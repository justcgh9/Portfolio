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
        const idResponse = await fetch(idUrl) as Response;
        if (!idResponse.ok) throw new Error('Failed to fetch comic ID');
        const comicId = await idResponse.text() as string;

        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
        const comicResponse = await fetch(comicUrl) as Response;
        if (!comicResponse.ok) throw new Error('Failed to fetch comic details');
        const comicData = await comicResponse.json() as ComicData;
        console.log(comicData)

        document.getElementById('comic-title')!.textContent = comicData.safe_title;
        console.log(comicData.safe_title);
        const comicImg = document.getElementById('comic-img') as HTMLImageElement;
        comicImg.src = comicData.img;
        comicImg.alt = comicData.alt;
        const uploadDate = new Date(comicData.year, comicData.month - 1, comicData.day);
        document.getElementById('comic-date')!.textContent = uploadDate.toLocaleDateString();

    } catch (error) {
        console.error(error);
    } finally {
        loadingCircle.style.display = 'none';
    }
}

fetchComic();

