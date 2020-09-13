/**
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 * Input:
 * nums = [-2,1,-3,4,-1,2,1,-5,4]
 *
 * Output:
 * 6
 */

function maxSubarray(nums) {

  let max = -Infinity;
  let tmp = 0;
  
  for (let i = 0; i < nums.length; i++) {
    tmp += nums[i];
    if (max < tmp) {
      max = tmp;
    }

    if (tmp < 0) {
      tmp = 0;
    }
  }

  return max;
}

let nums = [-2,1,-3,4,-1,2,1,-5,4];

let answer = maxSubarray(nums);

console.log(answer);

/**
 * Since the return only cares about the sum, there is no need to track
 * the actual sub-array at each step. 
 *
 * Just it's sum.
 */
