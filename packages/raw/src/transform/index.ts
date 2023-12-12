import fs from 'fs';
import {Kanji, Word} from '../types.js';

let i = 0;
for (; i < 5; ++i) {
	const jlpt = 5 - i;
	let filepath = `./out/word-jlpt${jlpt}.json`;
	const file = await fs.promises.readFile(filepath);
	const data = JSON.parse(file.toString()) as {
		name: string;
		hiragana: string;
		roman: string;
		meaning: string;
		tags: string[];
	}[];

	const newData: Word[] = data.map((item) => ({
		v: item.name,
		...(item.hiragana ? {hirakata: item.hiragana} : []),
		roman: item.roman,
		meaning: item.meaning,
		tags: item.tags,
	}));

	await fs.promises.writeFile(filepath, JSON.stringify(newData));
}
