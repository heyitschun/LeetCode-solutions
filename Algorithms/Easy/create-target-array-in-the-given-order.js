/**
 * Given two arrays of integers nums and index. Your task is to create target
 * array under the following rules:
 *
 * Initially target array is empty.
 * 
 * From left to right read nums[i] and index[i], insert at index index[i] the
 * value nums[i] in target array.
 * 
 * Repeat the previous step until there are no elements to read in nums and index.
 *
 * Return the target array.
 *
 * It is guaranteed that the insertion operations will be valid.
 *
 * Example:
 *
 * Input:
 * nums = [0,1,2,3,4]
 * index = [0,1,2,2,1]
 *
 * Output:
 * [0,4,1,3,2]
 */

function createTargetArray(nums, index) {
  var target = new Array(nums.length);
  let spl;

  for (let i = 0; i < nums.length; i++) {
    spl = target.splice(index[i], 0, nums[i]);
    target.pop();
  }

  return target;
}

var nums = [1,2,3,4,0];
var index = [0,1,2,3,0];

var answer = createTargetArray(nums, index);

console.log(answer);
