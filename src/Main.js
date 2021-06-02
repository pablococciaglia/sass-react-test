import React, { useState } from 'react'
import { Games } from './components/Games-list/Games'
import { Head } from './components/Select/Head'
export const Main = () => {
   
    const [select, setSelect] = useState(null)
    /* useState: it will manage the selection from the selector 
       in the Sort component, and send it to the Game compoenent 
       to display the games list in the selected order */
    return (
        <>
            <Head  setSelect={setSelect} select={select}/>
            <Games  select={select} />          
        </>
    )
    /* render the 2 main components of the site
    Head: where is the title and the selector
    Games: where is rendered the list of components */ 
}