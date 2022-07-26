import React, { useState, useEffect } from 'react';
import MenuItemList from '../../components/MenuItemList';
import axios from 'axios';

export default function MenuItemsPage() {
	const [menuItems, setMenuItems] = useState([]);
	
	function componentDidMount() {
		console.log('it mounted');
		let data;
		axios.get('http://localhost:8000/api/menuitems/')
			.then((res) => {
				data = res.data;
				// console.log(data);
				setMenuItems(data);
			})
			.catch((err) => {});
	}

  useEffect((e) => {
  
		componentDidMount();
	}, []);

	return (
		<>
			<div className="container">
				<h1>Menu</h1>
        <MenuItemList menuItems={menuItems} />
			</div>
		</>
	);
}
