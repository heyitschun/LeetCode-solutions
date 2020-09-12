/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example:
 *
 * Input:
 * nums = [2, 7, 15, 30]
 * target = 9
 *
 * Expected:
 * [0, 1]
 *
 */

// Inefficient since it loops at least twice to find the second number.
function twoSum(nums, target) {
  let left = null;
  let right = null;
  nums.map((v, i) => {
    if ([...nums.slice(0, i), ...nums.slice(i+1)].includes(target-v)) {
      if (left === null) left = i
      else right = i;
    };
  });

  return [left, right];
}

function twoSumBetter(nums, target) {
  if (nums === null || nums.length === 0) {
    return null;
  };

  let maps = {};
  
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    // check if maps contains the difference between target and i
    if (maps[diff] !== undefined) {
      
      // Since problem states that there is at least one solution,
      // we can have only one return statement
      return [maps[diff], i];
    }

    // if it could not be found, add i to map
    maps[nums[i]] = i;
  }
}

var nums = [2, 7, 11, 15, 19];
var target = 9; // expects: [ 0, 1 ]

console.log("twoSum");
var answer = twoSum(nums, target);
console.log(answer);

console.log("-------------")
console.log("twoSumBetter");
var answerBetter = twoSumBetter(nums, target);
console.log(answerBetter);
