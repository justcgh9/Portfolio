import Image from "next/image";
import React from 'react';
import logo from '../assets/photos/dino.svg';

const Header: React.FC = () => {
  return (
    <header className='flex items-center pt-2 pb-0 px-2'>
      <Image className="w-[6%] h-[6%] rounded-[10%] m-0" src={logo} alt="Dinosaurrr..." />
      <div className="w-55 mx-auto mr-5 flex justify-center z-10">
        <h1 className="w-auto font-normal text-uppercase">Alisher Kabardiyadi</h1>
      </div>
    </header>
  );
}

export default Header;
