/**
 * You are given two equal-size strings s and t. In one step you can choose
 * any character of t and replace it with another character.
 *
 * Return the minimum number of steps to make t an anagram of s.
 *
 * Example
 * =======
 *
 * s = "bab"
 * t = "aba"
 *
 * >>> 1
 *
 * Explanation
 * ===========
 *
 * Replace the first 'a' in t with b, t = "bba", which is an anagram of s.
 */

function minSteps(s, t) {
  var answer = 0;
  var sArr = new Array(26).fill(0);
  var tArr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let sChar = s.charCodeAt(i)-97;
    let tChar = t.charCodeAt(i)-97;

    sArr[sChar]++;
    tArr[tChar]++;
  }

  for (let i = 0; i < 26; i++) {
    answer += Math.abs(sArr[i] - tArr[i]);
  }

  return answer/2;
}

var s = "bab";
var t = "aba";

var answer = minSteps(s, t);

console.log(answer);

/**
 * Create hash map of s and t
 * Compare the values and count differences
 */
