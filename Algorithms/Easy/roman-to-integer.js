/**
 * Write a function that can convert Roman numerals to an integer.
 *
 * Example:
 *
 * Input:
 * s = "IX"
 *
 * Output:
 * 9
 *
 * 1 <= s <= 3999
 */

function romanToInt(s) {
  const ROMANS = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  var answer = 0;

  s.split("").forEach((v, i) => {
    if (ROMANS[v] < ROMANS[s[i+1]]) {
      answer -= ROMANS[v];
    } else {
      answer += ROMANS[v];
    }
  });

  return answer;
}

var s = "MCMXCIV";

var answer = romanToInt(s);

console.log(answer);
