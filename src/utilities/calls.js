import axios from 'axios';

// baseURL = 'http://localhost:8000/api/'

const api = async () => {
	axios.create({
		baseURL: 'http://localhost:8000/api',
		headers: {
			'Content-type': 'application/json',
		},
	});
};

export default api;
