/**
 * Given an array of integers, find the int that appears only once.
 *
 */

function singleNumber(nums) {
  var answer = 0;
  
  nums.forEach(n => {
    answer ^= n;
  });

  return answer;
}

var nums = [4,1,2,1,2];
var answer = singleNumber(nums);

console.log(answer);
