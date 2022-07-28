import React, { useEffect, useState } from 'react';
import './MenuItemCard.css';

export default function MenuItems({ meal }) {
	return (
		<div class="card">
			<div class="image">
				<img src={meal.strMealThumb} />
			</div>
			<div class="details">
				<div class="center">
					<h1>
						Entree
						<br />
						<span className='category'>Seafood</span>
					</h1>
					<strong><p>{meal.strMeal}</p></strong>
				</div>
			</div>
		</div>
	);
}
