import React from 'react';
import './MenuItemSearch.css'

export default function DisplayItems({ demo }) {
	// console.log(demo);

	return (
		<>
			<div className="card">
			<div className="image">
				<img src={demo.image2} />
			</div>
			<div className="details">
				<div className="center">
					<h1>
						Entree
						<br />
					</h1>
            <strong><p>{demo.name}</p></strong>
						<p>{demo.description}</p>
						<p>$ {demo.price}</p>
           
				</div>
			</div>
		</div>
		</>
	);
}
