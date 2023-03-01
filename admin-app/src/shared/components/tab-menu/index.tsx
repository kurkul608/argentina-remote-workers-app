import React from "react";
import {
	MenuItem,
	MenuTable,
	StyledWrapper,
} from "shared/components/tab-menu/styled";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { useAppSelector } from "redux/hooks";

export interface ITabMenu {
	name: string;
	route: Routes;
}

export interface ITabMenuProps {
	items: ITabMenu[];
	baseRoute: Routes[];
}

export const TabMenu = ({ baseRoute, items }: ITabMenuProps) => {
	const { chatInfo } = useAppSelector((state) => state.chat.data);
	return (
		<StyledWrapper>
			<MenuTable>
				{items.map((item, i) => (
					<MenuItem
						end
						key={`menu--item--${i}`}
						to={routeBuilderWithReplace(
							[...baseRoute, item.route],
							"chatId",
							chatInfo.id
						)}
					>
						{item.name}
					</MenuItem>
				))}
			</MenuTable>
		</StyledWrapper>
	);
};
