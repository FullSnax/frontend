import React, { useState, useEffect } from 'react';
import MenuItemList from '../../components/MenuItemList';
import axios from 'axios';
import NavBar from '../../components/NavBar';

export default function MenuItemsPage() {
	const [menuItems, setMenuItems] = useState([]);

	const SendGetRequest = async () => {
		try {
			let res = await axios.get("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood"),
			headers: {
				'Access-Control-Allow-Credentials' : true,
				'Access-Control-Allow-Origin':'*',
				'Access-Control-Allow-Methods':'GET',
				'Access-Control-Allow-Headers':'application/json',
			}
			// console.log(res.data);
			setMenuItems(res.data)
		} catch (err) {
			// Handle Error Here
			console.error(err);
		}
	}
	
	useEffect(() => {
		SendGetRequest();
	}, []);

	return (
		<>
			<NavBar />
			<div className="container">
				<h1>Menu</h1>
				<MenuItemList menu={menuItems} />
			</div>
		</>
	);
}
