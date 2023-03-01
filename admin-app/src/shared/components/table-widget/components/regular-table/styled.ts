import styled from "styled-components";

export const ContentWrapper = styled.div`
	position: relative;
	width: 100%;
	background-color: #1c1c1c;
	padding: 10px;
	border-radius: 14px;
	color: white;
	font-size: 1.2rem;
`;
export const Total = styled.span`
	display: block;
	font-size: 1.4rem;
	margin: 5px 0 5px 10px;
	text-align: left;
`;

export const ItemsTable = styled.ul`
	overflow-y: auto;
	max-height: 250px;
	position: relative;
	padding-right: 10px;
	&::-webkit-scrollbar {
		background-color: rgb(25, 25, 25);
		width: 10px;
		height: 10px;
	}
	&::-webkit-scrollbar-button {
		display: none;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgb(15, 15, 15);
		border-radius: 10px;
		border: 3px solid rgb(25, 25, 25);
	}
	&::-webkit-scrollbar-track {
		background-color: rgb(25, 25, 25);
	}
`;
export const Item = styled.li`
	color: #ffffff;
	margin: 10px 0;
	padding: 12px 0;
	background-color: #222020;
	display: flex;
	justify-content: space-between;
	font-size: 1.4rem;
	border-radius: 10px; ;
`;
export const NameWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;
`;
export const Link = styled.div``;
export const Name = styled.div``;
export const Status = styled.div`
	margin-right: 20px;
`;
export const FireButton = styled.button``;
