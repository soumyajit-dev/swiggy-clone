import { useEffect, useState } from 'react';
import AxiosInstance from './AxiosConfig';
import CONSTANTS from './constant';

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

export default useRestaurantMenu;
