import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let arr = n.toString().split('')
  arr.reduce((a,b) => arr = +a + +b)
  let arr2 = arr.toString().split('')
  if (arr2.length >= 2) {
      arr2.reduce((a,b) => arr = +a + +b)
  }
  return arr
}
