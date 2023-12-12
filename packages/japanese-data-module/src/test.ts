import kanji5 from '@jdm-internal/raw/kanji5.json' assert {type: 'json'};
import kanji4 from '@jdm-internal/raw/kanji4.json' assert {type: 'json'};
import kanji3 from '@jdm-internal/raw/kanji3.json' assert {type: 'json'};
import kanji2 from '@jdm-internal/raw/kanji2.json' assert {type: 'json'};
import kanji1 from '@jdm-internal/raw/kanji1.json' assert {type: 'json'};
import {Kanji} from './types.js';

console.log(kanji5);

const row: Kanji[] = kanji5.map((i) => [i.v]);

console.log(JSON.stringify(row));
