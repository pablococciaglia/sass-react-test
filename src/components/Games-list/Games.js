import React, { useState, useEffect } from 'react';
import { ListGames } from './ListGames';

export const Games = ({ select }) => {
	const [games, setgames] = useState([]);
	//useState: where we will save the .json file.

	useEffect(() => {
		//useEffect: without dependency to tun it just once

		const customData = require('../../assets/games.json');
		setgames(customData);
		// we use require because the .json file is on local
	}, []);

	switch (
		select //switch: depending on the choice, the objects saved in 'games' will be sorted and then displayed
	) {
		case 'name':
			games.sort((a, b) => {
				//sort the objet array by letters
				const wordA = a.title.toLowerCase();
				const wordB = b.title.toLowerCase();
				if (wordA < wordB) {
					return -1;
				}
				if (wordA > wordB) {
					return 1;
				}
				return 0;
			});

			return (
				//render the list of components sinding the 'games' via props
				<ul>
					<ListGames games={games} />
				</ul>
			);

		case 'stakemin':
			games.sort((a, b) => {
				//sort the objet array from min to max stake
				if (a.minbet < b.minbet) {
					return -1;
				}
				if (a.minbet > b.minbet) {
					return 1;
				}
				return 0;
			});

			return (
				<ul>
					<ListGames games={games} />
				</ul>
			);

		case 'stakemax':
			games.sort((a, b) => {
				//sort the objet array from max to min stake
				if (a.minbet < b.minbet) {
					return 1;
				}
				if (a.minbet > b.minbet) {
					return -1;
				}
				return 0;
			});

			return (
				<ul>
					<ListGames games={games} />
				</ul>
			);

		default:
			return (
				//the list will be display in the original order that is in the .json
				<ul>
					<ListGames games={games} />
				</ul>
			);
	}
};
