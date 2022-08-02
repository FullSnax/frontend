import { useContext } from 'react-router-dom';
import { createContext } from 'react';
import './MenuItemSearch.css';

export default function MenuItemSearch({ meal }) {
	// console.log(meal);

	return (
		<div>
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
			<div class="col-sm mt-5 p-0">
				<button type="button" class="btn btn-info btn-sm">
					<strong>Add to Order</strong>
				</button>
			</div>
		</div>
	);
}
