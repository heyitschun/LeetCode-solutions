/**
 * Given an array `nums`, return an array with the running sum of `nums`.
 *
 * Example:
 *
 * Input:
 * nums = [1,2,3,4]
 *
 * Output:
 * [1,3,6,10]
 */

function runningSum(nums) {
  var curr = 0;
  var tmp = 0;
  nums.forEach((n, i) => {
    curr = n + tmp;
    tmp = curr;

    // store in original array to save memory:
    nums[i] = curr;
  });

  return nums;
}

var nums = [1, 2, 3, 4];

var answer = runningSum(nums);

console.log(answer);

/**
 * This problem probably can use the same algorithm that returns the nth
 * Fib number, but using a temporary value holder.
 */
