import { useEffect, useState } from 'react';
import CONSTANTS from './constant';

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(CONSTANTS.SWIGGY_RES_API + resId);
		const json = await data.json();
		setResInfo(json.data?.cards);
	};

	return resInfo;
};

export default useRestaurantMenu;
