import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchedRestaurantInfo from '../Components/SearchedRestaurantInfo';
import { Flex } from '../Components/styles/Flex.styled';
import { Icon } from '../Components/styles/Icon.styled';
import { SearchField } from '../Components/styles/SearchField.styled';
import { Search, SearchCuisines, SearchResult } from '../Components/styles/SearchPage.styled';
import { useGetLandingCuisinesForSearchQuery, useGetSearchedRestaurantsQuery } from '../Services/API/restaurantApi';
import CONSTANTS from '../Utils/constant';
import { useDebounce } from '../Utils/CustomHooks';

const SearchComponent = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchText, setSearchText] = useState(searchParams.get('query') || '');
	let resultSelected = searchParams.get('query');
	const { data: cuisinesInfo } = useGetLandingCuisinesForSearchQuery(null, {
		skip: resultSelected,
	});
	const debouncedSearchText = useDebounce(searchText);
	const { data: searchResults, isLoading } = useGetSearchedRestaurantsQuery(debouncedSearchText, {
		skip: resultSelected || !debouncedSearchText || debouncedSearchText === '',
	});

	const routeToRestaurant = (data) => {
		if (window.history.pushState) {
			const updatedSearchParams = new URLSearchParams();
			if (data) updatedSearchParams.set('query', data);
			resultSelected = data;
			setSearchParams(updatedSearchParams.toString());
		}
	};

	return (
		<Search>
			<SearchField>
				<Flex>
					{resultSelected && (
						<Icon
							src={process.env.imagesBasePath + 'arrow-left.svg'}
							alt=''
							onClick={() => {
								routeToRestaurant();
							}}
						/>
					)}
					{resultSelected ? (
						<div className='w-full ml-2'>{resultSelected}</div>
					) : (
						<input
							className='search-input'
							title='search-input'
							type='text'
							value={searchText}
							placeholder='Search...'
							onInput={(e) => {
								setSearchText(e.target.value);
							}}
						/>
					)}
					{searchText ? (
						<Icon className='mr-3' src={process.env.imagesBasePath + 'cross-icon.svg'} alt='' onClick={() => setSearchText('')} />
					) : (
						<button className='search-button' type='submit' title='search-button'>
							Search
						</button>
					)}
				</Flex>
			</SearchField>

			{!resultSelected ? (
				!searchText || searchText === '' ? (
					cuisinesInfo &&
					cuisinesInfo?.map((eachCuisine) => {
						const card = eachCuisine?.card?.card;
						return (
							card?.gridElements && (
								<SearchCuisines key={card.id}>
									<h1>{card?.title || 'Popular Cuisines'}</h1>
									<Flex $gap='0'>
										{card?.gridElements?.infoWithStyle?.info?.map((eachInfo) => {
											return <img key={eachInfo.id} src={CONSTANTS.CLOUDANARY_LOCATION + eachInfo?.imageId} onClick={() => setSearchText(eachInfo.action.link.split('=')[1])} />;
										})}
									</Flex>
								</SearchCuisines>
							)
						);
					})
				) : (
					!isLoading &&
					searchResults?.length > 0 &&
					searchResults.map((eachResult) => {
						return (
							<SearchResult key={eachResult.cloudinaryId} onClick={() => routeToRestaurant(eachResult.text)}>
								<Flex $justify='flex-start' $gap='15px'>
									<img src={CONSTANTS.CLOUDANARY_LOCATION + eachResult.cloudinaryId} />
									<div>
										<h2>{eachResult.text}</h2>
										<h4>{eachResult.subCategory}</h4>
									</div>
								</Flex>
							</SearchResult>
						);
					})
				)
			) : (
				<SearchedRestaurantInfo queriedStr={resultSelected} />
			)}
		</Search>
	);
};

export default SearchComponent;
