import pathlib from 'path';
import fs from 'fs';
import {_TARGET_PATH, set} from './constants.js';
import type {KanjiRow, WordRow} from '../full/index.js';

const TARGET_PATH = pathlib.join(_TARGET_PATH, 'full');

export async function buildFull() {
	if (!fs.existsSync(TARGET_PATH)) {
		await fs.promises.mkdir(TARGET_PATH);
	}
	await buildKanjiFiles();
	await buildWordFiles();
}

async function buildKanjiFiles() {
	let i = 0;
	for (; i < 5; ++i) {
		const jlpt = 5 - i;
		const data = set['kanjis'][i];

		const structure: KanjiRow[] = [];

		for (const obj of data) {
			structure.push([obj.id, jlpt, obj.v, obj.meaning, obj.tags]);
		}

		await fs.promises.writeFile(
			pathlib.join(TARGET_PATH, `kanji-jlpt${jlpt}.json`),
			JSON.stringify(structure)
		);
	}
}

async function buildWordFiles() {
	let i = 0;
	for (; i < 5; ++i) {
		const jlpt = 5 - i;
		const data = set['words'][i];

		const structure: WordRow[] = [];

		for (const obj of data) {
			structure.push([
				obj.id,
				jlpt,
				obj.v,
				obj.meaning,
				obj.tags,
				obj.roman,
				...(obj.hirakata ? [obj.hirakata] : []),
			] as WordRow);
		}

		await fs.promises.writeFile(
			pathlib.join(TARGET_PATH, `word-jlpt${jlpt}.json`),
			JSON.stringify(structure)
		);
	}
}
