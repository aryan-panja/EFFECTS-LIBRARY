import React, { useState } from 'react';
import test1 from "@/assets/photos/1.jpg";

// https://chatgpt.com/share/66f46834-4048-8012-91bd-1773ec7f0c3f

export const ViewMore = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className='h-[400px] w-[300px] rounded-xl relative overflow-hidden'>
      <img
        src={test1}
        alt="Description of the image"
        className={`h-full w-full inset rounded-xl absolute object-cover ${active ? 'scale-105 blur-sm' : 'scale-100'} duration-1000 transition-all`} />
      <div
        className={`absolute bg-white bottom-0 w-full rounded-t-lg
        ${active ? 'h-52' : 'h-10'} duration-1000 transition-all cursor-pointer`}
        onClick={toggleActive}
      >
        <h1 className='text-center text-lg font-bold mt-2 text-black'>View More</h1>
        <p className={`ml-2 mr-2 mt-4 flex items-center font-semibold justify-center opacity-0 duration-1000 transition-opacity text-black ${active && 'opacity-100'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quia? Saepe illum natus esse minima sunt cupiditate sequi dignissimos iure enim error. Vitae sapiente delectus blanditiis atque omnis provident a.</p>
      </div>
    </div>
  );
};
