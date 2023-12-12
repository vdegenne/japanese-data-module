import http, {IncomingMessage} from 'http';
import https from 'https';

export const FETCH_DOMAIN = 'https://www.japandict.com/';

export type TypeValue = 'kanji' | 'word';
export type JlptValue = 1 | 2 | 3 | 4 | 5;

interface BuildUrlOptions {
	type: TypeValue;
	jlpt: JlptValue;
	page?: number;
	lang?: 'eng';
}

/**
 * words: https://www.japandict.com/?s=%23jlpt4&page=1&lang=eng
 * kanjis: https://www.japandict.com/kanji/?s=%23jlpt4k&page=1&lang=en
 */
export function buildUrl({
	type,
	jlpt,
	page = 1,
	lang = 'eng',
}: BuildUrlOptions): string {
	let url = FETCH_DOMAIN;
	if (type === 'kanji') {
		url += 'kanji/';
	}
	url += `?s=%23jlpt${jlpt}`;
	if (type === 'kanji') {
		url += 'k';
	}
	url += `&page=${page}`;
	url += `&lang=${lang}`;

	return url;
}

export function fetchContent(url: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const protocol = url.startsWith('https') ? https : http;

		protocol
			.get(url, (res: IncomingMessage) => {
				let data = '';

				res.on('data', (chunk) => {
					data += chunk;
				});

				res.on('end', () => {
					resolve(data);
				});
			})
			.on('error', (err) => {
				reject(err);
			});
	});
}
