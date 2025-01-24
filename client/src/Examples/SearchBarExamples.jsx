import React from 'react'
import { CodeSnippet } from '@/components/CodeSnippet';
import { SearchBar } from '@/components/EFFECTS/SearchBar/SearchBar'
import { Preview } from '@/components/Preview';
import { Wrapper } from '@/components/Wrapper';

export const SearchBarExamples = () => {

  const recents = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
  ];

  const data = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Canada', code: 'CA' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Australia', code: 'AU' },
  ]

  return (

    <Wrapper>
      <div className="mx-auto">
        <h1 className="text-xl font-bold mb-4">Search Bar</h1>
        <p className="my-8 text-zinc-300 roboto-regular">
          Here is the SearchBar example. Now apply searchbar functionality of recents searched items like you see in Youtube with this element.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">

        <p className="my-8 roboto-regular">
          Example - Here is the search bar where you can define the shortcut that you have given to focus on the search bar as well as the placeholder option.
        </p>

        <Preview>
          <SearchBar
            className={'text-sm rounded-3xl bg-[#191919] border-[#191919] text-white'}
            id='search-bar'
            searchData={data}
            searchRecents={recents}
            placeholder='Search here......'
            shortcutKey={'⌘+K'}  // Custom shortcut key
            iconColor='#fff'
          />
        </Preview>

        {/* SyntaxHighlighter for JSX code display */}
        <CodeSnippet
          code={
            `
import { SearchBar } from '@/components/EFFECTS/SearchBar/SearchBar'  
`
          }
          heading='Import in React'
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/SearchBar/SearchBar.jsx'
        />

        <CodeSnippet
          code={`
<SearchBar
  className={'text-sm rounded-3xl bg-[#191919] border-[#191919] text-white'}
  id='search-bar'
  searchData={data}
  searchRecents={recents}
  placeholder='Search here......'
  shortcutKey={'⌘+K'}  // Custom shortcut key
  iconColor='#fff'
/>
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/SearchBar/SearchBar.jsx'
        />

        <p className="my-8 text-zinc-300 roboto-regular">
          Example - Here is the search bar where you can send the props of search data and recent history as we can see in Youtube or Google searchbar.
        </p>

        <Preview>
          <SearchBar searchData={data} searchRecents={recents} iconColor={'#000'} />
        </Preview>

        <CodeSnippet
          code={`
const recents = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
  ];

<SearchBar searchData={data} searchRecents={recents} iconColor={'#000'} />
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/SearchBar/SearchBar.jsx'
        />

        <p className="my-8 roboto-regular">
          Example - Here is the search bar where you are just sending the search data and the search input will be searched from this data.
        </p>

        <Preview>
          <SearchBar searchData={data} iconColor={'#000'} />
        </Preview>

        <CodeSnippet
          code={`
<SearchBar searchData={data} iconColor={'#000'} />
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/SearchBar/SearchBar.jsx'
        />


      </div>
    </Wrapper>

  )
}
