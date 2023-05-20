/**
 * @license
 * Copyright (c) 2023 Valentin Degenne
 * SPDX-License-Identifier: MIT
 */
import _jlpt5words from './jlpt5-words.json' assert { type: 'json' };
import _jlpt4words from './jlpt4-words.json' assert { type: 'json' };
import _jlpt3words from './jlpt3-words.json' assert { type: 'json' };
import _jlpt2words from './jlpt2-words.json' assert { type: 'json' };
import _jlpt1words from './jlpt1-words.json' assert { type: 'json' };
import _jlpt5kanjis from './jlpt5-kanjis.json' assert { type: 'json' };
import _jlpt4kanjis from './jlpt4-kanjis.json' assert { type: 'json' };
import _jlpt3kanjis from './jlpt3-kanjis.json' assert { type: 'json' };
import _jlpt2kanjis from './jlpt2-kanjis.json' assert { type: 'json' };
import _jlpt1kanjis from './jlpt1-kanjis.json' assert { type: 'json' };
import _jlpt0kanjis from './jlpt0-kanjis.json' assert { type: 'json' };
import { RowIndexes } from './types.js';
export { RowIndexes, Domains } from './types.js';
/** kanjis */
export const jlpt5kanjis = _jlpt5kanjis;
export const jlpt4kanjis = _jlpt4kanjis;
export const jlpt3kanjis = _jlpt3kanjis;
export const jlpt2kanjis = _jlpt2kanjis;
export const jlpt1kanjis = _jlpt1kanjis;
export const jlpt0kanjis = _jlpt0kanjis;
export const kanjis = {
    0: jlpt0kanjis,
    1: jlpt1kanjis,
    2: jlpt2kanjis,
    3: jlpt3kanjis,
    4: jlpt4kanjis,
    5: jlpt5kanjis,
};
// const flattenKanjis = Object.values(kanjis).flat();
/** words */
export const jlpt5words = _jlpt5words;
export const jlpt4words = _jlpt4words;
export const jlpt3words = _jlpt3words;
export const jlpt2words = _jlpt2words;
export const jlpt1words = _jlpt1words;
export const words = {
    // 0: undefined,
    1: jlpt1words,
    2: jlpt2words,
    3: jlpt3words,
    4: jlpt4words,
    5: jlpt5words,
};
// const flattenWords = Object.values(words).flat();
/** functions */
export function wordExists(bag, word) {
    return bag.some((row) => word === row[RowIndexes.WORD] || word === row[RowIndexes.HIRAGANA]);
}
/**
 * Search a word in a row list,
 * it searches for the exact match, not a partial one.
 *
 * @param bag word rows to search in
 * @param word word to search
 * @param searchHiragana whether the search should include hiragana too
 * @returns the word row or null if not found.
 */
export function getExactSearch(bag, word, searchHiragana = true) {
    return (bag.find((row) => word === row[RowIndexes.WORD] ||
        (searchHiragana && word === row[RowIndexes.HIRAGANA])) || null);
}
export function kanjiExists(bag, kanji) {
    return bag.some((row) => kanji === row[RowIndexes.KANJI]);
}
export function getKanjiRow(bag, kanji) {
    return bag.find((row) => kanji === row[RowIndexes.KANJI]) || null;
}
// export type SentenceMeta = {word: string; meta: Row | null}[];
// export function parseSentence(sentence: string) {
// 	const meta: SentenceMeta = [];
// 	let text = sentence.split('');
// 	let extract = '';
// 	let search: Row | null = null;
// 	while (text.length > 0) {
// 		let length = text.length;
// 		while (length > 0) {
// 			extract = text.slice(0, length).join('');
// 			search =
// 				Words.find((r) => r[1] == extract || r[4] == extract) ||
// 				Kanjis.find((r) => r[1] == extract || r[4] == extract) ||
// 				null ||
// 				null;
// 			if (search) {
// 				meta.push({word: extract, meta: search});
// 				text.splice(0, length);
// 				break;
// 			} else {
// 				length--;
// 			}
// 			if (length == 0) {
// 				meta.push({word: extract, meta: null});
// 				text.splice(0, 1);
// 				break;
// 			}
// 		}
// 	}
// 	return meta;
// }
//# sourceMappingURL=index.js.map