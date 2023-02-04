import React, { useEffect } from "react";
import {
	ObserverBlock,
	StyledInfiniteScroll,
} from "shared/components/infinite-scroll/styled";
import { useInView } from "react-intersection-observer";

export interface InfiniteScrollProps {
	callback: () => void;
	children: React.ReactNode;
	loader?: React.ReactNode;
	endMessage?: React.ReactNode;
	isLoading: boolean;
}

export const InfiniteScroll = ({
	callback,
	children,
	loader,
	isLoading,
}: InfiniteScrollProps) => {
	const { ref, inView } = useInView({
		delay: 500,
	});
	useEffect(() => {
		if (inView) {
			callback();
		}
	}, [inView]);
	return (
		<StyledInfiniteScroll>
			{children}
			{isLoading && loader}
			<ObserverBlock ref={ref} />
		</StyledInfiniteScroll>
	);
};
