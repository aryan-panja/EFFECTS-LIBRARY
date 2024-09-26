import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    const navButtons = [
        { name: 'Home', link: '/' },
        { name: 'Components', link: '/components' },
        { name: 'Fonts', link: '/fonts' },
        { name: 'About Me', link: '/AboutMe' },
    ]
    return (
        <div className='flex justify-between pl-10 pr-10 h-16 items-center shadow-xl z-10 bg-black text-white'>
            <div className='text-2xl font-bold'>
                EFFECTS-LIBRARY
            </div>
            <div className='flex gap-x-16 text-lg font-semibold'>
                {
                    navButtons.map((i, index) => (
                        <Link
                            to={i.link}
                            key={index}
                        >
                            {i.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
