import React from "react";
import { TitleWrapper } from "./styled";

interface ITitle {
  titleElement: React.ReactNode;
}

export const Title = ({ titleElement }: ITitle) => {
  return <TitleWrapper>{titleElement}</TitleWrapper>;
};
