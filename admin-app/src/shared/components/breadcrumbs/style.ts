import styled from "styled-components";
import { color } from "constants/colors";

export const BreadcrumbsWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

export const Breadcrumb = styled.div`
	cursor: pointer;
	color: ${(props) => color(props.theme.mainTheme).regularTabText};
	&:hover {
		border-bottom: 1px gray solid;
	}

	&:last-child {
		cursor: default;
		color: ${(props) => color(props.theme.mainTheme).activeTabText};
		border-bottom: 1px
			${(props) => color(props.theme.mainTheme).breadcrumbsBorderColorActive}
			solid;
	}
`;

export const Separator = styled.div`
	user-select: none;
	color: ${(props) => color(props.theme.mainTheme).regularTabText};
`;
