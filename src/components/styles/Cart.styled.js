import styled from 'styled-components';
import theme from '../../utils/theme';

export const Cart = styled.div`
	margin-bottom: 5rem;

	.img {
		width: 15%;
		height: 9rem;
	}

	.desc {
		width: 45%;
	}

	.increment-button {
		width: 9%;
		height: 2rem;

		span {
			font-weight: 700;
		}

		button {
			width: 1.3rem;
			border-radius: 50%;

			&:hover {
				background-color: #b5b5b552;
			}
		}
	}

	h2 {
		font-size: 1.1rem;
		font-weight: 600;
		line-height: 1.6rem;
	}

	h3 {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.5rem;
	}

	h6 {
		font-size: 0.7rem;
		font-weight: 500;
		line-height: 1rem;
		margin-top: 4px;
	}

	h5 {
		font-size: 0.7rem;
		font-weight: 500;
		opacity: 0.6;
		line-height: 1rem;
	}
`;

export const CartItem = styled.div`
	padding-bottom: 2rem;
	margin: 2rem 0;
	border-bottom: 1px solid ${theme.colors.borderColor};

	img {
		width: 1.2rem;
		height: 1.3rem;
	}
`;

export const CartFooter = styled.div`
	a {
		white-space: nowrap;
		padding: 10px;
		border-radius: 10px;
		color: ${theme.colors.orange};

		&:hover {
			background-color: #b5b5b552;
		}

		div {
			width: 100%;
		}
	}

	.price {
		font-size: 1.3rem;

		h2 {
			font-size: 1.5rem;
			margin-left: 1rem;
		}
	}
`;

export const EmptyCart = styled.div`
	text-align: center;
	height: 100%;

	img {
		width: 30%;
	}
`;
