import {RowIndex, words} from '../lib/index.js';

const flattenWords = Object.values(words).flat();

if (process.argv.length < 3) {
	process.exit();
}

const results = flattenWords.filter(
	(row) => row[RowIndex.WORD].includes(process.argv[2]) 


	|| row[RowIndex.MEANING].includes(process.argv[2])
);
console.log(results);
