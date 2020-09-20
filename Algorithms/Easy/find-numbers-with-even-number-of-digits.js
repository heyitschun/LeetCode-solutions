/**
 * Problem
 * -------
 * Given an array nums of integers, return how many contain an even number
 * of digits.
 *
 * Example
 * -------
 *
 * nums = [12,345,2,6,7896]
 *
 * >>> 2
 */

function findNumbers(nums) {
  var answer = 0;

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== 0) {
      count++;
      nums[i] -= nums[i]%10;
      nums[i] /= 10;
    }
    if (count % 2 === 0) answer++;
    count = 0;
  }

  return answer;
}

var nums = [12,345,2,6,7896];

var answer = findNumbers(nums);

console.log(answer);
