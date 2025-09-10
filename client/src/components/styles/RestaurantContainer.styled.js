import styled from 'styled-components';
import theme from '../../Services/Providers/theme';

export const RestaurantContainer = styled.div`
	background-color: ${theme.colors.white};
	padding: 1rem;
	display: grid;
	align-items: center;
	cursor: pointer;
	width: ${({ $width }) => ($width ? `${$width}%` : '48%')};

	.image {
		width: 9rem;
		height: 9rem;
		object-fit: cover;
		border: 1px solid #686b78;
		border-radius: 12px;
	}

	svg {
		width: 0.7rem;
		fill: #686b78;
	}

	p {
		margin-top: 4px;
		text-overflow: ellipsis;
		color: #93959f;
		overflow: hidden;
		/* white-space: nowrap; */
	}
`;
