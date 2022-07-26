import React, { useEffect, useState } from 'react';
// import MenuListItem from './MenuListItem';

export default function MenuItems({ menuItems }) {
  console.log({ menuItems })
  
  
    
  const menu = menuItems.map((item, index) => {
        console.log(item);
      })
    
      
    return (
    <div>{menu}</div>
    )
  }