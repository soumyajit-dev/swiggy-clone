import { useEffect, useState } from 'react';
import CONSTANTS from './constant';

const useRestaurantsInfo = () => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(CONSTANTS.SWIGGY_API);
		const json = await data.json();
		setResInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	};

	return resInfo;
};

export default useRestaurantsInfo;
