import {JSDOM} from 'jsdom';

export function getDOM(html: string) {
	const dom = new JSDOM(html);
	return dom.window.document;
}
