import React from 'react';

export const ListGames = ({ games }) => {
	return (
		//function .map to set the each list item with the info from the .json
		<>
			{games.map((game) => (
				<li key={Math.random()} className='listbox__list'>
					<div className='list__flexcontainer list__background mt7'>
						<h2 className='list__textinfo'>X</h2>
						<img
							className='list__img ml7'
							src={game.url}
							alt='a good game'
						></img>

						<div className='list__textsbox'>
							<h2 className='list__textcompany'>{game.company}</h2>
							<strong className='list__texttitle'>{game.title}</strong>
							<strong className='list__textstake'>
								€{game.minbet} min. Stake
							</strong>
						</div>

						<button className='list__button'>PLAY</button>
					</div>

					<hr />
				</li>
			))}
		</>
	);
};
