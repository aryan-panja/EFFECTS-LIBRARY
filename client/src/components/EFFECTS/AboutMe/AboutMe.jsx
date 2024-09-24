import React from 'react'

export const AboutMe = () => {
  return (
    <div className='w-full min-h-screen'>
        <div className='relative w-full'>
            <div className='absolute top-10 left-20 font-extrabold text-8xl z-10'>
                <p>I REALLY</p>
                <p>LOVE TO</p>
                <p>TALK WITH</p>
                <p>PEOPLE</p>
            </div>
            <div className='absolute right-20 top-24 border'>
                <div className='w-[1000px] h-[500px]'>
                    <img src="https://picsum.photos/1000/500" className='' />
                </div>
                <div className="flex space-x-5 w-full absolute mt-10">    {/* Why i have to put the absolute here also if i have put the absoulte on the parent tag? */}
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
  )
}
