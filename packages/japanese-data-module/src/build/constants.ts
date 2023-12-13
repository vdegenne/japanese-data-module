import path from 'path';
import kanji5 from '@jdm-internal/raw/kanji5.json' assert {type: 'json'};
import kanji4 from '@jdm-internal/raw/kanji4.json' assert {type: 'json'};
import kanji3 from '@jdm-internal/raw/kanji3.json' assert {type: 'json'};
import kanji2 from '@jdm-internal/raw/kanji2.json' assert {type: 'json'};
import kanji1 from '@jdm-internal/raw/kanji1.json' assert {type: 'json'};
import word5 from '@jdm-internal/raw/word5.json' assert {type: 'json'};
import word4 from '@jdm-internal/raw/word4.json' assert {type: 'json'};
import word3 from '@jdm-internal/raw/word3.json' assert {type: 'json'};
import word2 from '@jdm-internal/raw/word2.json' assert {type: 'json'};
import word1 from '@jdm-internal/raw/word1.json' assert {type: 'json'};
import {type Kanji, type Word} from '@jdm-internal/raw';

export const _TARGET_PATH = path.join('lib', 'data');

export const set = {
	kanjis: [kanji5, kanji4, kanji3, kanji2, kanji1] as Kanji[][],
	words: [word5, word4, word3, word2, word1] as Word[][],
};
