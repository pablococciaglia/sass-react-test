import React, { useState } from 'react'
import { Sort } from './Sort'

export const Head = ({setSelect, select}) => {

    const [optionlist, setoptionlist] = useState(false)
    //useState: to handle the mount and unmount of the 'Sort' component by true or false

    const handleOptionlist = ()=>{
    //if 'optionlist' is false the Sort component wont be displayed
        if (optionlist===false){
            setoptionlist(!optionlist)
            
        }else{
            //setTimeout to delay the unmounting of the Sort component to appreciate the visual effect when you chose some option
            setTimeout(() => {
                setoptionlist(!optionlist)
            }, 250);

        }
    }
    
    return (
       <>
            <div className="header__margin">
            
                <div>
                <h1 className="header__title">LOTTOLAND GAMES</h1>
                </div>
                <div onClick={handleOptionlist} className="selector__frame">
                    <p><span>1</span>SORT GAMES</p>
                </div>
                {optionlist && <Sort setSelect={setSelect} select={select} handleOptionlist={handleOptionlist} />}
                
            </div>
            <hr/>
		</>
    )
}