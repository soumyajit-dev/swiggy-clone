import axios from 'axios';
import { useEffect, useState } from 'react';
import AxiosInstance from './AxiosConfig';
import CONSTANTS from './constant';

export const useNetworkActivity = () => {
	const [onlineStatus, setOnlineStatus] = useState(true);

	useEffect(() => {
		window.addEventListener('offline', () => {
			setOnlineStatus(false);
		});

		window.addEventListener('online', () => {
			setOnlineStatus(true);
		});
	});

	return onlineStatus;
};

export const useDebounce = (value, delay = 1000) => {
	const [debounceValue, setDebounceValue] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => clearTimeout(timeout);
	}, [value, delay]);

	return debounceValue;
};

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const axiosData = await AxiosInstance.get(CONSTANTS.SWIGGY_RES_API + resId);
		console.log(axiosData);

		setResInfo(axiosData.data?.data?.cards);
	};

	return resInfo;
};

const useSearchCuisine = () => {
	const [cuisineInfo, setCuisionInfo] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const axiosData = await AxiosInstance.get(CONSTANTS.SWIGGY_CUISINE_API);
		setCuisionInfo(axiosData.data?.data?.cards);
	};

	return cuisineInfo;
};

const useRestaurantsInfo = () => {
	const [resInfo, setResInfo] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const axiosData = await axios.get(CONSTANTS.SWIGGY_API);
		const restaurants = [
			...axiosData.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
			...axiosData.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
		];
		setResInfo(restaurants);
	};

	return resInfo;
};
