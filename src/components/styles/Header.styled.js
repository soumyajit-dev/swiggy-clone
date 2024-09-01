import styled from 'styled-components';
import theme from '../../Services/Providers/theme';

export const StyledHeader = styled.div`
	background-color: white;
	position: fixed;
	padding: 1rem;
	box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
	top: 0;
	z-index: 100;
	width: 100%;

	svg {
		font-size: 14px;
		fill: #282c3f;
		stroke-width: 1px;
	}

	.links {
		width: 50%;

		> a {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			white-space: nowrap;

			&:hover {
				color: ${theme.colors.orange};
				svg {
					stroke: ${theme.colors.orange};
					fill: ${theme.colors.orange};
				}
			}
		}
	}
`;

export const Logo = styled.img`
	src: ${({ src }) => src};
	width: 2rem;
	margin-left: 1rem;

	&:hover {
		transform: scale(1.1);
	}
`;

export const HeaderIcon = styled.img`
	width: 1rem;
	stroke: red;
`;

export const CartIcon = styled.span`
	position: absolute;
	top: 50%;
	left: 0;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	line-height: 0;

	> svg {
		fill: ${({ $itemCount }) => ($itemCount > 0 ? theme.colors.green : '#fff')};
		stroke-width: 2px;
		stroke: ${({ $itemCount }) => ($itemCount > 0 ? theme.colors.green : '#282c3f')};
		position: relative;
	}

	> span {
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		font-size: 14px;
		font-weight: 600;
		color: ${({ $itemCount }) => ($itemCount > 0 ? theme.colors.white : '#282c3f')};
	}
`;
