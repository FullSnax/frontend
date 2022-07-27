import React, { useEffect, useState } from 'react';
import './MenuItemList.css';

export default function MenuItems(props) {
	console.log(props.menuItems)
	return (
		<div>
			{props.menuItems.map((item, index) => (
				<div className="item-container">
					<h2>{item[0].strMeal}</h2>
					{/* <p>{item.description}</p>
						<p>${item.price}</p>
            <img src={item.image} alt="" /> */}
					<button>Add to Order</button>
				</div>
			))}
		</div>
	);
}
