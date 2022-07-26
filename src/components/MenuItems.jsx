import React, { useEffect, useState } from 'react';
import instance from '../utilities/calls';
import baseURL from '../utilities/calls';
import headers from '../utilities/calls';

export default function MenuItems() {

  const [menuItems, setMenuItems] = useState([])


	useEffect(function () {
		(async function getMenuItems() {
      const res = await instance('/menuitems/')
      console.log(res.data)
      // setMenuItems(result)
		})();
	}, []);

  return (
    <div>MenuItems</div>) 
}
