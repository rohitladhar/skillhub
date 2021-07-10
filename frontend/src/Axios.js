import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: 'Bearer' + localStorage.getItem('token'),
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

axiosInstance.interceptors.response.use(
	(response) => {
		
		return response;
	},
	async function (error) {
		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error occurred. ' +
				'Looks like CORS might be the problem. ' +
				'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}
		
	   
		 else {
			alert(
				'username and password is incorrect'
			);
				window.location.href = '/';
			}
			return Promise.reject(error);
		}

		// specific error handling done elsewhere
);

export default axiosInstance;