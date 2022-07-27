import React, { useState, useEffect } from 'react';
import MenuItemList from '../../components/MenuItemList';
import axios from 'axios';
import NavBar from '../../components/NavBar';

export default function MenuItemsPage() {
	const [menuItems, setMenuItems] = useState('');

	const sendGetRequest = async () => {
		try {
			let data = await axios.get("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood"),
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			}
        console.log(data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest();

	// useEffect((e) => {
	// 	componentDidMount();
	// }, []);

	return (
		<>
			<NavBar />
			<div className="container">
				<h1>Menu</h1>
				<MenuItemList menuItems={menuItems} />
			</div>
		</>
	);
}
