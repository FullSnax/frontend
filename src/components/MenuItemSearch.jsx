import { useContext } from 'react-router-dom';
import { createContext } from 'react';
import './MenuItemSearch.css'

export default function MenuItemSearch({ meal }) {
	// console.log(meal);
	// const { meals } = useContext(queryAppend)

	return (
		<>
			<div className="card">
			<div className="image">
				<img src={meal.strMealThumb} />
			</div>
			<div className="details">
				<div className="center">
					<h1>
						Entree
						<br />
						<span className='category'>Seafood</span>
					</h1>
					<strong><p>{meal.strMeal}</p></strong>
				</div>
			</div>
		</div>
		</>
	);
}
