export type KanjiRow = [
	id: number,
	jlpt: number,
	value: string,
	meaning: string,
	tags: string[]
];
export type WordRow = [
	id: number,
	jlpt: number,
	value: string,
	meaning: string,
	tags: string[],
	roman: string,
	hirakata?: string
];

export const RowIndex = {
	/** id index */
	ID: 0,
	/** jlpt index */
	JLPT: 1,
	/** value index */
	VALUE: 2,
	/** kanji index */
	KANJI: 2,
	/** word index */
	WORD: 2,
	/** meaning index */
	MEANING: 3,
	/** tags */
	TAGS: 4,
	/** roman */
	ROMAN: 5,
	/** Hiragana or Katakana */
	HIRAKATA: 6,
} as const;
// alias
export const RI = RowIndex;

export interface Kanji {
	id: number;
	jlpt: number;
	value: string;
	meaning: string;
	tags: string[];
}
export interface Word {
	id: number;
	jlpt: number;
	value: string;
	meaning: string;
	tags: string[];
	roman: string;
	hirakata?: string;
}

export function objectifyKanjiRow(row: KanjiRow): Kanji {
	return {
		id: row[RI.ID],
		jlpt: row[RI.JLPT],
		value: row[RI.VALUE],
		meaning: row[RI.MEANING],
		tags: row[RI.TAGS],
	};
}
export function objectifyWordRow(row: WordRow): Word {
	return {
		id: row[RI.ID],
		jlpt: row[RI.JLPT],
		value: row[RI.VALUE],
		meaning: row[RI.MEANING],
		tags: row[RI.TAGS],
		roman: row[RI.ROMAN],
		hirakata: row[RI.HIRAKATA],
	};
}
export function rowifyKanji(kanji: Kanji): KanjiRow {
	return [kanji.id, kanji.jlpt, kanji.value, kanji.meaning, kanji.tags];
}
export function rowifyWord(word: Word): WordRow {
	return [
		word.id,
		word.jlpt,
		word.value,
		word.meaning,
		word.tags,
		word.roman,
		...(word.hirakata ? [word.hirakata] : []),
	] as WordRow;
}
