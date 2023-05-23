import {RowIndexes, words} from '../lib/index.js';

const flattenWords = Object.values(words).flat();

if (process.argv.length < 3) {
	process.exit();
}

const results = flattenWords.filter(
	(row) => row[RowIndexes.WORD].indexOf(process.argv[2]) >= 0
);
console.log(results);
