import { Link } from 'react-router-dom';
import CONSTANTS from '../utils/constant';
import { Flex } from './styles/Flex.styled';
import { RestaurantContainer } from './styles/RestaurantContainer.styled';
import { DisplayContainer } from './styles/SearchResInfo.styled';

const RestaurantContainerComponent = ({ detail }) => {
	return detail['@type'] !== 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantCollection' ? (
		<RestaurantContainer>
			<Link to={'/restaurants/' + detail?.info?.id} className='w-full'>
				<Flex $justify='flex-start'>
					{detail?.info?.cloudinaryImageId && <img src={CONSTANTS.CLOUDANARY_LOCATION + detail?.info?.cloudinaryImageId} className='image' />}
					<div className='ml-4 w-6/12'>
						<h2>{detail?.info?.name}</h2>
						<Flex $justify='flex-start' $gap='4px'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
								<path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
							</svg>
							<h6>{detail?.info?.avgRating}</h6>
							<div>.</div>
							<h6>{detail?.info?.sla?.slaString}</h6>
							<div>.</div>
							<h6>{detail?.info?.costForTwoMessage}</h6>
						</Flex>
						<p>{detail?.info?.cuisines.join(', ')}</p>
					</div>
				</Flex>
			</Link>
		</RestaurantContainer>
	) : (
		<div key={detail?.info?.id}>
			<h2>More Restaurants</h2>
			<DisplayContainer>
				{detail?.restaurants?.map((eachRes) => {
					return (
						<RestaurantContainer key={eachRes?.info?.id}>
							<Link to={'/restaurants/' + eachRes?.info?.id} className='w-full'>
								<Flex $justify='flex-start' $gap='4px'>
									{eachRes?.info?.cloudinaryImageId && <img src={CONSTANTS.CLOUDANARY_LOCATION + eachRes?.info?.cloudinaryImageId} className='image' />}
									<div className='ml-4 w-6/12'>
										<h2>{eachRes?.info?.name}</h2>
										<Flex $justify='flex-start' $gap='4px'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
												<path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
											</svg>
											<h6>{eachRes?.info?.avgRating}</h6>
											<div>.</div>
											<h6>{eachRes?.info?.sla?.slaString}</h6>
											<div>.</div>
											<h6>{eachRes?.info?.costForTwo}</h6>
										</Flex>
										<p>{eachRes?.info?.cuisines.join(', ')}</p>
									</div>
								</Flex>
							</Link>
						</RestaurantContainer>
					);
				})}
			</DisplayContainer>
		</div>
	);
};

export default RestaurantContainerComponent;
