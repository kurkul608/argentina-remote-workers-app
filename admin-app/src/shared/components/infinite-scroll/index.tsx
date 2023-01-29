import React, { useEffect } from "react";
import {
	ObserverBlock,
	StyledInfiniteScroll,
} from "shared/components/infinite-scroll/styled";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "redux/hooks";

export interface InfiniteScrollProps {
	callback: () => any;
	children: React.ReactNode;
	loader?: React.ReactNode;
	endMessage?: React.ReactNode;
	hasMore: boolean;
}

export const InfiniteScroll = ({
	callback,
	children,
	loader,
	endMessage,
	hasMore,
}: InfiniteScrollProps) => {
	const { ref, inView } = useInView({
		delay: 500,
	});
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (inView && hasMore) {
			dispatch(callback);
		}
	}, [inView]);
	return (
		<StyledInfiniteScroll>
			{children}
			{hasMore ? loader : endMessage || null}
			<ObserverBlock ref={ref} />
		</StyledInfiniteScroll>
	);
};
