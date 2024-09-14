import React from 'react';

export const StackedCards = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='relative w-72 h-48 group'>
                {/* Card One - Moves to the top */}
                <div className='absolute w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center text-xl text-gray-800 top-4 left-4 z-10 transition-all duration-300 group-hover:-translate-y-56 group-hover:-translate-x-2 group-hover:z-20'>
                    Card One
                </div>
                {/* Card Two - Stays in the middle */}
                <div className='absolute w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center text-xl text-gray-800 top-2 left-2 z-20 transition-all duration-300 group-hover:translate-y-0'>
                    Card Two
                </div>
                {/* Card Three - Moves to the bottom */}
                <div className='absolute w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center text-xl text-gray-800 top-0 left-0 z-30 transition-all duration-300 group-hover:translate-y-56 group-hover:translate-x-2 group-hover:z-20'>
                    Card Three
                </div>
            </div>
        </div>
    );
};
