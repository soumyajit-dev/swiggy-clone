import styled from 'styled-components';
import theme from '../../utils/theme';

export const AddedMenuButton = styled.div`
	width: ${({ $width }) => $width || '100%'};
	border: ${({ $border }) => ($border ? `1px solid ${$border}` : 'none')};
	border-radius: 10px;
	background-color: ${theme.colors.white};
	font-size: 1.2rem /* 20px */;
	line-height: 1.75rem;
	font-weight: 600;
	color: rgb(74 222 128);
	cursor: pointer;

	button {
		width: 30%;
		padding: 7.5px;

		&:first-child {
			border-radius: 10px 0 0 10px;
		}

		&:last-child {
			border-radius: 0 10px 10px 0;
		}

		&:hover {
			background-color: #b5b5b552;
		}
	}
`;
