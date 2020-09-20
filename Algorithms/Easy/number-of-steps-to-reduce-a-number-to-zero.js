/**
 * Problem
 * -------
 * Given a non-negative integer num, return the number of steps to reduce it
 * to 0.
 *
 * If the current number is even, divide it by two. Otherwise, subtract 1.
 *
 * Example
 * -------
 * num = 14
 *
 * >>> 6
 */

function numberOfSteps(num) {
  if (num < 0) {
    return null;
  }
  var answer = 0;

  while (num !== 0) {
    if (num % 2 === 0) num /= 2
    else num -= 1;
    answer++;
  }

  return answer;
}

var num = 8;
var answer = numberOfSteps(num);

console.log(answer);
