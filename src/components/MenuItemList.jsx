import React, { useEffect, useState } from 'react';
import './MenuItemList.css'

export default function MenuItems({ menuItems }) {
	console.log({ menuItems });

	return (
		<div>
			{menuItems.map((item, index) => (
				<>
					<div className="item-container">
						<h1>{item.name}</h1>
						<p>{item.description}</p>
						<p>${item.price}</p>
						<img src={item.image} alt="" />
					</div>
				</>
			))}
		</div>
	);
}
