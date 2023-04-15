import React from "react";
import { TableWidget } from "shared/components/table-widget";
import { ContentWrapper } from "shared/chat/components/chat-settings/components/members-rights-page/styled";

export const MembersPage = () => {
	return (
		<ContentWrapper>
			<TableWidget
				title={"Users who change the bot settings on the site"}
				description={
					"Users who are here on the site can configure greeting, moderation, chat activity, reputation, log, triggers, etc."
				}
				content={[
					"solpio",
					"petyan",
					"dick",
					"jopa",
					"zalupa",
					"admin",
					"loh",
					"kekw",
				]}
			/>
			<TableWidget
				title={"Users who control the bot using commands"}
				description={
					"You can see the list of commands by link. The users in this list are not subject to the chat rules"
				}
				content={[
					"solpio",
					"petyan",
					"dick",
					"jopa",
					"zalupa",
					"admin",
					"loh",
					"kekw",
				]}
			/>
			<TableWidget
				title={"Users who will not be affected by filters"}
				description={"Users who will not be affected by filters\n"}
				content={[
					"solpio",
					"petyan",
					"dick",
					"jopa",
					"zalupa",
					"admin",
					"loh",
					"kekw",
				]}
			/>
			);
		</ContentWrapper>
	);
};
