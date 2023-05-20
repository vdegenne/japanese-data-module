import {RowIndexes, getExactSearch, words} from '../lib/index.js';

const flattenWords = Object.values(words).flat();

const results = flattenWords.filter(
	(row) => row[RowIndexes.MEANING].indexOf('to be, to exist') >= 0
);
console.log(results);
