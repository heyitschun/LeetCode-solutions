/** 
 * Given an integer n, return the difference between the product
 * and the sum of its digits.
 *
 * Example:
 *
 * Input:
 * n = 234
 *
 * Output:
 * 15
 *
 * Constraints:
 *
 * 1 <= n <= 10^5
 */


function subtractProductAndSum(n) {
  let rem = 0;
  let product = 1;
  let sum = 0;

  while (n != 0) {
    rem = n % 10;
    n = (n - rem) / 10;
    product *= rem;
    sum += rem;
  }

  return product - sum;
}

var n = 4421;

var answer = subtractProductAndSum(n);

console.log(answer);

/**
 * Clearly the problem is not about return the right answer,
 * but returning the answer efficiently and without weird string conversions.
 *
 * The technique we can use is the same as the code use to check if
 * an integer is a palindrome.
 */
