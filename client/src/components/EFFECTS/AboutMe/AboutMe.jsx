import React, { useState, useEffect } from 'react'
import test1 from "@/assets/photos/1.jpg"
import { InfiniteSlider } from '@/components/core/infinite-slider'

export const AboutMe = () => {

    // State to manage the reverse value
    const [reverse, setReverse] = useState(false);
    // State to track previous scroll position
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    // Effect to handle scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > prevScrollPos) {
                // Scrolling down
                setReverse(false);
            } else {
                // Scrolling up
                setReverse(true);
            }

            // Update previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const skills = [
        'React',
        'Js',
        'C++',
        'C',
        'Python',
        'Machine Learning',
        'LLMs',
    ]

    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='relative'>
                <div className='relative w-full'>
                    <div className='absolute top-10 left-20 font-extrabold text-8xl z-10'>
                        <p>I REALLY</p>
                        <p>LOVE TO</p>
                        <p>TALK WITH</p>
                        <p>PEOPLE</p>
                    </div>
                    <div className='absolute right-20 top-24 border'>
                        <div className='w-[1000px] h-[500px]'>
                            <img src={test1} className='object-cover w-[1000px] h-[500px]' />
                        </div>
                        <div className="flex space-x-5 w-full absolute mt-10">
                            <div className='w-1/2 left-0'>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis impedit quam tenetur consequatur provident reiciendis, minima optio inventore facilis est excepturi tempora amet iure possimus, ut libero in aperiam.</h1>
                            </div>
                            <div className='w-1/2 right-0'>
                                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis sint, id voluptatum, reprehenderit eveniet perspiciatis numquam, blanditiis soluta deleniti quis exercitationem possimus iste quasi. Dolorem, molestiae. Rem, quis nesciunt.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-slate-200 pt-5 pb-5'>
                <InfiniteSlider gap={24} reverse={reverse}>
                    {skills.map((i, index) => (
                        <h1 className='text-4xl font-bold text-gray-500 mb-1' key={index}>{i}</h1>
                    ))}
                </InfiniteSlider>
            </div>
        </div>
    )
}
