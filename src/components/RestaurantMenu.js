import React from 'react';
import { useParams } from 'react-router-dom';
import CONSTANTS from '../utils/constant';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';

const RestaurantMenuComponent = () => {
	const { id } = useParams();
	const restaurantInfo = useRestaurantMenu(id);

	if (restaurantInfo === null || restaurantInfo.length === 0) return <Shimmer />;

	const { avgRating, totalRatingsString, costForTwoMessage, cuisines, sla, expectationNotifiers } = restaurantInfo[2].card?.card?.info;
	const recommendedCards = restaurantInfo[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

	return (
		<div className='res-menu'>
			<h1 className='res-name font-bold text-2xl'>{restaurantInfo[0].card?.card?.text}</h1>
			<div className='res-info'>
				<h3>
					{avgRating} ({totalRatingsString}) - {costForTwoMessage}
				</h3>
				<h4 className='cuisine'>{cuisines.join(', ')}</h4>
				<h3>{sla?.slaString}</h3>
				{expectationNotifiers?.map((each) => {
					return (
						<div className='flex expectation-notifier' key={each.enrichedText}>
							<img src={CONSTANTS.CLOUDANARY_LOCATION + each?.icon.imageId} alt='Image' />
							{each?.enrichedText}
						</div>
					);
				})}
			</div>

			<h1>Recommended</h1>
			<div className='menu-items'>
				{recommendedCards.map((eachCard) => {
					return (
						<div className='menu-item' key={eachCard.card?.info?.id}>
							<div className='menu-info'>
								<h3 className='menu-name'>{eachCard.card?.info?.name}</h3>
								<h4 className='menu-price'>
									{eachCard.card?.info?.finalPrice ? (
										<React.Fragment>
											<span className='strikethrough'>₹{eachCard.card?.info?.price / 100}</span>
											<span>₹{eachCard.card?.info?.finalPrice / 100}</span>
										</React.Fragment>
									) : (
										<span>₹{eachCard.card?.info?.price / 100}</span>
									)}
								</h4>
								<div className='menu-desc'>{eachCard.card?.info?.description}</div>
							</div>
							{eachCard.card?.info?.imageId ? <img src={CONSTANTS.CLOUDANARY_LOCATION + eachCard.card?.info?.imageId} alt='Image' className='menu-img' /> : <div></div>}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantMenuComponent;
