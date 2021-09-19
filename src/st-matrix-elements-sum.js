import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  let checkZero = true;
  let matrixRows = matrix.length;
  let matrixCols = matrix[0].length;

  for (let c = 0; c < matrixCols; c++) {
    checkZero = true;
    for (let r = 0; r < matrixRows; r++) {
      if (matrix[r][c] === 0) {
        checkZero = false;
      } else {
        if (checkZero === true) {
          sum += matrix[r][c];
        }
        checkZero = true;
      }
    }
  }
  return sum;
}
