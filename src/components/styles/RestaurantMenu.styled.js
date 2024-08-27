import styled from 'styled-components';

export const MenuItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 2rem 0;
	border-bottom: 1px solid #c2bfbf;

	img {
		width: 200px;
		border-radius: 10px;
	}
`;

export const MenuInfo = styled.div`
	line-height: 30px;
	width: 60%;
`;

export const Strikethrough = styled.span`
	text-decoration: line-through;
	opacity: 0.7;
	margin-right: 5px;
`;

export const Cuisines = styled.div`
	color: #ff5200;
	text-decoration: underline;
	font-weight: 700;
`;
