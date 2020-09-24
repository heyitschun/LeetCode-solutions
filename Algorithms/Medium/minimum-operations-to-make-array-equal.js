/**
 * You have an array arr of length n where arr[i] = (2*i) + 1 for all valid
 * values of i (i.e. 0 <= i < n).
 *
 * In one operation, you can select two indices x and y where 0 <= x, y < n
 * and subtract 1 from arr[x] and add 1 to arr[y]. The goals is to make all
 * elements in the array equal. It is guaranteed that all elements of the array
 * can be made equal using some operations.
 *
 * Given an integer n, the length of the array, return the minimum number of
 * operations needed to make the elements in arr equal.
 *
 * Example
 * =======
 *
 * n = 3
 *
 * >>> 2
 *
 * Explanation
 * ===========
 * arr = [1, 3, 5]
 */

function minOperations(n) {
  var answer = 0;
  var top = (2*(n-1)) + 1;
  var mid = Math.ceil(top/2);

  for (let i = 0; i < Math.floor(n/2); i++) {
    answer += mid - ((2*i) + 1);
  }

  return answer;
}

var n = 6;

var answer = minOperations(n);

console.log(answer);
