/**
 * Determine whether an integer is a palindrome.
 *
 * Example:
 *
 * Input:
 * x = 121
 *
 * Output:
 * true
 * 
 * Write a function that returns a Boolean based on whether `x` is a palindrome
 * or not. Negative numbers do not count as palindromes.
 *
 * The function may not use string conversion.
 *
 */

function isPalindrome(x) {
  // If x is negative, it is not a palindrome.
  if (x < 0) return false;

  let y = x;
  let revInt = 0;
  let tmp = 0;
  while (x > 0) {
    tmp = x % 10;
    revInt = revInt * 10 + tmp;
    x = (x - tmp) / 10;
  }
  return revInt === y;
}

var x = 131;

var answer = isPalindrome(x);

console.log(answer);


/**
 * The integer can be reversed using base 10 to move 100s to 10s, 10s to 1s
 * and so on.
 *
 * To get the digit to move, use a modulo operator.
 *
 *
 */
