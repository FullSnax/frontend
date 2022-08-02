import { useEffect, useState, useRef } from 'react';
import * as mealsApi from '../utilities/mealsApi';
import MenuItemSearch from './MenuItemSearch';
import './MenuItemSearch.css';

export default function SearchPage() {
	const [queryAppend, setQueryAppend] = useState([]);
	const [selectedParam, setSelectedParam] = useState('c', 'i', 'a');
	const [selectedSearch, setSelectedSearch] = useState('');

	async function submitQuery(event) {
		event.preventDefault();

		let returnedData = await mealsApi.getSearch(
			selectedParam,
			selectedSearch
		);
		setQueryAppend(returnedData.meals);
		console.log(queryAppend);
	}

	function handleParamChange(event) {
		const changedParam = event.target.value;
		setSelectedParam(changedParam);
		// console.log(selectedParam);
	}

	function handleSearchChange(event) {
		const changedSearch = event.target.value;
		setSelectedSearch(changedSearch);
		// console.log(selectedSearch);
	}
	if (queryAppend === []) {
		return (
			<>
				<div>
					<div className="input-group">
						<form action="" onSubmit={submitQuery}>
							<div>
								<input
									type="text"
									name="search"
									value={selectedSearch}
									placeholder="Search..."
									onChange={handleSearchChange}
								></input>
							</div>
							<div>
								<label
									className="form-label"
									htmlFor="form1"
								>
									Search
								</label>
							</div>
							<div>
								<select
									className="dropdown"
									onChange={handleParamChange}
								>
									<option value="c">Category</option>
									<option value="i">
										Ingredient
									</option>
									<option value="a">Region</option>
								</select>
							</div>

							<div>
								<button type="submit"></button>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="input-group justify-content-center mt-5 p-5">
					<form action="" onSubmit={submitQuery}>
						<div className="form-outline d-flex">
							<input
								type="text"
								id="form1"
								name="search"
								value={selectedSearch}
								className="form-control d-inline-flex"
								placeholder="Search..."
								onChange={handleSearchChange}
							></input>
							<span className="input-group-btn d-inline-block">
								<button
									type="submit"
									id="mag-glass"
									onSubmit={submitQuery}
									className="btn btn-info bg-dark"
								>
									<i className="fa fa-search"></i>
								</button>
							</span>
					
							<div id="filter">
								<select
									name="param"
									id="search-filter"
									className="form-select-sm p-2 bg-dark"
									style={{ width: 'auto ' }}
									value={selectedParam}
									onChange={handleParamChange}
								>
									<option value="c">Category</option>
									<option value="i">
										Ingredient
									</option>
									<option value="a">Region</option>
								</select>
							</div>
						</div>
					</form>
				</div>
				<div className="menu-container">
					{queryAppend.map((meal, index) => {
						return <MenuItemSearch key={index} meal={meal} />;
					})}
				</div>
			</>
		);
	}
}
