import React from "react";
// import User from "../../../public/assets/icons/user.svg";
// import Settings from "../../../public/assets/icons/settings.svg";
export enum IconName {
	user = "user",
	settings = "settings",
}

export interface IconProps {
	name: IconName;
}

export const Icon = ({ name }: IconProps) => {
	switch (name) {
		// case IconName.user:
		// return <User />;
		// case IconName.settings:
		// 	return <Settings />;
		default:
			return <></>;
	}
};
