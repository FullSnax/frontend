import React from 'react';
import NavBar from '../../components/NavBar';

export default function AboutPage() {
	return (
		<>
			<NavBar />
			<h1>AboutPage</h1>
			<div className="about">
				<p>
					Welcome! We have many different meals and categories
					for you to choose from, please have a look and pick
					something you'll love! When you're ready to order go
					ahead and add your meals to your order for payment.
					Have a great day!
				</p>
			</div>
		</>
	);
}
