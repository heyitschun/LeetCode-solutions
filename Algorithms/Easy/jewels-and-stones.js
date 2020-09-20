/**
 * You are given strings J representing the types of stones that are jewels,
 * and S representing the stones you have. Each character in S is a type of
 * stone you have.
 *
 * You want to know how many of the stones are also jewels.
 *
 * The letters in J are guaranteed distinct. And all characters in J and S are
 * letters. Letters are case sensitive; so you must treat "A" as a different
 * stone from "a".
 *
 * Example
 * =======
 *
 * J = "aA"
 * S = "aAAbbbb"
 *
 * >>> 3
 */

function numJewelsInStones(J, S) {
  var answer = 0;
  S = S.split("");

  for (let j = 0; j < J.length; j++) {
    for (let s = 0; s < S.length; s++) {
      if (J[j] === S[s]) {
        answer++;
      }
    }

  }

  return answer;
}

var J = "ebd";
var S = "bbb";

var answer = numJewelsInStones(J, S);

console.log(answer)
