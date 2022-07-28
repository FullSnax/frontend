import React, { useEffect, useState } from 'react';
import './MenuItemList.css';

export default function MenuItems({ menu }) {
	
	
	
	return (
			menu.map((meal, index) =>
		<div key={index} className="menu-container">
				<p className='food-title'>{meal.strMeal}</p>
				<img src={meal.strMealThumb} width="150px" alt="food-pic"/>
				<button>Add to Order</button>
				</div>
			)
	)
}
