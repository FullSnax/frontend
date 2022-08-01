import { useEffect, useState, useRef } from 'react';
import * as mealsApi from '../utilities/mealsApi';
import MenuItemSearch from './MenuItemSearch';
import { useNavigate } from 'react-router-dom';
import { createContext } from "react";
import { Link } from 'react-router-dom'

export default function SearchPage() {
  
	const [queryAppend, setQueryAppend] = useState([]);
	const [selectedParam, setSelectedParam] = useState('c', 'i', 'a');
	const [selectedSearch, setSelectedSearch] = useState('');

	async function submitQuery(event) {
		event.preventDefault();

		let returnedData = await mealsApi.getSearch(selectedParam, selectedSearch);
		setQueryAppend(returnedData.meals);
		console.log(returnedData.meals)
		
	}

	function handleParamChange(event) {
		const changedParam = event.target.value;
		setSelectedParam(changedParam);
		console.log(selectedParam);
	}

	function handleSearchChange(event) {
		const changedSearch = event.target.value;
		setSelectedSearch(changedSearch);
		// console.log(selectedSearch);
	}
	if (queryAppend === []) {
		return (
			<>
				<h1>Search Page Here</h1>

				<div
					className="package-add mt-4 text-lg px-2"
					onSubmit={submitQuery}
				>
					<form action="">
						<label className="px-2 ">Search By</label>
						<select
							className="px-8 mr-4 bg-slate-300 ring-1 ring-slate-800"
							onChange={handleParamChange}
						>
							<option value="c">Category</option>
							<option value="i">Ingredient</option>
							<option value="a">Area</option>
						</select>
						<input
							type="text"
							name="search"
							value={selectedSearch}
							placeholder="Search..."
							onChange={handleSearchChange}
						></input>
						<button type="submit">Search</button>
					</form>
				</div>
			</>
		);
	} else {
    return (
      <>
      
				<div
					className="package-add mt-4 text-lg px-2"
					
				>
					<form action="" onSubmit={submitQuery}>
						<label className="px-2 ">Search By</label>
						<select
							name="param"
							className="px-8 mr-4 bg-slate-300 ring-1 ring-slate-800"
							value={selectedParam}
							onChange={handleParamChange}
						>
							<option value="c">Category</option>
							<option value="i">Ingredients</option>
							<option value="a">Area</option>
						</select>
						<input
							type="text"
							name="search"
							value={selectedSearch}
							placeholder="Search..."
							onChange={handleSearchChange}
						></input>
						<button type="submit">Search</button>
					</form>
				</div>
        <div className="menu-container">
					{queryAppend.map((meal, index) => {
            return <MenuItemSearch key={index} meal={meal} />
          })}
				</div>
			</>
		);
	}
}
