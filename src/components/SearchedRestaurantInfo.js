import { useEffect, useRef } from 'react';
import { useLazyGetSelectedRestaurantResultQuery } from '../redux/services/restaurantApi';
import DishContainerComponent from './DishContainer';
import RestaurantContainerComponent from './RestaurantContainer';
import Shimmer from './Shimmer';
import { Flex } from './styles/Flex.styled';
import { Grid } from './styles/Grid.styled';
import { DisplayContainer, SearchResInfo, Tab } from './styles/SearchResInfo.styled';

const SearchedRestaurantInfo = ({ queriedStr }) => {
	const [fetchResResults, { data: selectedResDetails, isLoading, isFetching }] = useLazyGetSelectedRestaurantResultQuery();
	const tabs = useRef([]);
	let resResults = [];
	const selectedTab = useRef('');

	useEffect(() => {
		fetchResResults({ queriedStr, id: null });
		console.log(isFetching);
	}, []);

	useEffect(() => {}, [selectedResDetails]);

	if (isFetching || isLoading || !selectedResDetails?.length) return <Shimmer />;

	!isFetching &&
		selectedResDetails?.forEach((eachDetail) => {
			if (eachDetail?.card?.card['@type'] === 'type.googleapis.com/swiggy.gandalf.widgets.v2.Navigation') {
				tabs.current = eachDetail?.card?.card?.tab;
				selectedTab.current = tabs.current.find((eachTab) => eachTab?.selected)?.id;
				return;
			}
			resResults = eachDetail?.groupedCard?.cardGroupMap?.[selectedTab.current]?.cards;
		});

	return (
		<SearchResInfo>
			<Grid $align='flex-start'>
				<Flex $justify='flex-start'>
					{tabs.current?.length > 0 &&
						tabs.current.map((eachTab) => {
							return (
								<Tab
									key={eachTab.id}
									$resTab={eachTab}
									$selectedTab={eachTab.id === selectedTab.current}
									onClick={() => {
										if (eachTab.id !== selectedTab.current) {
											selectedTab.current = eachTab.id;
											fetchResResults({ queriedStr, id: selectedTab.current });
										}
									}}>
									{eachTab.title}
								</Tab>
							);
						})}
				</Flex>

				<DisplayContainer>
					{resResults.map((eachRes) => {
						const detail = eachRes?.card?.card;

						return selectedTab.current !== 'RESTAURANT' ? (
							<DishContainerComponent key={detail?.info?.id} detail={detail} />
						) : (
							<RestaurantContainerComponent key={detail?.info?.id} detail={detail} />
						);
					})}
				</DisplayContainer>
			</Grid>
		</SearchResInfo>
	);
};

export default SearchedRestaurantInfo;
