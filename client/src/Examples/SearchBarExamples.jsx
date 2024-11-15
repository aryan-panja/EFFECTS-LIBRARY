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
        <p className="my-8 text-zinc-300">
          Here is the Parallax Image example. Switch between different components to see more effects and layouts.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">

        <p className="my-8 text-zinc-300">
          Example - Here is the search bar where you can send the props of search data and recent history as we can see in Youtube or Google searchbar.
        </p>

        <SearchBar searchData={data} searchRecents={recents} iconColor={'#000'} />

        {/* SyntaxHighlighter for JSX code display */}
        <CodeSnippet code={
          `
import { SearchBar } from '@/components/EFFECTS/SearchBar/SearchBar'

`
        } heading='Import in React' />

        <CodeSnippet code={`
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
        } />

        <p className="my-8 text-zinc-300">
          Example - Here is the search bar where you are just sending the search data and the search input will be searched from this data.
        </p>

        <SearchBar searchData={data} iconColor={'#000'} />

        {/* SyntaxHighlighter for JSX code display */}

        <CodeSnippet code={`
<SearchBar searchData={data} iconColor={'#000'} />
`
        } />

      </div>
    </Wrapper>

  )
}
