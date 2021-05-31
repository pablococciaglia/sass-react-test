import React, { useState } from 'react'
import { Games } from './components/Games-list/Games'
import { Sort } from './components/Select/Sort'
export const Main = () => {
   
    const [select, setSelect] = useState(null)
       
    return (
        <div>
            <Sort  setSelect={setSelect} />
            <Games  select={select} />            
        </div>
    )
}