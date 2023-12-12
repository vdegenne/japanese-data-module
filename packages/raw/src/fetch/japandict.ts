import {log} from './logger.js';

export function getRange(document: Document) {
	const el = document.querySelector('div.alert.alert-primary.my-4 > b');
	log(el.textContent.trim());
	return el.textContent.trim();
}

export function getCardsContainer(document: Document) {
	return document.querySelector('#content div.list-group.list-group-flush');
}

export function getCardsListFromContainer(container: Element) {
	return container.querySelectorAll('a.list-group-item.list-group-item-action');
}

export function getCards(document: Document) {
	return getCardsListFromContainer(getCardsContainer(document));
}

export function getCardName(card: Element) {
	const el = card.querySelector('span.xlarge.text-normal.me-4');
	log(el.textContent.trim());
	return el.textContent.trim();
}

export function getCardHiragana(card: Element) {
	const el = card.querySelector('.text-muted.me-4');
	log(el.textContent.trim());
	return el.textContent.trim();
}

export function getCardRoman(card: Element) {
	const el = card.querySelector('.text-muted.xsmall');
	log(el.textContent.trim());
	return el.textContent.trim();
}

export function getCardTags(card: Element) {
	const els = card.querySelectorAll('p.text-wrap > span.badge');
	const values = [...els].map((el) => el.textContent.trim());
	log(JSON.stringify(values));
	return values;
}

export function getCardMeaning(card: Element) {
	const els = card.querySelectorAll('ul > li');
	const value = [...els].map((el) => el.textContent.trim()).join('//');
	log(value);
	return value;
}
