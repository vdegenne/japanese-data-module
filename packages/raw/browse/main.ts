import kanji5 from '../out/kanji-jlpt5.json' assert {type: 'json'};
import kanji4 from '../out/kanji-jlpt4.json' assert {type: 'json'};
import kanji3 from '../out/kanji-jlpt3.json' assert {type: 'json'};
import kanji2 from '../out/kanji-jlpt2.json' assert {type: 'json'};
import kanji1 from '../out/kanji-jlpt1.json' assert {type: 'json'};
import word5 from '../out/word-jlpt5.json' assert {type: 'json'};
import word4 from '../out/word-jlpt4.json' assert {type: 'json'};
import word3 from '../out/word-jlpt3.json' assert {type: 'json'};
import word2 from '../out/word-jlpt2.json' assert {type: 'json'};
import word1 from '../out/word-jlpt1.json' assert {type: 'json'};
import kanji5old from '../../../src/data/jlpt5-kanjis.json' assert {type: 'json'};
import kanji4old from '../../../src/data/jlpt4-kanjis.json' assert {type: 'json'};
import kanji3old from '../../../src/data/jlpt3-kanjis.json' assert {type: 'json'};
import kanji2old from '../../../src/data/jlpt2-kanjis.json' assert {type: 'json'};
import kanji1old from '../../../src/data/jlpt1-kanjis.json' assert {type: 'json'};
import word5old from '../../../src/data/jlpt5-words.json' assert {type: 'json'};
import word4old from '../../../src/data/jlpt4-words.json' assert {type: 'json'};
import word3old from '../../../src/data/jlpt3-words.json' assert {type: 'json'};
import word2old from '../../../src/data/jlpt2-words.json' assert {type: 'json'};
import word1old from '../../../src/data/jlpt1-words.json' assert {type: 'json'};

declare global {
	interface Window {
		container: HTMLDivElement;
	}
}

const set = {
	kanjis: [kanji5, kanji4, kanji3, kanji2, kanji1],
	words: [word5, word4, word3, word2, word1],
};
const oldset = {
	kanjis: [kanji5old, kanji4old, kanji3old, kanji2old, kanji1old],
	words: [word5old, word4old, word3old, word2old, word1old],
};

const randomWordsSet = set.words[Math.floor(Math.random() * 5)];

window.container.textContent = JSON.stringify(randomWordsSet, null, 2);

const allids = [...set.kanjis.flat(), ...set.words.flat()].map((i) => i.id);
const allwords = [...set.kanjis.flat(), ...set.words.flat()].map((i) => i.v);
sendDataOverNetwork(allwords);

function sendDataOverNetwork(data: any) {
	const currentDomain = window.location.origin;

	fetch(`${currentDomain}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => console.log('Data sent:', response))
		.catch((error) => console.error('Error sending data:', error));
}
