/**
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.
 *
 * Given a balanced string s split it in the maximum amount of balanced strings.
 *
 * Return the maximum amount of splitted balanced strings.
 *
 * Example:
 *
 * Input:
 * s = "RLRRLLRLRL"
 *
 * Output:
 * 4
 */

function balancedStringSplit(s) {
  var answer = 0;
  var left = 0;
  var right = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") right++
    else left++;
    if (right === left) answer++;
  }
  
  return answer;
}

var s = "RLRRLLRLRL";

var answer = balancedStringSplit(s);

console.log(answer);
