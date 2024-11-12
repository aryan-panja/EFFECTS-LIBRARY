import React, { useState } from 'react'
import pic1 from '@/assets/anime/1.png';
import pic2 from '@/assets/anime/2.png';
import pic3 from '@/assets/anime/4.png';
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

export const Slider = () => {

    const images = [pic1, pic2, pic3];

    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    }

    return (
        <div className="w-full">
            {/* Slider Box */}
            <div className="flex justify-center items-center border-2 border-white mx-24">
                {/* Prev Button in Circle and left arrow */}
                <button onClick={handlePrev}>
                    <CircleArrowLeft color="white" className="cursor-pointer" size={50} />
                </button>

                {/* Image Section */}
                <img src={images[current]} alt="" className="h-[500px] transition-all ease-in-out duration-150" />

                {/* Next Button in Circle and right arrow */}
                <button onClick={handleNext}>
                    <CircleArrowRight color="white" className="cursor-pointer" size={50} />
                </button>

            </div>
        </div>
    )
}
