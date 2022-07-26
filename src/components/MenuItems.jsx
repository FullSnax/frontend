import React, { useEffect, useState } from 'react';


export default function MenuItems() {
	const [menuItems, setMenuItems] = useState([]);

	useEffect(function () {
		async function getAllItems() {
			const items = await itemsApi.getAll();
			console.log(items);
			setMenuItems(items);
		}
		getAllItems();
	}, []);

  return (
    <div>MenuItems</div>
  )
}
