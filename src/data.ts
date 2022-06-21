import _kanjis from './kanjis.json'
import jlpt5 from './jlpt5-words.json'
import jlpt4 from './jlpt4-words.json'
import jlpt3 from './jlpt3-words.json'
import jlpt2 from './jlpt2-words.json'
import jlpt1 from './jlpt1-words.json'
import { JlptWordEntry, Row, Domain } from './types';

/** KANJIS */
export const Kanjis = _kanjis as Row[]

/** WORDS */
export const jlpts: JlptWordEntry[][] = [
  jlpt5 as JlptWordEntry[],
  jlpt4 as JlptWordEntry[],
  jlpt3 as JlptWordEntry[],
  jlpt2 as JlptWordEntry[],
  jlpt1 as JlptWordEntry[]
]
let j = 0
export const Words = jlpts.flatMap((jlpt, i) => {
  return jlpt.map((word) => {
    return [j++, word[0], 5-i, word[2], word[1]]
  })
}) as Row[]


/** FUNCTIONS */
export function getRowFromId (domain: Domain, id: number) {
  switch (domain) {
    case 'kanji':
      return Kanjis.find(r=>r[0]==id)!
    case 'words':
      return Words.find(r=>r[0]==id)!
  }
}

export function wordExists(word: string) {
  return Words.some(r=>r[1]==word||r[4]==word)
}


export function getExactSearch (word: string) {
  return Words.find(r=>r[1]==word||r[4]==word) || null
}


export type SentenceMeta = { word: string, meta: Row|null }[]
export function parseSentence (sentence: string) {
  const meta: SentenceMeta = [];
  let text = sentence.split('');
  let extract = '';
  let search: Row|null = null;

  while (text.length > 0) {
    let length = text.length;
    while (length > 0) {
      extract = text.slice(0, length).join('')
      search = Words.find(r=>r[1]==extract||r[4]==extract) || Kanjis.find(r=>r[1]==extract||r[4]==extract) || null  || null
      if (search) {
        meta.push({ word: extract, meta: search })
        text.splice(0, length)
        break;
      }
      else {
        length--;
      }

      if (length == 0) {
        meta.push({ word: extract, meta: null })
        text.splice(0, 1)
        break
      }
    }
  }
  return meta
}