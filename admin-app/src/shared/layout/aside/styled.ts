import styled from "styled-components";
import { color } from "constants/colors";
import { StyledAccordionMenu } from "shared/components/accordion/styled";

export const StyledAside = styled.aside`
	height: 100%;
	width: 240px;
	flex: 1 0 240px;
	background-color: ${(props) => color(props.theme.mainTheme).widgetBackGround};
`;

export const StyledNavBar = styled.ul`
	width: 100%;
	a {
		padding-left: 15px;
		padding-right: 15px;
		width: 100%;
		height: 42px;
		display: flex;
		gap: 10px;
		align-items: center;

		&:hover {
			background-color: ${(props) =>
				color(props.theme.mainTheme).activeNavLinkBackground};
			p {
				color: ${(props) => color(props.theme.mainTheme).activeTabText};
			}
		}
		svg {
			height: 20px;
			width: auto;
			fill: white;
		}
		p {
			font-size: 1.3rem;
			color: ${(props) => color(props.theme.mainTheme).regularTabText};
			text-transform: uppercase;
		}
	}
	.active-nav-link {
		background-color: ${(props) =>
			color(props.theme.mainTheme).activeNavLinkBackground};
		p {
			color: ${(props) => color(props.theme.mainTheme).activeTabText};
		}
	}
`;

export const AsideAccordion = styled.div`
	${StyledAccordionMenu} {
		padding-left: 15px;
		padding-right: 15px;
		width: 100%;
		height: 42px;
		display: flex;
		gap: 10px;
		align-items: center;
		font-size: 1.3rem;
		color: ${(props) => color(props.theme.mainTheme).regularTabText};
		text-transform: uppercase;
		&:hover {
			background-color: ${(props) =>
				color(props.theme.mainTheme).activeNavLinkBackground};
		}
	}
	.accordion--active {
		color: ${(props) => color(props.theme.mainTheme).activeTabText};
	}
`;
