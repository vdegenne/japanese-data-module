import fs from 'fs';
import {Kanji, Word} from '../types.js';

let id = 1;
let gap = 50;

for (const type of ['kanji', 'word']) {
	let jlpt = 5;
	for (; jlpt !== 0; --jlpt) {
		const filepath = `./out/${type}-jlpt${jlpt}.json`;
		const file = await fs.promises.readFile(filepath);
		const data = JSON.parse(file.toString()) as (Kanji | Word)[];
		for (const item of data) {
			item.id = id++;
		}
		// await fs.promises.writeFile(filepath, JSON.stringify(data))
		id += gap;
	}
	// give an extra space for kanji <-> words
	id += gap;
}
