import styled from 'styled-components';

export const SearchResInfo = styled.div``;

export const Tab = styled.button`
	padding: 10px;
	border-radius: 4rem;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ $resTab, $selectedTab }) => ($selectedTab ? $resTab.selectedBorderColor : '#a1a1a1')};
	color: ${({ $resTab, $selectedTab }) => ($selectedTab ? $resTab.selectedTextColor : '#696969')};
	background-color: ${({ $resTab, $selectedTab }) => ($selectedTab ? $resTab.selectedBgColor : $resTab.unselectedBgColor)};
`;

export const DisplayContainer = styled.div`
	background-color: #f4f5f7;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	padding: 1rem;
	gap: 1rem;
`;
