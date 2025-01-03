import { CodeSnippet } from '@/components/CodeSnippet';
import { SearchBar } from '@/components/EFFECTS/SearchBar/SearchBar'
import { Wrapper } from '@/components/Wrapper';
import React from 'react'

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

        <p className="my-8 text-zinc-300 roboto-regular">
          Example - Here is the search bar where you can send the props of search data and recent history as we can see in Youtube or Google searchbar.
        </p>

        <SearchBar searchData={data} searchRecents={recents} iconColor={'#000'} />

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

        <SearchBar searchData={data} iconColor={'#000'} />

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
