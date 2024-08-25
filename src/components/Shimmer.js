import { Flex } from './styles/Flex.styled';
import { ShimmerCard, ShimmerSearch, ShimmerStyled } from './styles/Shimmer.styled';

const Shimmer = () => {
	return (
		<ShimmerStyled>
			<ShimmerSearch></ShimmerSearch>
			<Flex $justify='space-between' className='main-body'>
				{Array(12)
					.fill(null)
					.map((each, index) => {
						return <ShimmerCard key={index}></ShimmerCard>;
					})}
			</Flex>
		</ShimmerStyled>
	);
};

export default Shimmer;
