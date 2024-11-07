import React, { useState } from 'react'

export const DropDown = () => {

    const countries = [
        {name: 'India', code: 'IN', states: [
            'Delhi',
            'Punjab',
            'U.P'
        ]},
        {name: 'Pakistan', code: 'PAK', states: [
            'Lahore',
            'Punjab',
        ]},
        {name: 'China', code: 'XN', states: [
            'Beijing',
        ]}
    ]
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');

    const [allStates, setAllStates] = useState();

    


  return (
    <div className=' flex gap-x-5'>
        <select name="" id="" value={country} onChange={(e)=>{setCountry(e.target.value)
            setAllStates(countries.filter((i)=>i.name===country))
            console.log("allStates = ", allStates)
        }}>
            {countries.map((item, index)=>(
                <option value={item.name}>{item.name}</option>
            ))}
        </select>
        {
            
            <select value={state} onChange={(e)=>setState(e.target.value)}>
                {allStates.map((item, index)=>(
                    <option value={item}>{item}</option>
                ))}
            </select>
        }
    </div>
  )
}
