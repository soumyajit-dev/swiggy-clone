import axios from 'axios';

const AxiosInstance = axios.create({
	timeout: 10000,
});

AxiosInstance.interceptors.request.use(
	(config) => {
		console.log('Request Started');
		return config;
	},
	(error) => {
		console.log('Error');
	}
);

AxiosInstance.interceptors.response.use((res) => {
	console.log(res);
	return res;
});

export default AxiosInstance;
