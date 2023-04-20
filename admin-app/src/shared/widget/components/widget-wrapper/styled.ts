import styled from "styled-components";
import { widgetSize } from "constants/size";
interface IWrapper {
	size: widgetSize;
}
export const Wrapper = styled.div<IWrapper>`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	row-gap: 25px;
	grid-auto-flow: row dense;
	grid-template-columns: repeat(
		4,
		${(props) => (props.size ? `${props.size}fr` : "auto")}
	);
	@media (max-width: 1900px) {
		grid-template-columns: repeat(3, ${(props) => props.size}fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, ${(props) => props.size}fr);
	}
	@media (max-width: 320px) {
		grid-template-columns: repeat(1, ${(props) => props.size}fr);
	}
`;
