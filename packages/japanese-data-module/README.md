## How to use?

```javascript
/** Import wanted module */
import kanjisFromJlpt5 from 'japanese-data-module/full/kanji-jlpt5.json' assert {type: 'json'};

/** Import helpers */
import {KanjiRow, RI, objectifyKanjiRow} from 'japanese-data-module/full';

const _10thKanji = kanjisFromJlpt5[9];

// By default data is in "row" format (use RI to access indexes)
console.log(_10thKanji[RI.VALUE]); // "間"
console.log(_10thKanji[RI.MEANING]); // "interval, space"

// You can also objectify rows
const kanji = objectifyKanjiRow(_10thKanji);
console.log(kanji.meaning); // "interval, space"
```

There are 3 set for now: `full`, `tagless`, `tagless-noroman` (ranking from heavy to less heavy files but also less descriptive.)

When you import a set you have to use the helpers from the same module, for instance:

```javascript
// notice the use of the set "tagless" here
import data from 'japanese-data-module/tagless/kanji-jlpt1.json' assert {type: 'json'};

// helpers need to be imported from "tagless" to work properly with above data.
import {Kanji} from 'japanese-data-module/tagless';
```
