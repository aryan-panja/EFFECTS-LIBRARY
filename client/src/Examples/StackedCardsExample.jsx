import { StackedCards } from '@/components/EFFECTS/StackedCards/StackedCards';
import React from 'react';

export const StackedCardsExample = () => {

    const data = [
        {
            card1: 'Card One',
            card2: 'Card Two',
            card3: 'Card Three'
        },
        
    ];

    return (
        <div className='w-full flex items-center justify-center min-h-screen gap-8'>
            {
                data.map((stack, index) => (
                    <StackedCards key={index} stack={stack} verticalGap={16} order={"start"} />
                ))
            }
        </div>
    );
};
