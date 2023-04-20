import React from "react";
import {
	MenuItem,
	MenuTable,
	StyledWrapper,
} from "shared/components/tab-menu/styled";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";

export interface ITabMenu {
	name: string;
	route: Routes;
}

export interface ITabMenuProps {
	items: ITabMenu[];
	baseRoute: Routes[];
}

const selector = (state: IRootState) => ({
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
});

export const TabMenu = ({ baseRoute, items }: ITabMenuProps) => {
	const { chatInfo } = useAppSelector(selector);

	return (
		<StyledWrapper>
			<MenuTable>
				{items.map((item, i) => (
					<MenuItem
						end
						key={`menu--item--${i}`}
						to={
							chatInfo
								? routeBuilderWithReplace(
										[...baseRoute, item.route],
										"chatId",
										chatInfo.id
								  )
								: Routes.admin
						}
					>
						{item.name}
					</MenuItem>
				))}
			</MenuTable>
		</StyledWrapper>
	);
};
