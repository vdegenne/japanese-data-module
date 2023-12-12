export interface Kanji {
	/** value */
	v: string;
	meaning: string;
	tags: string[];
}

export interface Word {
	/** value */
	v: string;
	hirakata?: string;
	roman: string;
	meaning: string;
	tags: string[];
}
