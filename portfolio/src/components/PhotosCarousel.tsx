import React, { useState } from 'react';
import img1 from '../assets/photos/img0.jpg';
import img2 from '../assets/photos/img1.jpg';
import img3 from '../assets/photos/img2.jpg';
import img0 from '../assets/photos/img3.jpg';
import Image from 'next/image';
import '../styles/photos.css'

const Photos: React.FC = () => {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const photos = [img0, img1, img2, img3];

  const prevPhoto = () => setPhotoIndex((photoIndex - 1 + photos.length) % photos.length);
  const nextPhoto = () => setPhotoIndex((photoIndex + 1) % photos.length);

  return (
    <div className="info hide" id="info-photo">
      <div className="gallery_cont">
        <div className="flex justify-center items-center gap-[2%] p-0">
          <button id="prev_btn" className="text-[#F9FBF8] text-[30px] w-[10%] border-none cursor-pointer bg-transparent h-fit-content m-0 z-30" onClick={prevPhoto}>&#10094;</button>
          <Image src={photos[photoIndex]} alt={`Photo ${photoIndex}`} className='w-[45%] rounded-[2%]' />
          <button id="next_btn" className="text-[#F9FBF8] text-[30px] w-[10%] border-none cursor-pointer bg-transparent h-fit-content m-0 z-30" onClick={nextPhoto}>&#10095;</button>
        </div>
        <div className="flex justify-center mt-[2%]">
          {photos.map((photo, index) => (
            <Image
              key={index}
              src={photo}
              alt={`Thumbnail ${index}`}
              className={`w-[10%] mx-[0.8%] cursor-pointer opacity-${photoIndex == index ? 100 : 60} transition-opacity duration-300 rounded-[2%]`}
              onClick={() => setPhotoIndex(index)}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
