/**
 * Given an array `nums` consisting of 2n elements in the form:
 *
 * `[x1, x2, ...xn, y1, y2, ...yn]`
 *
 * Return the array in the form:
 *
 * `[x1, y1, x2, y2, ...xn, yn]`
 *
 * Example:
 *
 * Input:
 * nums = [1,2,3,4,4,3,2,1]
 * n = 4
 *
 * Output:
 * [1,4,2,3,3,2,4,1]
 *
 * Constraints:
 * - 1 <= n <= 500
 * - nums.length == 2n
 * - 1 <= nums[i] <= 10^3
 */

function shuffle(nums, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(nums[i], nums[i+n]);
  }
  return answer;
}

var nums = [ 2, 5, 1, 3, 4, 7 ];
var n = 3;

var answer = shuffle(nums, n);

console.log(answer);
