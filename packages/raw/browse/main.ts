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

declare global {
	interface Window {
		container: HTMLDivElement;
	}
}

const set = {
	kanjis: [kanji5, kanji4, kanji3, kanji2, kanji1],
	words: [word5, word4, word3, word2, word1],
};

const randomWordsSet = set.words[Math.floor(Math.random() * 5)];

window.container.textContent = JSON.stringify(randomWordsSet, null, 2);
