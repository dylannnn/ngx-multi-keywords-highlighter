import { COLOR_PALETTE, IKeyword } from '../src/lib/core';
import { LOREM_IPSUM } from './lorem-ipsum';

/**
 * Generate number of weywords
 * @param quantity Numbers of keywords to be generated
 * @returns Keywords to be generated
 */
const generateKeywordsFactory = (quantity: number): IKeyword[] => {
  const keywordArray: IKeyword[] = [];
  for (let index = 0; index < quantity; index++) {
    keywordArray.push(generateKeyword());
  }
  return keywordArray;
};

/**
 * Generate a keyWord
 * @returns A generated keyword
 */
const generateKeyword = (): IKeyword => {
  const keyword: IKeyword = {
    id: Date.now(),
    name: getRandomKeyword(),
    color:
      COLOR_PALETTE.DEFAULT[
        Math.floor(Math.random() * COLOR_PALETTE.DEFAULT.length)
      ],
    createdAt: new Date().toISOString()
  };
  return keyword;
};

/**
 * Get Random Keyword from LOREM_IPSUM
 * @returns A Random Keyword from LOREM_IPSUM
 */
const getRandomKeyword = (): string => {
  const keywordArray = LOREM_IPSUM.replace(/[,.]/g, '').split(' ');
  return keywordArray[Math.floor(Math.random() * keywordArray.length)];
};

export { generateKeywordsFactory, generateKeyword, getRandomKeyword };
