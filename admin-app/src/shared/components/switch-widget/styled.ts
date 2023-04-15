import styled from "styled-components";
import { WidgetName } from "shared/widget/styled";

export const StyledWidget = styled.div`
	max-width: 1000px;
	font-size: 2.4rem;
	color: white;
	${WidgetName} {
		color: white;
		font-size: 1.6rem;
	}
`;

export const Description = styled.div`
	color: #878787;
	font-size: 1.4rem;
	margin: 5px 0 15px 0;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
