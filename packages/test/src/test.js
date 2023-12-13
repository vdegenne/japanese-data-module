import test from 'japanese-data-module/full/kanji-jlpt5.json' assert {type: 'json'};
import {RI, objectifyKanjiRow} from 'japanese-data-module/full';

const o = objectifyKanjiRow(test[9]);
console.log(o.meaning);
