import { useEffect, useState } from 'react';
import useNetworkActivity from '../utils/useNetworkActivity';
import useRestaurantsInfo from '../utils/useRestaurantsInfo';
import { enhancedRestaurantCard } from './EnhancedRestaurantCard';
import { RestaurantCard } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Flex } from './styles/Flex.styled';
import { LinkButton } from './styles/LinkButton.styled';
import { SearchField } from './styles/SearchField.styled';

const HomeComponent = () => {
	const restaurants = useRestaurantsInfo();
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	const networkStatus = useNetworkActivity();

	const RestaurantCardPromoted = enhancedRestaurantCard(RestaurantCard);

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
		<div className='main-container'>
			<div className='flex justify-between mx-auto h-12'>
				<SearchField>
					<Flex>
						<input
							className='search-input'
							title='search-input'
							type='test'
							value={searchText}
							placeholder='Search...'
							onInput={(e) => {
								setSearchText(e.target.value);
							}}
						/>
						<button
							className='search-button'
							type='submit'
							title='search-button'
							onClick={() => {
								setFilteredRestaurants(restaurants.filter((eachRes) => eachRes.info.name.toLowerCase().includes(searchText.toLowerCase())));
							}}>
							Search
						</button>
					</Flex>
				</SearchField>
				<LinkButton
					onClick={() => {
						setFilteredRestaurants(restaurants.filter((eachRes) => eachRes.info.avgRating >= 4.5));
					}}>
					Show Top Rated Restaurant
				</LinkButton>
			</div>
			<div className='mx-auto my-5'>
				<div className='resturent-container'>
					{filteredRestaurants?.map((eachRes, index) => {
						return eachRes.info.avgRating >= 4.5 ? (
							<RestaurantCardPromoted key={index} resDetails={eachRes} index={index} />
						) : (
							<RestaurantCard key={index} resDetails={eachRes} index={index} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
