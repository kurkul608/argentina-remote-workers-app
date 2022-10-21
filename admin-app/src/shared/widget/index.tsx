import React from "react";
import { WidgetName, WidgetUL, WidgetWrapper } from "./styled";

interface IOwnProps {
  name: string;
  list: React.ReactNode[];
}
export const Widget = ({ name, list }: IOwnProps) => {
  return (
    <WidgetWrapper>
      <WidgetName>{name ?? ""}</WidgetName>
      <WidgetUL>
        {list.map((element) => (
          <li>{element}</li>
        ))}
      </WidgetUL>
    </WidgetWrapper>
  );
};
