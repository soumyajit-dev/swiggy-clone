import styled from 'styled-components';
import theme from '../../Services/Providers/theme';

export const RestaurantCardStyled = styled.div`
	flex-basis: 23%;
	margin: 1rem 0;
	cursor: pointer;
	text-decoration: none;
	color: black;

	&:hover {
		transform: scale(0.95);
	}

	@media only screen and (max-width: ${theme.view.tablet}) {
		flex-basis: 30%;
	}
`;
