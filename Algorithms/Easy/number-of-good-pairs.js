/**
 * Given an array of integers, return the number of 'good' pairs.
 *
 * A pair is good if nums[i] == nums[j] and i < j
 *
 * Example:
 *
 * Input:
 * nums = [1,2,3,1,1,3]
 *
 * Output = 4
 */

function numIdenticalPairs(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length; i++) {
    let sub = nums.slice(i+1);
    for (let j = 0; j < sub.length; j++) {
      if (nums[i] == sub[j]) answer++;
    }
  }

  return answer;
}

var nums = [1,2,3];

var answer = numIdenticalPairs(nums);

console.log(answer);
