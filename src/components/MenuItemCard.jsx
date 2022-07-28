import React, { useEffect, useState } from 'react';
import './MenuItemCard.css';

export default function MenuItems({ meal }) {
	
	return (
		<body>
  <div class="card">
    <div class="image">
      <img src={meal.strMealThumb} />
    </div>
    <div class="details">
      <div class="center">
        <h1>Entree<br /><span>Seafood</span></h1>
        <p>{meal.strMeal}</p>
      </div>
    </div>
  </div>
</body>
			
	)
}
