import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Widget } from "shared/widget";
import {
	Description,
	StyledWidget,
	Wrapper,
} from "shared/components/switch-widget/styled";

export interface SwitchWidgetProps {
	name: string;
	description: string;
	value: boolean;
	callback: (value: boolean) => void;
}

export const SwitchWidget = ({
	name,
	description,
	value,
	callback,
}: SwitchWidgetProps) => {
	const [isEnabled, setIsEnabled] = useState(value);
	const handleOnClick = () => {
		setIsEnabled(!isEnabled);
	};
	useEffect(() => {
		callback(isEnabled);
	}, [isEnabled]);
	return (
		<>
			<StyledWidget>
				<Widget name={name}>
					<Wrapper>
						<Description>{description}</Description>
						<Switch onClick={handleOnClick} checked={isEnabled} />
					</Wrapper>
				</Widget>
			</StyledWidget>
		</>
	);
};
