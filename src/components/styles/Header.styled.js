import styled from 'styled-components';

export const StyledHeader = styled.div`
	background-color: white;
	position: fixed;
	padding: 1rem;
	box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
	top: 0;
	z-index: 100;
	width: 100%;

	svg {
		width: 1rem;
	}

	.links {
		width: 50%;

		> a {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			white-space: nowrap;

			&:hover {
				color: rgb(251 146 60);
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
