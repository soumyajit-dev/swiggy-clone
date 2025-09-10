import styled from 'styled-components';
import theme from '../../Services/Providers/theme';

export const Container = styled.div`
	width: 60%;
	margin: 0 auto;
	margin-top: 6rem;

	@media (max-width: ${theme.view.tablet}) {
		width: 90%;
	}
`;
