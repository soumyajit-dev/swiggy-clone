import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.div`
	width: 70%;
	padding: 0 5rem;
	margin: 0 auto;
	margin-top: 6rem;

	@media (max-width: ${theme.view.tablet}) {
		width: 100%;
	}
`;
