// import axios from "axios";

// export default async function sendRequest(url, method = 'GET', payload = null) {
// 	// Fetch takes an optional options object as the 2nd argument
// 	// used to include a data payload, set headers, etc.
// 	const options = { method };
// 	if (payload) {
// 		options.headers = { 'Content-Type': 'application/json' };
// 		options.body = JSON.stringify(payload);
// 	}
// 	const res = await axios(url, options);
// 	// res.ok will be false if the status code set to 4xx in the controller action
// 	return res.data
// }
