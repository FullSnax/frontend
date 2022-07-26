import React, { useState, useEffect } from 'react';
import MenuItemList from '../../components/MenuItemList';
import * as itemsApi from '../../utilities/itemsApi';
import axios from 'axios';

export default function MenuItemsPage() {
	const [menuItems, setMenuItems] = useState([]);

	// const BASE_URL = 'http://localhost:8000/api';

	// const getAllItems = () => {
	//   let data;
	//   axios
	//     .get('http://localhost:8000/api/menuitems/')
	//     .then((res) => {
	//       data = res.data;
	//       console.log(data);
	//       // setMenuItems(data);
	//     })
	//     .catch((error) => console.error(`Error: ${error}`));

	//   // useEffect(() => {

	//   // }, []);
	// }
	// getAllItems();
	console.log('yooo');
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
				<h1>Menuitems Page</h1>
        <MenuItemList menuItems={menuItems} />
			</div>
		</>
	);
}
