import React, { useEffect, useState } from 'react';
import api from '../utilities/calls';
import baseURL from '../utilities/calls';
import headers from '../utilities/calls';

export default function MenuItems() {

  const [menuItems, setMenuItems] = useState([])


	useEffect(function () {
		(async function getMenuItems() {
      const result = await api.get('/menuitems/')
      console.log(result)
      setMenuItems(result)
		})();
	}, []);

  return (
    <div>MenuItems</div>) 
}
