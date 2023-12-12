import fs from 'fs';

let id = 1;
let gap = 10;
for (const type of ['kanji', 'word']) {
	let jlpt = 5;
	for (; jlpt !== 0; --jlpt) {
		const filepath = `./out/${type}-jlpt${jlpt}.json`;
		console.log(filepath);
	}
}
