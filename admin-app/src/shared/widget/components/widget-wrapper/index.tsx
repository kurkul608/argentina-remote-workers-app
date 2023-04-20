import React from "react";
import { Wrapper } from "shared/widget/components/widget-wrapper/styled";
import { widgetSize } from "constants/size";
interface IWidgetWrapper {
	children: React.ReactNode;
}
export const WidgetWrapper = ({ children }: IWidgetWrapper) => {
	return <Wrapper size={widgetSize.small}>{children}</Wrapper>;
};
