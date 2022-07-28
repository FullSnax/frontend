import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import MenuItemCard from '../../components/MenuItemCard'
import * as mealsApi from '../../utilities/mealsApi'
import SearchBar from '../../components/SearchBar';

export default function MenuItemsPage() {

	let [menuItems, setMenuItems] = useState([])

	async function getCategory() {
		let seafood = await mealsApi.getCat();
		setMenuItems(seafood.meals)
		console.log(seafood.meals) 
	}
	
	useEffect(() => {
		getCategory();
	}, []);

	return (
		<>
			<div className='menu-container'>
			<div className="menu-title">
				<h1>Menu</h1>
				<SearchBar />
				{  
     menuItems.map((meal, index) => {
       return <MenuItemCard key={index} meal={meal} />
      })}
			</div>
			</div>
			</>
	);
}
