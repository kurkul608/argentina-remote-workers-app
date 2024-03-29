import { Theme } from "./theme";

export enum ColorsDark {
	backGround = "#212227",
	activeTabText = "#ffffff",
	regularTabText = "#7b777a",
	breadcrumbsTitleText = "#beb7b7",
	widgetTitleText = "#bdb7b9",
	widgetMainText = "#beb7b7",
	baseText = "#f7b03e",
	baseWhiteText = "#ffffff",
	widgetBackGround = "#23262d",
	activeNavLinkBackground = "#30333c",
	widgetBorderColor = "#272a31",
	authInputLabel = "#7e7d7d",
	authInputFilled = "#ffffff",
	inputErrorColor = "#d32d41",
	chatPhotoBackgroundColor = "#db863b",
	chatHoverBackgroundColor = "#545454",
	inputCheckedColor = "#17A625",
	inputUncheckedColor = "#BDBDBD",
	breadcrumbsBorderColorActive = "#ff0000ff",
	pageTitle = "#ffffff",
	messageWidgetBorderColor = "#3C414B",
	limitCircleBaseColor = "#5684fd",
	limitCircleSecondaryColor = "#F98215",
	limitCircleErrorColor = "#F53656",
}
export enum ColorsLight {
	backGround = "#f1f3f6",
	activeTabText = "#f7b03e",
	regularTabText = "#7b777a",
	breadcrumbsTitleText = "#444444",
	widgetTitleText = "#bdb7b9",
	widgetMainText = "#444444",
	baseText = "#f7b03e",
	baseWhiteText = "#ffffff",
	widgetBackGround = "#ffffff",
	activeNavLinkBackground = "#eeeeee",
	widgetBorderColor = "#e4e5e7",
	authInputLabel = "#7e7d7d",
	authInputFilled = "#000000",
	inputErrorColor = "#d32d41",
	chatPhotoBackgroundColor = "#db863b",
	chatHoverBackgroundColor = "#C8C8C8",
	inputCheckedColor = "#17A625",
	inputUncheckedColor = "#BDBDBD",
	breadcrumbsBorderColorActive = "#ff0000ff",
	pageTitle = "#000000",
	messageWidgetBorderColor = "#3C414B",
	limitCircleBaseColor = "#5684fd",
	limitCircleSecondaryColor = "#F98215",
	limitCircleErrorColor = "#F53656",
}

export const color = (theme: Theme) => {
	return theme === Theme.dark ? ColorsDark : ColorsLight;
};
