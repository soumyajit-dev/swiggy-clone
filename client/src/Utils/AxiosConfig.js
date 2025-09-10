import axios from 'axios';

const axiosInstance = axios.create({
	timeout: 10000,
});

axiosInstance.interceptors.request.use(
	(config) => {
		console.log('Request Started');
		return config;
	},
	(error) => {
		console.log('Error');
	}
);

axiosInstance.interceptors.response.use((res) => {
	console.log(res);
	return res;
});

export default axiosInstance;
