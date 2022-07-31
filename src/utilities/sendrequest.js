import axios from 'axios';

export default async function mealsreqApi(url, method = 'GET', payload = null) {
	let data;

	const options = { method };
	if (payload) {
		options.headers = {
			Authorization: 'JWT ' + localStorage.getItem('access_token'),
			'Content-Type': 'application/json',
			accept: 'application/json',
		};
		options.data = payload;
	}

	const res = await axios(url, options);

	return res.data;
}
