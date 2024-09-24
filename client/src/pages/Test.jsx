import React from 'react';
import { ScrollFadeIn } from '@/components/EFFECTS/ScrollFadeIn/ScrollFadeIn';

export const Test = () => {
  const colors = [
    'whitesmoke',
    'snow',
    'tomato',
    'lightgoldenrodyellow',
    'brown',
    'lightcoral',
    'darkseagreen',
    'chartreuse',
    'darkblue',
    'mistyrose',
    'saddlebrown',
    'darkkhaki',
    'gray',
    'cornflowerblue',
    'limegreen',
    'hotpink',
    'deeppink',
    'coral',
    'palevioletred',
    'springgreen',
    'palegoldenrod',
    'red',
    'papayawhip',
    'purple',
    'darkmagenta',
    'silver',
    'greenyellow',
    'oldlace',
    'navy',
    'lightsteelblue',
    'mediumvioletred',
    'darkgreen',
    'darksalmon',
    'mediumturquoise',
    'darkslategray',
    'blanchedalmond',
    'floralwhite',
    'lavender',
    'green',
    'wheat',
    'seagreen',
    'bisque',
    'mediumpurple',
    'lightgreen',
    'lightpink',
    'darkorange',
  ];

  return (
    <div className="p-4">
      {colors.map((color, index) => (
        <div className='flex'>
          <ScrollFadeIn duration={'400ms'} className={'w-1/12 text-2xl font-bold'}>
            1
          </ScrollFadeIn>

          <ScrollFadeIn key={index} duration={'2000ms'} className={'w-11/12'}>
            <div className='flex my-4 rounded space-x-10 w-full'>
              {
                [1,2,3,4,5,6,7,8,9,10].map((i) => (
                  <Cards color={color} />
                ))
              }
            </div>
          </ScrollFadeIn>
        </div>
      ))}
    </div>
  );
};


const Cards = ({color}) => {
  return (
    <div 
      className='h-32 w-36 border shadow-lg'
      style={{color: color, boxShadow: `0 0 10px ${color}`}}
    >

    </div>
  )
}