import styled from 'styled-components';

export const Grid = styled.div`
	height: ${({ $height }) => $height || '100%'};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;
