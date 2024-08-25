import styled from 'styled-components';
import theme from '../../utils/theme';

export const LinkButton = styled.button`
	padding: 9px;
	font-size: 1rem;
	font-weight: 500;
	color: ${theme.colors.orange};
	cursor: pointer;

	&:hover {
		background-color: #b5b5b552;
		border-radius: 10px;
	}
`;
