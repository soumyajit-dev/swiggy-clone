import axios from 'axios';
import { useEffect, useState } from 'react';
import CONSTANTS from './constant';

const useSearchCuisine = () => {
	const [cuisineInfo, setCuisionInfo] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const axiosData = await axios.get(CONSTANTS.SWIGGY_CUISINE_API);
		setCuisionInfo(axiosData.data?.data?.cards);
	};

	return cuisineInfo;
};

export default useSearchCuisine;
