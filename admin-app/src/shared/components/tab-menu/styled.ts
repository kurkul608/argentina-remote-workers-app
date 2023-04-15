import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.div`
	width: 100%;
	border-bottom: 1px solid gray;
	font-size: 2.2rem;
	padding-bottom: 5px;
`;

export const MenuTable = styled.ul`
	display: flex;
	gap: 30px;
	text-transform: uppercase;
`;
export const MenuItem = styled(NavLink)`
	position: relative;
	color: gray;
	cursor: pointer;
	&.active {
		color: white;
		cursor: default;
		&:after {
			position: absolute;
			bottom: -6px;
			width: 100%;
			display: block;
			content: "";
			border-bottom: 1px solid white;
			z-index: 1;
		}
	}
`;
