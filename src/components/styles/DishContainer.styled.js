import styled from 'styled-components';
import theme from '../../utils/theme';

export const DishContainer = styled.div`
	background-color: ${theme.colors.white};
	padding: 1rem;
	border-radius: 10px;
	display: grid;
	align-items: center;
	width: 48%;

	h2 {
		color: rgba(2, 6, 12, 0.75);
		word-break: break-word;
	}

	.image {
		width: 100%;
		height: 9rem;
		object-fit: cover;
		border: 1px solid #686b78;
		border-radius: 12px;
	}
`;

export const DishHeader = styled.div`
	border-bottom: 1px dotted #686b78;
	color: #686b78;
	margin-bottom: 1rem;

	h6 {
		font-weight: 600;
	}

	svg {
		width: 0.7rem;
		fill: #686b78;
	}
`;
