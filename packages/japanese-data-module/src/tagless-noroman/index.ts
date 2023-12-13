export type KanjiRow = [
	id: number,
	jlpt: number,
	value: string,
	meaning: string
];
export type WordRow = [
	id: number,
	jlpt: number,
	value: string,
	meaning: string,
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
	/** Hiragana or Katakana */
	HIRAKATA: 4,
} as const;
// alias
export const RI = RowIndex;

export interface Kanji {
	id: number;
	jlpt: number;
	value: string;
	meaning: string;
}
export interface Word {
	id: number;
	jlpt: number;
	value: string;
	meaning: string;
	hirakata?: string;
}

export function objectifyKanjiRow(row: KanjiRow): Kanji {
	return {
		id: row[RI.ID],
		jlpt: row[RI.JLPT],
		value: row[RI.VALUE],
		meaning: row[RI.MEANING],
	};
}
export function objectifyWordRow(row: WordRow): Word {
	return {
		id: row[RI.ID],
		jlpt: row[RI.JLPT],
		value: row[RI.VALUE],
		meaning: row[RI.MEANING],
		hirakata: row[RI.HIRAKATA],
	};
}
export function rowifyKanji(kanji: Kanji): KanjiRow {
	return [kanji.id, kanji.jlpt, kanji.value, kanji.meaning];
}
export function rowifyWord(word: Word): WordRow {
	return [
		word.id,
		word.jlpt,
		word.value,
		word.meaning,
		...(word.hirakata ? [word.hirakata] : []),
	] as WordRow;
}
