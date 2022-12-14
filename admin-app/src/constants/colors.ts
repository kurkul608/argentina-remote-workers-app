import { Theme } from "./theme";

export enum ColorsDark {
  backGround = "#212227",
  activeTabText = "#ffffff",
  regularTabText = "#7b777a",
  breadcrumbsTitleText = "#beb7b7",
  widgetTitleText = "#bdb7b9",
  widgetMainText = "#beb7b7",
  dateText = "#f7b03e",
  logoText = "#ffffff",
  widgetBackGround = "#23262d",
  activeNavLinkBackground = "#30333c",
}
export enum ColorsLight {
  backGround = "#f1f3f6",
  activeTabText = "#f7b03e",
  regularTabText = "#7b777a",
  breadcrumbsTitleText = "#444444",
  widgetTitleText = "#bdb7b9",
  widgetMainText = "#444444",
  dateText = "#f7b03e",
  logoText = "#ffffff",
  widgetBackGround = "#ffffff",
  activeNavLinkBackground = "#eeeeee",
}

export const color = (theme: Theme) => {
  return theme === Theme.dark ? ColorsDark : ColorsLight;
};
