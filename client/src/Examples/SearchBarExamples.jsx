import { SearchBar } from '@/components/EFFECTS/SearchBar/SearchBar'
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
  ]

  return (
    <div className='w-full flex items-center justify-center'>
      <SearchBar recents={recents} />
    </div>
  )
}
