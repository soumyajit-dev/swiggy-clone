import { useEffect, useState } from 'react';
import useNetworkActivity from '../utils/useNetworkActivity';
import useRestaurantsInfo from '../utils/useRestaurantsInfo';
import { RestaurantCard } from './RestaurantCard';
import Shimmer from './Shimmer';

const HomeComponent = () => {
	const restaurants = useRestaurantsInfo();
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	const networkStatus = useNetworkActivity();

	useEffect(() => {
		setFilteredRestaurants(restaurants);
	}, [restaurants]);

	if (!networkStatus) {
		return <h1>Looks like your are offine. Please check your network or try after sometime</h1>;
	}

	// Conditional Rendering
	return !restaurants || !restaurants.length ? (
		// Shimmer()
		<Shimmer />
	) : (
		<div className='main-container px-10'>
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
					className='search-button rounded-lg'
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
				{filteredRestaurants?.map((eachRes, index) => (
					<RestaurantCard key={eachRes.info.id} resDetails={eachRes} index={index} />
				))}
			</div>
		</div>
	);
};

export default HomeComponent;
