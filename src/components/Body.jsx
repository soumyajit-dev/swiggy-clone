import { useState } from 'react';
import { RestaurantCard } from './Restaurant-Card';

const BodyComponent = () => {
	const [restaurants, setRestaurants] = useState([]);

	return (
		<div className='main-container'>
			<div className='search-bar'>
				<input title='search-input' className='search-input' type='text' />
				<button type='button' title='search-button' className='search-button'>
					Search
				</button>
			</div>
			<button
				className='filter-button'
				onClick={() => {
					setRestaurants(restaurants.filter((eachRes) => eachRes.rating >= 4));
				}}>
				Show Top Rated Restaursnt
			</button>
			<div className='resturent-container'>
				{restaurants.map((eachRes, index) => (
					<RestaurantCard key={eachRes.id} resDetails={eachRes} index={index}></RestaurantCard>
				))}
			</div>
		</div>
	);
};

module.exports = { BodyComponent };
