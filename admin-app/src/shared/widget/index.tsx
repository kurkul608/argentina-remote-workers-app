import React from "react";
import { WidgetName, WidgetWrapper } from "./styled";

interface IOwnProps {
  name: string;
  children: React.ReactNode;
}
export const Widget = ({ name, children }: IOwnProps) => {
  return (
    <WidgetWrapper>
      <WidgetName>{name ?? ""}</WidgetName>
      {children}
    </WidgetWrapper>
  );
};
