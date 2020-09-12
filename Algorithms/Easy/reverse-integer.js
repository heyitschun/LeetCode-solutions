/**
 * Given a i32 integer, reverse the digits.
 *
 * Solution must handle case where the reversed int overflows 32 bits.
 *
 * Example:
 *
 * Input:
 * x = 123
 *
 * Output:
 * 321
 */

function reverse(x) {
  const MAX_TOP = Math.pow(2, 31) - 1;
  const MAX_BOT = -Math.pow(2, 31);

  let a = Math.abs(x);
  let revInt = 0;
  let tmp = 0;
  while (a > 0) {
    tmp = a % 10;
    revInt = revInt * 10 + tmp;
    a = (a - tmp) / 10;
    if (revInt > MAX_TOP || -revInt < MAX_BOT) {
      return 0;
    }
  };

  if (x < 0) return -revInt;
  return revInt;
}

var x = -123;

var answer = reverse(x);

console.log(answer);


