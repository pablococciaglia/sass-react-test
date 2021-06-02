import React, { useRef, useState } from 'react'

export const Sort = ({setSelect, select}) => {
	const inputRef = useRef();

	const handleOptionChange = changeEvent => {
		setSelect (changeEvent.target.value);
	}; 

	const [showOptions, setshowOptions] = useState(false);
 	
	const spreadoptionlist =()=>{
		if(showOptions===false){
			
			setTimeout(() => {
				inputRef.current.focus();
			}, 0);
			
			setshowOptions(!showOptions);
			
		}else{
			setTimeout(() => {
				setshowOptions(!showOptions);
				
			}, 250);
		}
	}

	return (
		<>
	 	<div className="header__margin">
		
			<h1 className="header__title">LOTTOLAND GAMES</h1>
			
			<div onClick={spreadoptionlist} className="selector__frame selector__select">
				<p ><span>1 &nbsp; </span>SORT GAMES</p>
			</div>

			{showOptions && 
			 	<form id="selector__option" 
					className="selector__option selector__select" 
					onBlur={spreadoptionlist} 
					onClick={spreadoptionlist} 
					onChange={handleOptionChange} 
				>
					<p><span>2 &nbsp; </span>SORT GAMES</p>
					<input checked={select==="name"?true:false} type="radio" id="test1" name="inputradio" value="name" /><label for="test1" ref={inputRef}>Name (A-Z)</label><br/>
					<input checked={select==="stakemin"?true:false} type="radio" id="test2" name="inputradio" value="stakemin" /><label for="test2">Stake (min to max)</label><br/>
					<input checked={select==="stakemax"?true:false} type="radio" id="test3" name="inputradio" value="stakemax" /><label for="test3">Stake (max to min)</label><br/>
				</form>
			}
				
		</div>
		<hr/>
		</>
	)
}