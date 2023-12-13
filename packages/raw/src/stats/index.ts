import fs from 'fs';
import {Kanji, Word} from '../types.js';
import chalk from 'chalk';

// import kanji5 from '../../out/kanji-jlpt5.json' assert {type: 'json'};
// import kanji4 from '../../out/kanji-jlpt4.json' assert {type: 'json'};
// import kanji3 from '../../out/kanji-jlpt3.json' assert {type: 'json'};
// import kanji2 from '../../out/kanji-jlpt2.json' assert {type: 'json'};
// import kanji1 from '../../out/kanji-jlpt1.json' assert {type: 'json'};
// import word5 from '../../out/word-jlpt5.json' assert {type: 'json'};
// import word4 from '../../out/word-jlpt4.json' assert {type: 'json'};
// import word3 from '../../out/word-jlpt3.json' assert {type: 'json'};
// import word2 from '../../out/word-jlpt2.json' assert {type: 'json'};
// import word1 from '../../out/word-jlpt1.json' assert {type: 'json'};
// import kanji5old from '../../../../src/data/jlpt5-kanjis.json' assert {type: 'json'};
// import kanji4old from '../../../../src/data/jlpt4-kanjis.json' assert {type: 'json'};
// import kanji3old from '../../../../src/data/jlpt3-kanjis.json' assert {type: 'json'};
// import kanji2old from '../../../../src/data/jlpt2-kanjis.json' assert {type: 'json'};
// import kanji1old from '../../../../src/data/jlpt1-kanjis.json' assert {type: 'json'};
// import word5old from '../../../../src/data/jlpt5-words.json' assert {type: 'json'};
// import word4old from '../../../../src/data/jlpt4-words.json' assert {type: 'json'};
// import word3old from '../../../../src/data/jlpt3-words.json' assert {type: 'json'};
// import word2old from '../../../../src/data/jlpt2-words.json' assert {type: 'json'};
// import word1old from '../../../../src/data/jlpt1-words.json' assert {type: 'json'};

async function getJSON(filepath: string) {
	const file = await fs.promises.readFile(filepath);
	return JSON.parse(file.toString());
}

// new
const kanji5 = await getJSON('./out/kanji-jlpt5.json');
const kanji4 = await getJSON('./out/kanji-jlpt4.json');
const kanji3 = await getJSON('./out/kanji-jlpt3.json');
const kanji2 = await getJSON('./out/kanji-jlpt2.json');
const kanji1 = await getJSON('./out/kanji-jlpt1.json');
const word5 = await getJSON('./out/word-jlpt5.json');
const word4 = await getJSON('./out/word-jlpt4.json');
const word3 = await getJSON('./out/word-jlpt3.json');
const word2 = await getJSON('./out/word-jlpt2.json');
const word1 = await getJSON('./out/word-jlpt1.json');
// old
const kanji5old = await getJSON('../../src/data/jlpt5-kanjis.json');
const kanji4old = await getJSON('../../src/data/jlpt4-kanjis.json');
const kanji3old = await getJSON('../../src/data/jlpt3-kanjis.json');
const kanji2old = await getJSON('../../src/data/jlpt2-kanjis.json');
const kanji1old = await getJSON('../../src/data/jlpt1-kanjis.json');
const word5old = await getJSON('../../src/data/jlpt5-words.json');
const word4old = await getJSON('../../src/data/jlpt4-words.json');
const word3old = await getJSON('../../src/data/jlpt3-words.json');
const word2old = await getJSON('../../src/data/jlpt2-words.json');
const word1old = await getJSON('../../src/data/jlpt1-words.json');

const set = {
	kanjis: [kanji5, kanji4, kanji3, kanji2, kanji1] as Kanji[][],
	words: [word5, word4, word3, word2, word1] as Word[][],
};

const oldset = {
	kanjis: [kanji5old, kanji4old, kanji3old, kanji2old, kanji1old],
	words: [word5old, word4old, word3old, word2old, word1old],
};

let i = 0;
for (; i < 5; ++i) {
	const jlpt = 5 - i;
	console.log(`============== JLPT ${jlpt} ==============`);
	const data = set.kanjis[i];
	const oldData = oldset.kanjis[i];
	console.log(`data length: ${data.length}`);
	console.log(`old data length: ${oldData.length}`);

	const dataKanjis = data.map((i) => i.v);
	const oldDataKanjis = oldData.map((i) => i[1]) as string[];

	console.log('Kanjis that are not in old data:');
	const kanjisThatAreNotInNewData = oldDataKanjis.filter(
		(k) => !dataKanjis.includes(k)
	);
	for (const k of kanjisThatAreNotInNewData) {
		const otherJlpt = set.kanjis.findIndex((kanjiSet) =>
			kanjiSet.some((i) => i.v === k)
		);
		console.log(`${k}${otherJlpt >= 0 ? ` (in jlpt ${5 - otherJlpt})` : ''}`);
	}
	// const kanjisThatAreNotInOldData = dataKanjis.map(k => );

	// console.log(oldDataKanjis.filter((i) => !dataKanjis.includes(i)));

	console.log();
	console.log();
}
