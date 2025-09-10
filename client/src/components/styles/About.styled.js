import styled from 'styled-components';

export const About = styled.div`
	padding: 3rem;
	display: grid;
	gap: 2rem;
`;

export const UserCard = styled.div`
	padding: 20px;
	display: flex;
	gap: 5rem;
	align-items: center;
	border: 1px solid rgb(109, 109, 109);
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	border-radius: 10px;
	background-color: #f6f6f6;
	line-height: 30px;

	img {
		margin-bottom: 2rem;
		width: 20%;
	}
`;
