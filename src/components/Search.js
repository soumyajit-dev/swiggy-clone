import { useState } from 'react';
import { useGetLandingCuisinesForSearchQuery, useLazyGetSearchedRestaurantsQuery } from '../redux/services/restaurantApi';
import CONSTANTS from '../utils/constant';
import { Flex } from './styles/Flex.styled';
import { SearchField } from './styles/SearchField.styled';
import { Search, SearchCuisines, SearchResult } from './styles/SearchPage.styled';

const SearchComponent = () => {
	const { data: cuisinesInfo } = useGetLandingCuisinesForSearchQuery();
	const [searchText, setSearchText] = useState('');
	const [fetchSearchData, { data: searchResults, isLoading }] = useLazyGetSearchedRestaurantsQuery();

	// const fetchSearchData = () => {
	// 	const axiosData = await axios.get(CONSTANTS.SWIGGY_SEARCH_API + searchText);
	// 	setSearchResult(axiosData?.data?.data?.suggestions);
	// };

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
					<button className='search-button' type='submit' title='search-button' onClick={() => fetchSearchData(searchText)}>
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
							<SearchResult key={eachResult.id}>
								<Flex $justify='flex-start' $gap='15px'>
									<img src={CONSTANTS.CLOUDANARY_LOCATION + eachResult.cloudinaryId} />
									<div>
										<h2>{eachResult.highlightedText}</h2>
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
