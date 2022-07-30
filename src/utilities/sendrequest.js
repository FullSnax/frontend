import axios from 'axios';

export default async function sendRequest(url, method = 'GET', payload = null) {
	let data;

	const options = { method };
	if (payload) {
		options.headers = {
			Authorization:  'JWT ' + localStorage.getItem('access_token'), 'Content-Type': 'application/json',
							accept: 'application/json',
		};
		options.data = payload;
	}

	// let data;
	const res = await axios(url, options);
	// console.log(res.data)
	return res.data;
	// if (res.ok)
	// throw new Error('Bad Request');
}

export async function mealsreqApi(url, method = 'GET', payload = null) {
	let data;

	const options = { method };
	// if (payload) {
	//     options.headers = { 'Content-Type': 'application/json' };
	//     options.data = payload;
	//   }

	// let data;

	const res = await axios(url, options);
	// console.log(res.data)
	return res.data;
	// if (res.ok)
	// throw new Error('Bad Request');
}
