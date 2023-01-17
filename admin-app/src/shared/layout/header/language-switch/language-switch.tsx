import React from "react";
import { LanguageSwitchButton, LanguageSwitchWrapper } from "./styled";
import { useTranslation } from "react-i18next";

export const LanguageSwitch = () => {
	const { i18n } = useTranslation("translation");
	const changeLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
		const target = event.target as HTMLButtonElement;
		i18n.changeLanguage(target.value);
	};
	return (
		<LanguageSwitchWrapper>
			<LanguageSwitchButton
				type={"button"}
				value={"ru"}
				onClick={changeLanguage}
				active={i18n.language === "ru"}
			>
				ru
			</LanguageSwitchButton>
			<LanguageSwitchButton
				type={"button"}
				value={"en"}
				onClick={changeLanguage}
				active={i18n.language === "en"}
			>
				en
			</LanguageSwitchButton>
		</LanguageSwitchWrapper>
	);
};
