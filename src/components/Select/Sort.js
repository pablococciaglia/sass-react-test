import React from 'react'

export const Sort = ({setSelect, select, handleOptionlist}) => {

	const handleOptionChange = e => { //save the value on select by setSelect
		setSelect (e.target.value);
	}; 

	return (//onBlur and onClick will unmount the component, and onChange={handleOptionChange} will save the value by setSelect
		<>
			<form
				className="selector__option" 
				onBlur={handleOptionlist} 
				onClick={handleOptionlist} 
				onChange={handleOptionChange} 
			>
				<p><span>2</span>SORT GAMES</p>

				<div className="selector__optionbox">

					<label>
						<input defaultChecked={select==="name"?true:false} type="radio" name="inputradio" value="name" autoFocus={true}/>
						Name (A-Z)
					<i></i></label><br/>
					<label>
						<input defaultChecked={select==="stakemin"?true:false} type="radio" id="test2" name="inputradio" value="stakemin" />
						Stake (min to max)
					<i></i></label><br/>
					<label>
						<input defaultChecked={select==="stakemax"?true:false} type="radio" id="test3" name="inputradio" value="stakemax" />
						Stake (max to min)
					<i></i></label>
					
				</div>
			</form>
		</>
	)
}