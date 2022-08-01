import { useContext } from 'react-router-dom';
import { createContext } from 'react';
import './MenuItemSearch.css';

export default function MenuItemSearch({ meal }) {
	console.log(meal);
	// const { meals } = useContext(queryAppend)

	return (
		<>
			<div id="pic" className="card">
				<div className="image">
					<img src={meal.strMealThumb} />
				</div>
				<div className="details">
					<div className="center">
						<h1>Entree</h1>
						<br />

						<strong>
							<h5>{meal.strMeal}</h5>
						</strong>
					</div>
				</div>
			</div>
		</>
	);
}
