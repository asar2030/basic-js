import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let new1 = s1.split('').sort()
  let new2 = s2.split('').sort()
  let count = 0
  console.log(new1)
  console.log(new2)
  for (let i = 0; i < new1.length; i++) {
      for (let k = 0; k< new2.length; k++) {
          if (new1[i] === new2[k]) {
              count++
              new2.splice(k,1)
              break
          }
      }
  }
  return count
}
