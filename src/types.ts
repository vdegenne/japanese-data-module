export const Domains = {
	KANJI: 'kanji',
	WORDS: 'words',
} as const;
export type Domain = (typeof Domains)[keyof typeof Domains];

export type KanjiRow = [
	/** id of the row */
	id: number,
	/** japanese kanji character */
	kanji: string,
	/** jlpt number */
	jlpt: number,
	/** on'yomi meaning */
	onMeaning: string,
	/** kun'yomi meaning */
	kunMeaning: string
];
export type WordRow = [
	/** id of the row */
	id: number,
	/** japanese word */
	word: string,
	/** jlpt number */
	jlpt: number,
	/** meaning of the word */
	meaning: string,
	/** hiragana version of the word */
	hiragana: string
];
export const RowIndexes = {
	/** id index */
	ID: 0,
	/** kanji index */
	KANJI: 1,
	/** word index */
	WORD: 1,
	/** jlpt index */
	JLPT: 2,
	/** word meaning index */
	MEANING: 3,
	/** kanji on'yomi meaning index */
	ONMEANING: 3,
	/** kanji kun'yomi meaning index */
	KUNMEANING: 4,
	/** word hiragana version index */
	HIRAGANA: 4,
} as const;
export type RowIndex = (typeof RowIndexes)[keyof typeof RowIndexes];

// export type JlptWordEntry = [
// 	word: string,
// 	hiragana: '' | string,
// 	english: string
// ];
export type LemmaEntry = {r: string; f: string; l: string};
