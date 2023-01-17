import React from "react";
import { WidgetName, WidgetWrapper } from "./styled";

interface IOwnProps {
  name: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
export const Widget = ({ name, children, onClick }: IOwnProps) => {
  return (
    <WidgetWrapper onClick={onClick}>
      <WidgetName>{name ?? ""}</WidgetName>
      {children}
    </WidgetWrapper>
  );
};
