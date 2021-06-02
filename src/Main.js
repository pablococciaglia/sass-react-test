import React, { useState } from 'react'
import { Games } from './components/Games-list/Games'
import { Head } from './components/Select/Head'
export const Main = () => {
   
    const [select, setSelect] = useState(null)
       
    return (
        <div>
            <Head  setSelect={setSelect} select={select}/>
            {<Games  select={select} /> }           
        </div>
    )
}