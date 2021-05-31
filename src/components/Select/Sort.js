import React from 'react'

export const Sort = ({setSelect}) => {


	function tuggleshow() {
		let sort = document.getElementsByClassName("selector__option");
		if (sort[0].style.display === "none") {
			sort[0].style.setProperty('display', 'block');
		} else {
			sort[0].style.setProperty('display', 'none');
		}
		
	}

	const handleOptionChange = changeEvent => {
		setSelect (changeEvent.target.value);
		tuggleshow(); 
	};

	return (
		<>
		<div className="header__margin">
		
			<div>
			<h1 className="header__title">LOTTOLAND GAMES</h1>
			</div>
			<div onClick={tuggleshow} className="selector__frame selector__select">
				<p><span>1 &nbsp;</span>SORT GAMES</p>
			</div>
			<form id="selector__option" className="selector__option selector__select" onClick={tuggleshow} onChange={handleOptionChange} >
				<p><span>2 &nbsp;</span>  SORT GAMES</p>
				<input type="radio" id="test1" name="inputradio" value="name" /><label for="test1">Name (A-Z)</label><br/>
				<input type="radio" id="test2" name="inputradio" value="stakemin" /><label for="test2">Stake (max to min)</label><br/>
				<input type="radio" id="test3" name="inputradio" value="stakemax" /><label for="test3">Stake (min to max)</label><br/>
			</form>
		</div>
		<hr/>
		</>
	)
}
