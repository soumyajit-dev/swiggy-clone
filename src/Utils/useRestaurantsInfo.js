import { useEffect, useState } from 'react';
import CONSTANTS from './constant';

const useRestaurantsInfo = () => {
	const [resInfo, setResInfo] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(CONSTANTS.SWIGGY_API);
		const json = await data.json();
		const restaurants = [
			...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
			...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
		];
		setResInfo(restaurants);
	};

	return resInfo;
};

export default useRestaurantsInfo;
