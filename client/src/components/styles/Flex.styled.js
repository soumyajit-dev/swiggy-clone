import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${({ $justify }) => $justify || 'center'};
	gap: ${({ $gap }) => $gap || '10px'};
	height: 100%;
`;
