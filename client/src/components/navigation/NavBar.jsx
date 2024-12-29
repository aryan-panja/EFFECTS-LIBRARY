import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TextShine } from '../EFFECTS/TextAnimations/TextShine'
import { SearchBar } from '../EFFECTS/SearchBar/SearchBar'

export const NavBar = () => {

    const navigate = useNavigate();

    const searchData = [
        {name: 'Home'},
        { name: 'Parallax Image' },
        { name: 'Parallax Image Button' },
        { name: 'OnHover Big Rectangles' },
        { name: 'Dynamic TextArea' },
        { name: 'Search Bar' },
        { name: 'View More' },
        { name: 'Rating' },
        { name: 'Dropdown' },
        { name: 'Rolling Animation' },
        // { name: 'Calendar' },
        { name: 'Text Shine' },
        { name: 'Text Aurora' },
        { name: 'Text Form' },
        { name: 'Wave Text' },
        { name: 'Bouncy Reveal' },
    ];

    const recents = searchData;

    // on alt + f user can search on searchbar
    useEffect(() => {
        const handleKeyDown = (e) => {

            if (e.ctrlKey && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                document.getElementById('search-bar').focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleSearchSelect = (item) => {
        if(item === 'Home') {
            navigate('/');
            return;
        }
        const route = `/components/${item.replace(/\s+/g, "-").toLowerCase()}`;
        navigate(route);
    };


    const navButtons = [
        { name: 'Components', link: '/components/parallax-image' },
        { name: 'CSS', link: '/css-effects' },
        { name: 'Fonts', link: '/fonts' },
    ]
    return (
        <div className='sticky top-0 flex justify-between px-10 items-center z-10 bg-black text-white pixelify-sans-text' style={{ borderBottom: '1px solid #333' }}>
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
                                to={i.link}
                                key={index}
                            >
                                {i.name}
                            </Link>
                        ))
                    }
                </div>
                <div className=''>
                    <SearchBar className={'text-sm rounded-3xl w-full bg-[#191919] border-[#191919] text-white'}
                        id='search-bar'
                        searchRecents={recents}  // Pass recents as a prop
                        searchData={searchData}  // Pass searchData as a prop
                        onSelect={handleSearchSelect}  // Custom handler for routing
                        iconColor='#fff'  // Custom icon color
                    />
                </div>
            </div>
        </div>
    )
}
