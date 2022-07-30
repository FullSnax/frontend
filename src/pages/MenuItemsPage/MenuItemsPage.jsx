import React, { useState, useEffect, useRef, useContext } from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/Authcontext"
import axios from 'axios';
import MenuItemCard from '../../components/MenuItemCard';
import * as mealsApi from '../../utilities/mealsApi';
import SearchBar from '../../components/SearchBar';
import './MenuItemsPage.css';

export default function MenuItemsPage() {
	let [menuItems, setMenuItems] = useState([]);

	async function getCategory() {
		let seafood = await mealsApi.getCat();
		setMenuItems(seafood.meals);
		
	}

	useEffect(() => {
		getCategory();
	}, []);

	

	return (
		<>
			<div>
				<h1 className='menu-title'>Entrées</h1>
				</div>
			<div>
				<SearchBar />
			</div>
				{/* Welcome {user} */}
			<div className="menu-container">
				{menuItems.map((meal, index) => {
					return <MenuItemCard key={index} meal={meal} />;
				})}
			</div>
		</>
	);
}
