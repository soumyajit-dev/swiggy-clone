import { useEffect, useState } from 'react';
import CONSTANTS from '../utils/constant';
import { RestaurantCard } from './RestaurantCard';
import Shimmer from './Shimmer';

const HomeComponent = () => {
	const [restaurants, setRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	const fetchData = async () => {
		try {
			const data = await fetch(CONSTANTS.SWIGGY_API);

			const jsonData = await data.json();
			const restaurantDetails = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
			setRestaurants(restaurantDetails);
			setFilteredRestaurants(restaurantDetails);
		} catch (e) {
			console.log(e.message);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// Conditional Rendering
	return !restaurants || !restaurants.length ? (
		// Shimmer()
		<Shimmer />
	) : (
		<div className='main-container'>
			<div className='search-bar'>
				<input
					title='search-input'
					className='search-input'
					type='text'
					value={searchText}
					onInput={(e) => {
						setSearchText(e.target.value);
					}}
				/>
				<button
					type='button'
					title='search-button'
					className='search-button'
					onClick={() => {
						setFilteredRestaurants(restaurants.filter((eachRes) => eachRes.info.name.toLowerCase().includes(searchText.toLowerCase())));
					}}>
					Search
				</button>
			</div>
			<button
				className='filter-button'
				onClick={() => {
					setFilteredRestaurants(restaurants.filter((eachRes) => eachRes.info.avgRating >= 4.5));
				}}>
				Show Top Rated Restaursnt
			</button>
			<div className='resturent-container'>
				{filteredRestaurants.map((eachRes, index) => (
					<RestaurantCard key={eachRes.info.id} resDetails={eachRes} index={index} />
				))}
			</div>
		</div>
	);
};

export default HomeComponent;
