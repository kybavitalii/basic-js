import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(backyard) {
  let count = 0;
  if (backyard.length === 0) {
    return count;
  } else {
    for (let i = 0; i < backyard.length; i++) {
      if (Array.isArray(backyard[i])) {
        if (backyard.length === 0) {
          return count;
        } else {
          for (let j = 0; j < backyard[i].length; j++) {
            backyard[i][j] === "^^" ? (count += 1) : count;
          }
        }
      }
    }
  }
  return count;
}

  