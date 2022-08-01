import React from 'react';
import { useState, useEffect } from 'react';
import DisplayItems from '../../components/DisplayItems';
import * as backendAPI from '../../utilities/backendAPI';

export default function HomePage() {
	const [displayItems, setDisplayItems] = useState([]);

	async function getDisplayItems() {
		const display = await backendAPI.getDisplayItems();
		setDisplayItems(display);
		console.log(display);
	}

	useEffect(() => {
		getDisplayItems();
	}, []);

	return (
			<>
				<h1>Fan Favorites</h1>
			<div className="menu-container">
				{displayItems.map((demo, index) => {
					return <DisplayItems key={index} demo={demo} />
				})}
			</div>
			</>
	);
}
