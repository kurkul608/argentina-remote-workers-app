import styled, { css } from "styled-components";

export const StyledWrapper = styled.div``;
export const StyledAccordionMenu = styled.div<{ isHidden: boolean }>`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	user-select: none;
`;
export const StyledIcon = styled.div<{ isHidden: boolean }>`
	${(props) =>
		props.isHidden
			? css`
					&:after {
						content: "\\02795";
						font-size: 13px;
						color: #777;
						float: right;
						margin-left: 5px;
					}
			  `
			: css`
					&:after {
						content: "\\2796";
					}
			  `}
`;

export const StyledAccordion = styled.div<{
	isHidden: boolean;
	height: string;
}>`
	transition: max-height 0.3s ease-out;
	overflow: hidden;
	${(props) =>
		props.isHidden
			? css`
					max-height: 0;
			  `
			: css`
					max-height: ${props.height};
			  `};
`;

export const StyledTitle = styled.div<{ isHidden: boolean }>`
	cursor: pointer;
`;
