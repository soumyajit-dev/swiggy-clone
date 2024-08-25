import axios from 'axios';
import { useEffect, useState } from 'react';
import CONSTANTS from './constant';

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const axiosData = await axios.get(CONSTANTS.SWIGGY_RES_API + resId);
		setResInfo(axiosData.data?.data?.cards);
	};

	return resInfo;
};

export default useRestaurantMenu;
