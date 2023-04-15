import React, { useEffect, useRef, useState } from "react";
import {
	StyledAccordion,
	StyledAccordionMenu,
	StyledIcon,
	StyledTitle,
	StyledWrapper,
} from "shared/components/accordion/styled";

interface IAccordion {
	children: React.ReactNode;
	name: string;
	isOpen: boolean;
}

export const Accordion = ({ children, name, isOpen }: IAccordion) => {
	const [isHidden, setIsHidden] = useState(!isOpen);
	const [height, setHeight] = useState("0");
	const handleOnClick = () => {
		setIsHidden(!isHidden);
	};
	const accordionElement = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (accordionElement.current) {
			setHeight(`${accordionElement.current.getBoundingClientRect().height}px`);
		}
	}, [isHidden]);
	return (
		<StyledWrapper>
			<StyledAccordionMenu
				isHidden={isHidden}
				className={isHidden ? "" : "accordion--active"}
				onClick={handleOnClick}
			>
				<StyledTitle isHidden={isHidden}>{name}</StyledTitle>
				<StyledIcon isHidden={isHidden} />
			</StyledAccordionMenu>
			<StyledAccordion height={height} isHidden={isHidden}>
				{!isHidden && <div ref={accordionElement}>{children}</div>}
			</StyledAccordion>
		</StyledWrapper>
	);
};
