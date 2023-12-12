import fs from 'fs';
import {Kanji} from '../types.js';

let i = 0;
for (; i < 5; ++i) {
	const jlpt = 5 - i;
	let filepath = `./out/kanji-jlpt${jlpt}.json`;
	const file = await fs.promises.readFile(filepath);
	const data = JSON.parse(file.toString()) as {
		name: string;
		meaning: string;
		tags: string[];
	}[];

	const newData: Kanji[] = data.map((item) => ({
		v: item.name,
		meaning: item.meaning,
		tags: item.tags,
	}));
}
