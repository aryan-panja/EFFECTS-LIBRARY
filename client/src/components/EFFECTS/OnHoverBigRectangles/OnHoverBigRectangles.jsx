import React from 'react';

export const OnHoverBigRectangles = ({src}) => {
    return (
        <div
            className='group mt-10 border-2 h-[400px] w-[150px] bg-cover bg-center duration-700 ease-in-out 
                    sm:w-[200px] sm:hover:w-[300px]  /* Tablet and up */
                    md:w-[150px] md:hover:w-[400px] /* Desktop */
                    hover:w-[350px] hover:scale-105 rounded-xl relative shadow-lg transition-all'
            style={{ backgroundImage: `url(${src})` }}
        >
            {/* Text changes on hover */}
            <h1 className='absolute left-7 bottom-4 text-white font-bold origin-bottom-left -rotate-90 transition-opacity duration-500 group-hover:opacity-0'>
                ARYAN PANJA
            </h1>
            <h1 className='absolute left-7 bottom-4 text-white font-bold opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:delay-200'>
                ARYAN PANJA
            </h1>
        </div>
    );
};
