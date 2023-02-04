import React from "react";
import { LinkParserService } from "./services/link-parser.service";
import { useNavigate } from "react-router";
import {
	Breadcrumb,
	BreadcrumbsWrapper,
	BreadcrumbWrapper,
	Separator,
} from "./style";
interface IBreadcrumbs {
	link: string;
	separator?: string;
}
export const Breadcrumbs = ({ link, separator }: IBreadcrumbs) => {
	const navigate = useNavigate();
	const links = LinkParserService(link);
	return (
		<BreadcrumbsWrapper>
			{links.map((value, i, arr) => (
				<BreadcrumbWrapper key={value}>
					<Breadcrumb onClick={() => navigate(value, { replace: true })}>
						{value.split("/").pop()}
					</Breadcrumb>
					{i < arr.length - 1 ? (
						<Separator>{separator || "/"}</Separator>
					) : null}
				</BreadcrumbWrapper>
			))}
		</BreadcrumbsWrapper>
	);
};
