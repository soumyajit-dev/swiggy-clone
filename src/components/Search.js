import { useState } from 'react';
import { useGetLandingCuisinesForSearchQuery, useGetSearchedRestaurantsQuery } from '../redux/services/restaurantApi';
import CONSTANTS from '../utils/constant';
import { useDebounce } from '../utils/CustomHooks';
import { Flex } from './styles/Flex.styled';
import { SearchField } from './styles/SearchField.styled';
import { Search, SearchCuisines, SearchResult } from './styles/SearchPage.styled';

const SearchComponent = () => {
	const { data: cuisinesInfo } = useGetLandingCuisinesForSearchQuery();
	const [searchText, setSearchText] = useState('');
	const debouncedSearchText = useDebounce(searchText);
	const { data: searchResults, isLoading } = useGetSearchedRestaurantsQuery(debouncedSearchText, {
		skip: !debouncedSearchText || debouncedSearchText === '',
	});

	return (
		<Search>
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
					<button className='search-button' type='submit' title='search-button'>
						Search
					</button>
				</Flex>
			</SearchField>

			{!searchResults?.length
				? cuisinesInfo &&
				  cuisinesInfo?.map((eachCuisine) => {
						const card = eachCuisine?.card?.card;
						return (
							card?.gridElements && (
								<SearchCuisines key={card.id}>
									<h1>{card?.title || 'Popular Cuisines'}</h1>
									<Flex>
										{card?.gridElements?.infoWithStyle?.info?.map((eachInfo) => {
											return <img key={eachInfo.id} src={CONSTANTS.CLOUDANARY_LOCATION + eachInfo?.imageId} />;
										})}
									</Flex>
								</SearchCuisines>
							)
						);
				  })
				: !isLoading &&
				  searchResults.map((eachResult) => {
						return (
							<SearchResult key={eachResult.cloudinaryId}>
								<Flex $justify='flex-start' $gap='15px'>
									<img src={CONSTANTS.CLOUDANARY_LOCATION + eachResult.cloudinaryId} />
									<div>
										<h2>{eachResult.text}</h2>
										<h4>{eachResult.subCategory}</h4>
									</div>
								</Flex>
							</SearchResult>
						);
				  })}
		</Search>
	);
};

export default SearchComponent;
