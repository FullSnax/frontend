import React, { useEffect, useState } from 'react';
import './MenuItemList.css';

export default function MenuItems({ menu }) {
	 console.log(menu) 
	 console.log(menu.meals) 
	return (
		<div>
			{menu.meals.map((meal, index) => (
				<div className="menu-container">
				<p>{meal.strMeal}</p>
				<p>{meal.strMealThumb}</p>
				<button>Add to Order</button>
				</div>
			))}
		</div>
	)
}
