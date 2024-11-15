import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TextShine } from '../EFFECTS/TextAnimations/TextShine'
import { SearchBar } from '../EFFECTS/SearchBar/SearchBar'

export const NavBar = () => {

    const navigate = useNavigate();

    const searchData = [
        { name: 'Parallax Image' },
        { name: 'Parallax Image Button' },
        { name: 'OnHover Big Rectangles' },
        { name: 'Dynamic TextArea' },
        { name: 'Search Bar' },
        { name: 'View More' },
        { name: 'Calendar' },
        { name: 'Text Shine' },
        { name: 'Text Aurora' },
        { name: 'Text Form' },
        { name: 'Wave Text' },
        { name: 'Bouncy Reveal' },
    ];

    const recents = searchData;

    const handleSearchSelect = (item) => {
        console.log(item);
        const route = `/components/${item.replace(/\s+/g, "-").toLowerCase()}`;
        navigate(route);
    };


    const navButtons = [
        { name: 'Components', link: '/components/parallax-image' },
        { name: 'CSS', link: '/css-effects' },
        { name: 'Fonts', link: '/fonts' },
    ]
    return (
        <div className='sticky top-0 flex justify-between px-10 items-center z-10 bg-black text-white' style={{ borderBottom: '1px solid #333' }}>
            <Link to={'/'} className='text-2xl font-bold'>
                <TextShine className={'font-bold text-xl tracking-wider'} style={{ animationDuration: '6s' }}>
                    EFFECTS-LIBRARY
                </TextShine>
            </Link>
            <div className='flex space-x-10'>
                <div className='flex gap-x-4 text-lg items-center'>
                    {
                        navButtons.map((i, index) => (
                            <Link
                                className='font-mono'
                                to={i.link}
                                key={index}
                            >
                                {i.name}
                            </Link>
                        ))
                    }
                </div>
                <div className=''>
                    <SearchBar className={'text-sm rounded-3xl w-full bg-[#191919] border-[#191919] text-white font-mono'}
                        searchRecents={recents}  // Pass recents as a prop
                        searchData={searchData}  // Pass searchData as a prop
                        onSelect={handleSearchSelect}  // Custom handler for routing
                    />
                </div>
            </div>
        </div>
    )
}
