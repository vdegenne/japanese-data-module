import type { KanjiRow, WordRow } from './types.js';
export type { KanjiRow, WordRow, RowIndex, Domain, LemmaEntry } from './types.js';
export { RowIndexes, Domains } from './types.js';
/** kanjis */
export declare const jlpt5kanjis: KanjiRow[];
export declare const jlpt4kanjis: KanjiRow[];
export declare const jlpt3kanjis: KanjiRow[];
export declare const jlpt2kanjis: KanjiRow[];
export declare const jlpt1kanjis: KanjiRow[];
export declare const jlpt0kanjis: KanjiRow[];
export declare const kanjis: {
    0: KanjiRow[];
    1: KanjiRow[];
    2: KanjiRow[];
    3: KanjiRow[];
    4: KanjiRow[];
    5: KanjiRow[];
};
/** words */
export declare const jlpt5words: WordRow[];
export declare const jlpt4words: WordRow[];
export declare const jlpt3words: WordRow[];
export declare const jlpt2words: WordRow[];
export declare const jlpt1words: WordRow[];
export declare const words: {
    1: WordRow[];
    2: WordRow[];
    3: WordRow[];
    4: WordRow[];
    5: WordRow[];
};
/** functions */
export declare function wordExists(bag: WordRow[], word: string): boolean;
/**
 * Search a word in a row list,
 * it searches for the exact match, not a partial one.
 *
 * @param bag word rows to search in
 * @param word word to search
 * @param searchHiragana whether the search should include hiragana too
 * @returns the word row or null if not found.
 */
export declare function getExactSearch(bag: WordRow[], word: string, searchHiragana?: boolean): WordRow | null;
export declare function kanjiExists(bag: KanjiRow[], kanji: string): boolean;
export declare function getKanjiRow(bag: KanjiRow[], kanji: string): KanjiRow | null;
//# sourceMappingURL=index.d.ts.map