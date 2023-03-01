import React from "react";
import { TableWidget } from "shared/components/table-widget";
import { SwitchWidget } from "shared/components/switch-widget";
import { ContentWrapper } from "shared/chat/components/chat-settings/components/members-rights-page/styled";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateToggleFiled } from "shared/chat/redux/chat-settings/chat-settings.slice";

export const RightsAdmin = () => {
	const { userRights } = useAppSelector((state) => ({
		userRights: state.chatSettings.config.userRights.admin,
	}));
	const dispatch = useAppDispatch();
	const callBack = (value: boolean) => {
		dispatch(
			updateToggleFiled({
				field: "userRights.admin.allowChatAdminCallCommands",
				value,
			})
		);
	};
	return (
		<ContentWrapper>
			<TableWidget title={"Admin List"} content={userRights.adminList} />
			<SwitchWidget
				name={"Allow chat admins to call bot commands"}
				description={"Allow chat admins to call bot commands"}
				value={userRights.allowChatAdminCallCommands}
				callback={callBack}
			/>
			);
		</ContentWrapper>
	);
};
