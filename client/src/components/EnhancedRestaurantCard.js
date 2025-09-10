import { RestaurantCardStyled } from './styles/RastaurantCard.styled';

export const enhancedRestaurantCard = (OriginalComponent) => {
	return (props) => {
		return (
			<RestaurantCardStyled>
				<label htmlFor={'res-card-' + props.index} className='p-2 z-10 absolute bg-black text-white m-2 ml-[-5] rounded-md font-bold'>
					Promoted
				</label>
				<OriginalComponent {...props} />
			</RestaurantCardStyled>
		);
	};
};
