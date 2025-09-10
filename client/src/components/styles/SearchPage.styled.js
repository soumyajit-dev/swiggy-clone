import styled from 'styled-components';

export const Search = styled.div`
	padding-top: 2rem;
`;

export const SearchCuisines = styled.div`
	margin-top: 4rem;

	h1 {
		font-size: 1.43rem;
		font-weight: 800;
		letter-spacing: -0.3px;
		line-height: 2rem;
		margin-bottom: 2rem;
		font-family: 'ProximaNovaExtraBold', arial, 'Helvetica Neue', sans-serif;
	}

	img {
		width: calc(-13.1765px + 5.88235vw);
		height: calc(-18.7245px + 8.35913vw);
		min-width: calc(-13.1765px + 5.88235vw);
		min-height: calc(-18.7245px + 8.35913vw);
		cursor: pointer;
	}
`;

export const SearchResult = styled.div`
	padding: 14px 16px 14px 0;
	margin-left: 16px;
	width: 95%;
	cursor: pointer;

	&:hover {
		background: #f2f6fc;
		color: #282c3f;
	}

	img {
		width: 64px;
		height: 64px;
		border-radius: 4px;
	}

	h2 {
		font-size: 1.07rem;
		margin-bottom: 1px;
	}

	h4 {
		color: rgb(104, 107, 120);
		font-size: 1rem;
	}
`;
