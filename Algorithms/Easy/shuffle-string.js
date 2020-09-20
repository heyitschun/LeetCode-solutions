/**
 * Problem
 * -------
 * Given a string s and an integer array indices of the same length.
 * 
 * The string s will be shuffled such that the character at the ith position
 * moves to indices[i] in the shuffled string.
 *
 * Return the shuffled string.
 *
 * Example
 * -------
 *
 * s = "codeleet"
 * indices = [4,5,6,7,0,2,1,3]
 *
 * >>> "leetcode"
 */

function restoreString(s, indices) {
  var answer = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    answer[indices[i]] = s[i];
  }

  return answer.join("");
}

var s = "codeleet";
var indices = [4,5,6,7,0,2,1,3];

var answer = restoreString(s, indices);

console.log(answer);
