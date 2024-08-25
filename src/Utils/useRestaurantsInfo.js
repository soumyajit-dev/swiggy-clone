import axios from 'axios';
import { useEffect, useState } from 'react';
import CONSTANTS from './constant';

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

export default useRestaurantsInfo;
