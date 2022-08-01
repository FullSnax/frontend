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
									className="px-8 mr-4 bg-slate-300 ring-1 ring-slate-800"
									onChange={handleParamChange}
								>
									<option value="c">Category</option>
									<option value="i">
										Ingredient
									</option>
									<option value="a">Area</option>
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
			<form action="" onSubmit={submitQuery}>
				<div className="input-group justify-content-center">
					<div>
						<div className="form-outline d-flex">
							<input
								type="text"
								id="form1"
								name="search"
								value={selectedSearch}
								className="form-control d-inline-block"
								placeholder="Search..."
								onChange={handleSearchChange}
							></input>
							<span class="input-group-btn d-inline-block">
								<button
									type="submit"
									onSubmit={submitQuery}
									className="btn btn-dark"
								>
									<i class="fa fa-search"></i>
								</button>
							</span>

							<div>
								<select
									name="param"
									className="form-select form-select-sm"
									style={{ width: 'auto ' }}
									value={selectedParam}
									onChange={handleParamChange}
								>
									<option value="c">Category</option>
									<option value="i">
										Ingredient
									</option>
									<option value="a">Area</option>
								</select>
							</div>
						</div>
					</div>

						</div>
					<div className="menu-container">
						{queryAppend.map((meal, index) => {
							return (
								<MenuItemSearch
									key={index}
									meal={meal}
									/>
									);
								})}
								</div>
			</form>
		);
	}
}
