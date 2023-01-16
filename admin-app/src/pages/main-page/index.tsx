import React from "react";
import { ChatListWidget } from "../../shared/chat-list/components/chat-list-widget";
import { SendMessageWidget } from "../../shared/message/components/send-message-widget";
import { IComp } from "./test";

export const MainPage = () => {
	const mas1: IComp[] = [
		{
			component: "a",
			widthSize: 3,
			heightSize: 3,
			guaranteedPos: 0,
		},
		{
			component: "b",
			heightSize: 3,
			widthSize: 3,
		},
		{
			component: "c",
			heightSize: 4,
			widthSize: 1,
		},
		{
			component: "d",
			heightSize: 2,
			widthSize: 3,
		},
	];

	function sortMas(mas: IComp[]): IComp[] {
		const arr = [...mas];
		return arr.sort((item, item1) => {
			const n = item1.widthSize - item.widthSize;
			if (n !== 0) {
				return n;
			}
			return item1.heightSize - item.heightSize;
		});
	}

	function fromMasToArea(
		mas: IComp[],
		numOfColumns: number
	): Array<Array<string>> {
		const numOfRows = Math.ceil(
			mas.reduce((acc, item) => acc + item.widthSize * item.heightSize, 0) /
				numOfColumns
		);
		const arr = new Array(numOfRows)
			.fill("")
			.map(() => new Array(numOfColumns).fill("."));
		return arr;
	}

	function enterComp(
		comp: IComp,
		area: Array<Array<string>>,
		numOfColumns: number
	): Array<Array<string>> {
		const copyArea: Array<Array<string>> = [...area];
		for (let i = 0; copyArea.length > i; i++) {
			const freeSpace = copyArea[i].reduce(
				(acc, item) => (item !== "." ? 0 : acc + 1),
				0
			);
			if (freeSpace < comp.widthSize) {
				if (i === copyArea.length - 1) {
					copyArea.push(new Array(numOfColumns).fill("."));
					return enterComp(comp, copyArea, numOfColumns);
				}

				continue;
			}
			// мы выяснили что для компонента есть место в ширину
			const freeDotIndex = copyArea[i].findIndex((item) => item === ".");
			let freeSpaceY = 0;
			try {
				for (let j = i; j < i + comp.heightSize; j++) {
					if (copyArea[j][freeDotIndex] === ".") {
						freeSpaceY += 1;
					}
				}
			} catch (e: any) {
				copyArea.push(new Array(numOfColumns).fill("."));
				return enterComp(comp, copyArea, numOfColumns);
			}
			if (freeSpaceY !== comp.heightSize) continue;
			// мы выяснили что для компонента есть место в длину
			for (let j = i; j < i + comp.heightSize; j++) {
				for (let j1 = 0; j1 < comp.widthSize; j1++) {
					copyArea[j][freeDotIndex + j1] = comp.component;
				}
			}
			return copyArea;
		}
		return copyArea;
	}

	const sortedMas = sortMas(mas1);
	const areaTemplate = fromMasToArea(mas1, 4);
	sortedMas.forEach((item) => {
		enterComp(item, areaTemplate, 4);
	});

	return (
		<>
			<ChatListWidget />
			<SendMessageWidget />
		</>
	);
};
