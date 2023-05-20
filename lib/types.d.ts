export declare const Domains: {
    readonly KANJI: "kanji";
    readonly WORDS: "words";
};
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
export declare const RowIndexes: {
    /** id index */
    readonly ID: 0;
    /** kanji index */
    readonly KANJI: 1;
    /** word index */
    readonly WORD: 1;
    /** jlpt index */
    readonly JLPT: 2;
    /** word meaning index */
    readonly MEANING: 3;
    /** kanji on'yomi meaning index */
    readonly ONMEANING: 3;
    /** kanji kun'yomi meaning index */
    readonly KUNMEANING: 4;
    /** word hiragana version index */
    readonly HIRAGANA: 4;
};
export type RowIndex = (typeof RowIndexes)[keyof typeof RowIndexes];
export type LemmaEntry = {
    r: string;
    f: string;
    l: string;
};
//# sourceMappingURL=types.d.ts.map