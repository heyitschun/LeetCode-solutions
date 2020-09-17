/**
 * Given the array nums, for each nums[i] find out how many numbers in the
 * array are smaller than it. That is, for each nums[i] you have to count the
 * number of valid j's such that j != i and nums[j] < nums[i].
 *
 * Return the answer in an array.
 */

function smallerNumbersThanCurrent(nums) {
  var maps = {};
  var answer = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in maps) {
      maps[nums[i]]++;
    } else {
      maps[nums[i]] = 1;
    }
  }

  var keys = Object.keys(maps);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (nums[i] > Number(keys[j])) {
        answer[i] += maps[keys[j]];
      }
    }
  };

  return answer;
}

var nums = [5,0,10,0,10,6];

var answer = smallerNumbersThanCurrent(nums);

console.log(answer);
