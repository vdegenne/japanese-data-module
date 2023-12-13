import test from 'japanese-data-module/tagless-noroman/word-jlpt2.json' assert {type: 'json'};
import {RI} from 'japanese-data-module/tagless-noroman';

console.log(test[0][RI.MEANING]);
