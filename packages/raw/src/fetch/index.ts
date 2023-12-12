import {Word, type Kanji} from '../types.js';
import {getDOM as getDocument} from './dom.js';
import {JlptValue, TypeValue, buildUrl, fetchContent} from './fetch.js';
import {
	getCardHiragana,
	getCardMeaning,
	getCardName,
	getCardRoman,
	getCardTags,
	getCards,
	getRange,
} from './japandict.js';
import pathlib from 'path';
import fs from 'fs';
import {sleep} from './utils.js';

export const OUT_DIR = 'out';

let id = 1;
let gap = 50;

async function start() {
	await fetchKanjis();
	await fetchWords();
}

async function fetchKanjis() {
	let data: Kanji[];
	let type: TypeValue = 'kanji';
	let jlpt: JlptValue = 5;
	for (; jlpt !== 0; --jlpt) {
		data = [];
		let page = 1;
		for (; page !== 999999; ++page) {
			const url = buildUrl({type, jlpt: jlpt as JlptValue, page});
			console.log(`Fetching page for ${type} jlpt ${jlpt} (page: ${page})`);
			const content = await fetchContent(url);
			const doc = getDocument(content);
			if (getRange(doc) === '0') {
				break;
			}
			const cards = getCards(doc);
			cards.forEach((card) => {
				data.push({
					id: id++,
					v: getCardName(card),
					meaning: getCardMeaning(card),
					tags: getCardTags(card),
				});
			});
			await sleep();
		}
		if (!fs.existsSync(OUT_DIR)) {
			await fs.promises.mkdir(OUT_DIR);
		}
		await fs.promises.writeFile(
			pathlib.join(OUT_DIR, `${type}-jlpt${jlpt}.json`),
			JSON.stringify(data)
		);
		id += gap;
	}
}

async function fetchWords() {
	let data: Word[];
	let type: TypeValue = 'word';
	let jlpt: JlptValue = 5;
	for (; jlpt !== 0; --jlpt) {
		data = [];
		let page = 1;
		for (; page !== 9999999; ++page) {
			const url = buildUrl({type, jlpt: jlpt as JlptValue, page});
			console.log(`Fetching page for ${type} jlpt ${jlpt} (page: ${page})`);
			const content = await fetchContent(url);
			const doc = getDocument(content);
			if (getRange(doc) === '0') {
				break;
			}
			const cards = getCards(doc);
			cards.forEach((card) => {
				data.push({
					id: id++,
					v: getCardName(card),
					hirakata: getCardHiragana(card),
					roman: getCardRoman(card),
					meaning: getCardMeaning(card),
					tags: getCardTags(card),
				});
			});
			await sleep();
		}
		if (!fs.existsSync(OUT_DIR)) {
			await fs.promises.mkdir(OUT_DIR);
		}
		await fs.promises.writeFile(
			pathlib.join(OUT_DIR, `${type}-jlpt${jlpt}.json`),
			JSON.stringify(data)
		);
		id += gap;
	}
}
