// import React, { useEffect, useState } from 'react';
// import pic1 from '@/assets/dishes/1.jpg';
// import pic2 from '@/assets/dishes/2.jpg';
// import pic3 from '@/assets/dishes/3.jpg';
// import pic4 from '@/assets/dishes/4.jpg';

// export const Test = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const pics = [pic1, pic2, pic3, pic4];

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => (document.body.style.overflow = 'auto');
//   }, []
//   )

//   // Handler to move to the next image
//   const handleNext = () => {
//     if (currentIndex < pics.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   // Handler to move to the previous image
//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className='relative h-[100vh] w-[100vw] flex items-center justify-center bg-[#17232A]'>
//       <div className='flex items-center justify-center overflow-hidden relative w-full h-full'>
//         {pics.map((pic, index) => (
//           <div
//             key={index}
//             className={`absolute transition-all duration-700 ease-in-out 
//               ${index === currentIndex ? 'scale-110' : 'scale-90 blur-[4px] opacity-70'}
//             `}
//             style={{
//               transform: `translateX(${(index - currentIndex) * 120}%) rotate(${index === currentIndex ? 45 : 0}deg)`,
//             }}
//           >
//             <img src={pic} alt={`Dish ${index + 1}`} className='rounded-full object-cover' />
//           </div>
//         ))}

//         {/* Overlay Text */}
//         <div className='absolute bottom-16 text-center text-white'>
//           <h1 className='text-5xl font-bold'>RESTAURANT</h1>
//           <button className='mt-4 px-6 py-2 bg-white text-black rounded-full font-medium shadow-lg hover:bg-gray-200'>
//             See more
//           </button>
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className='absolute left-8 text-white bg-gray-700 p-3 rounded-full opacity-80 hover:bg-gray-600 disabled:opacity-50'
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex === pics.length - 1}
//           className='absolute right-8 text-white bg-gray-700 p-3 rounded-full opacity-80 hover:bg-gray-600 disabled:opacity-50'
//         >
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };


import React, { useEffect } from 'react'

export const Test = () => {

  const data = [
    {
      "createdAt": "2024-10-29T23:20:44.431Z",
      "heading": "How Artificial Intelligence is Transforming Healthcare Today",
      "content": "Artificial Intelligence is revolutionizing healthcare, from enhancing diagnostics to improving patient outcomes. AI-driven tools help doctors analyze medical images, monitor patient health, and predict disease trends.",
      "id": "1"
    },
    {
      "createdAt": "2024-10-30T01:43:55.448Z",
      "heading": "10 Ways to Make Your Home More Eco-Friendly",
      "content": "Going green at home doesn't have to be difficult. From using energy-efficient appliances to composting kitchen waste, there are many simple ways to reduce your carbon footprint. This articl",
      "id": "2"
    },
    {
      "createdAt": "2024-10-30T03:03:32.635Z",
      "heading": "Understanding Blockchain Technology and Its Applications",
      "content": "Blockchain technology is more than just the foundation of cryptocurrency. It's a decentralized, secure system that can transform industries like finance, healthcare, and supply chain management. ",
      "id": "3"
    },
    {
      "createdAt": "2024-10-29T15:01:31.841Z",
      "heading": "A Beginner’s Guide to Investing in the Stock Market",
      "content": "Investing in the stock market can be intimidating for beginners, but understanding the basics is the first step. This guide covers essential terms, investment strategies, and tips to help new inve",
      "id": "4"
    },
    {
      "createdAt": "2024-10-30T08:03:30.315Z",
      "heading": "The Rise of Remote Work and Its Future Implications",
      "content": "Remote work has gained immense popularity, changing the traditional office landscape. With its flexibility and freedom, many employees are thriving outside of the office. This article discusses ",
      "id": "5"
    },
    {
      "createdAt": "2024-10-29T23:49:34.046Z",
      "heading": "Tips for Maintaining Mental Health in the Digital Age",
      "content": "With the rise of digital connectivity, maintaining mental health has become increasingly challenging. This article provides tips on managing screen time, setting boundaries with technologyd.",
      "id": "6"
    },
    {
      "createdAt": "2024-10-30T00:32:11.450Z",
      "heading": "Exploring the Benefits of Plant-Based Diets",
      "content": "A plant-based diet offers numerous health benefits, from reducing the risk of chronic diseases to improving digestion. This article discusses the advantages of plant-",
      "id": "7"
    },
    {
      "createdAt": "2024-10-29T19:44:41.788Z",
      "heading": "The Impact of Social Media on Personal Relationships",
      "content": "Social media has transformed the way we communicate, but it also presents challenges for personal relationships. This article explores both the positive and negative effects of ",
      "id": "8"
    },
    {
      "createdAt": "2024-10-30T03:17:11.763Z",
      "heading": "5 Essential Skills for Thriving in a Tech-Driven World",
      "content": "In an era dominated by technology, skills like digital literacy and adaptability are more important than ever. This article highlights five key skills that can help individuals thrive in today’s",
      "id": "9"
    },
    {
      "createdAt": "2024-10-30T05:02:21.849Z",
      "heading": "Traveling on a Budget: Top Tips for Affordable Adventures",
      "content": "Travel doesn’t have to break the bank. This article offers practical tips for budget-friendly adventures, covering everything from finding affordable flights to",
      "id": "10"
    }
  ]


  useEffect(() => {

    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundColor = 'white';
    }
  }, [])

  return (
    <div>
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20 columns-2 md:columns-3 lg:columns-4 xl:columns-4 2xl:columns-4 mt-10 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="mb-4 pb-4 bg-[#f5e5e4] rounded-[20px] shadow-lg break-inside-avoid"
          >
            <h2
              className="p-4 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-ellipsis overflow-hidden bg-[#ff5349] text-[#4b4343] rounded-[20px]"
            >
              {item.heading}
            </h2>
            
            <p
              className="px-4 pt-5 text-black font-semibold text-sm lg:text-base overflow-hidden"
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>

  )
}
