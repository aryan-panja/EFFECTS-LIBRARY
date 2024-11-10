import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SearchBar = ({ className, searchRecents, searchData }) => {
    const [searchWord, setSearchWord] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    const data = searchData || [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Åland Islands', code: 'AX' },
        { name: 'Albania', code: 'AL' },
        // Added few more items as per your request
        { name: 'Canada', code: 'CA' },
        { name: 'Brazil', code: 'BR' },
        { name: 'Australia', code: 'AU' },
    ];

    const recents = searchRecents || [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Åland Islands', code: 'AX' },
        { name: 'Albania', code: 'AL' },
    ];

    const showData = searchWord
        ? data.filter((i) =>
            i.name.toLowerCase().includes(searchWord.toLowerCase())
        )
        : [];

    // Handle click outside
    const handleClickOutside = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setIsFocused(false);
        }
    };

    // Add event listener for clicks outside of the search bar
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClick = (i, array) => {
        setSearchWord(`${array[i].name}`);
        setIsFocused(false); // Close the dropdown after selection
    };

    return (
        <div className='relative w-full'>
            <div ref={inputRef} className="relative w-full">
                <input
                    type="text"
                    className={cn('border-2 w-full rounded-xl p-2 pr-10 text-black', className)}
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    placeholder="Type to search..."
                />
                <Search className={`absolute ${isFocused ? 'top-[10px]' : 'top-[100%]'} right-2 text-black pointer-events-none duration-500`} />

                {/* The suggestion box */}
                {isFocused && (
                    <div className="mt-5 max-h-64 w-full rounded-lg border-2 shadow-lg bg-white text-black absolute top-full z-10 overflow-hidden">
                        {showData.length > 0 ? (
                            <ul className="flex flex-col gap-y-2 max-h-60 overflow-y-auto p-2">
                                {showData.map((item, index) => (
                                    <li key={index} className="cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2" onClick={() => handleClick(index, showData)}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        ) : searchWord.length<=0 ? (
                            <ul className="flex flex-col gap-y-2 max-h-60 overflow-y-auto p-2">
                                {recents.map((item, index) => (
                                    <li key={index} className="cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2" onClick={() => handleClick(index, recents)}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        )  : (
                            <div className='p-2 text-center'>Nothing found</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
