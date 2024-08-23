import styled from 'styled-components';
import theme from '../../utils/theme';

export const Button = styled.button`
	padding: 7.5px;
	border: ${({ $border }) => ($border ? `1px solid ${$border}` : 'none')};
	border-radius: 10px;
	background-color: ${({ $bg }) => $bg || theme.colors.blue};
	font-size: 1.25rem /* 20px */;
	line-height: 1.75rem;
	font-weight: 700;
	color: ${({ $text }) => $text || theme.colors.white};
	cursor: pointer;
	text-transform: uppercase;

	&:hover {
		background-color: ${({ $hoverbg }) => $hoverbg || theme.colors.orange};
	}
`;
