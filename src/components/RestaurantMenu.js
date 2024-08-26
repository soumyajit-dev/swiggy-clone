import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllMenuByRestaurantQuery } from '../redux/services/restaurantApi';
import CONSTANTS from '../utils/constant';
import MenuCardsComponent from './MenuCards';
import { restaurantMenuAccordian } from './RestaurantMenuAccordians';
import Shimmer from './Shimmer';

const RestaurantMenuComponent = () => {
	const { id } = useParams();
	const { data: restaurantInfo, isLoading } = useGetAllMenuByRestaurantQuery(id);

	const [accordianIndex, setAccordianIndex] = useState(0);

	if (isLoading || !restaurantInfo?.length) return <Shimmer />;

	const { avgRating, totalRatingsString, costForTwoMessage, cuisines, sla, expectationNotifiers } = restaurantInfo[2].card?.card?.info;

	const categories = restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
		(eachCard) =>
			eachCard?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory' ||
			eachCard?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
	);

	const RestaurantMenuAccordian = restaurantMenuAccordian(MenuCardsComponent);

	return (
		<>
			<h1 className='res-name font-bold text-2xl py-8'>{restaurantInfo[0].card?.card?.text}</h1>
			<div className='shadow-xl bg-white border border-gray-200 rounded-2xl leading-8 mb-10'>
				<div className='p-8 border-b border-gray-200'>
					<h3 className='font-bold text-xl'>
						{avgRating} ({totalRatingsString}) - {costForTwoMessage}
					</h3>
					<h4 className='cuisine font-bold'>{cuisines.join(', ')}</h4>
					<h3 className='font-bold'>{sla?.slaString}</h3>
				</div>
				{expectationNotifiers?.map((each) => {
					return (
						<div className='flex expectation-notifier gap-3 px-8 py-4' key={each.enrichedText}>
							<img src={CONSTANTS.CLOUDANARY_LOCATION + each?.icon.imageId} alt='Image' />
							<div dangerouslySetInnerHTML={{ __html: each?.enrichedText }}></div>
						</div>
					);
				})}
			</div>

			{categories.map((eachCategory, index) => {
				const category = eachCategory?.card?.card;
				return (
					<div key={category.title} className='my-4 border-b-8 border-gray-300'>
						{category['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' ? (
							<RestaurantMenuAccordian category={category} showItems={index === accordianIndex} setAccordianIndex={() => setAccordianIndex(index)} />
						) : (
							<>
								<h1 className='my-2 font-bold text-xl'>{category.title}</h1>
								{category?.categories?.map((eachNestedCategory, nestedIndex) => {
									return (
										<div key={eachNestedCategory.title}>
											{/* Controlled Component */}
											<RestaurantMenuAccordian category={eachNestedCategory} showItems={index === accordianIndex} setAccordianIndex={() => setAccordianIndex(index)} />
										</div>
									);
								})}
							</>
						)}
					</div>
				);
			})}
		</>
	);
};

export default RestaurantMenuComponent;
