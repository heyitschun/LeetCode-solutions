/**
 * Given an integer n and an integer start.
 *
 * Define an array nums where nums[i] = start + 2*i (0-indexed) 
 * and n == nums.length.
 *
 * Return the bitwise XOR of all elements of nums.
 */

function xorOperation(n, start) {
  var nums = [...Array(n).keys()].map(i => start + 2*i);
  var xor = nums.reduce((a, b) => a^b, 0);

  return xor;
}


var n = 5;
var start = 0;

var answer = xorOperation(n, start);

console.log(answer);
