import { useEffect, useState } from 'react';
import { useGetAllRestaurantsQuery } from '../redux/services/restaurantApi';
import { useEffectAfterMount, useNetworkActivity } from '../utils/CustomHooks';
import { enhancedRestaurantCard } from './EnhancedRestaurantCard';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { LinkButton } from './styles/LinkButton.styled';

const HomeComponent = () => {
	const { data: restaurants, isLoading } = useGetAllRestaurantsQuery();
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);

	const networkStatus = useNetworkActivity();

	const RestaurantCardPromoted = enhancedRestaurantCard(RestaurantCard);

	useEffect(() => {
		console.log('Normal Use Effect');

		setFilteredRestaurants(restaurants);
	}, [restaurants]);

	useEffectAfterMount(() => {
		console.log('Called');
	}, [restaurants]);

	if (!networkStatus) {
		return <h1 className='font-bold text-2xl'>Looks like your are offine. Please check your network or try after sometime</h1>;
	}

	// Conditional Rendering
	return isLoading || !restaurants?.length ? (
		// Shimmer()
		<Shimmer />
	) : (
		<div className='main-container'>
			<LinkButton
				onClick={() => {
					setFilteredRestaurants(restaurants.filter((eachRes) => eachRes.info.avgRating >= 4.5));
				}}>
				Show Top Rated Restaurant
			</LinkButton>

			<div className='mx-auto my-5'>
				<div className='flex justify-between flex-wrap m-auto'>
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
