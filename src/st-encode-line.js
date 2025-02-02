import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let res = ''
  let count = 1
  for (let i = 0; i<str.length; i++) {
      // console.log(str[i])
      if (str[i] === str[i+1]) {
          count++
      }
      if (str[i] !== str[i+1]) {
          res += `${count > 1 ? count : ''}${str[i]}`
          count = 1
      }
  }
  return res
}
