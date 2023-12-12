export interface Kanji {
	id: number;
	/** value */
	v: string;
	meaning: string;
	tags: string[];
}

export interface Word {
	id: number;
	/** value */
	v: string;
	hirakata?: string;
	roman: string;
	meaning: string;
	tags: string[];
}
