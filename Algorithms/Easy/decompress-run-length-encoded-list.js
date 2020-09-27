/**
 * You are given a list nums of integers representing a list compressed with
 * run-length encoding.
 *
 * Consider each adjacent pair of elements:
 *
 * [freq, val] = [nums[2*i], nums[2*i]+1] with (i >= 0)
 *
 * For each such pair, there are freq elements with value val concatenated in
 * a sublist. Concatenate all the sublists from left to right to generate the
 * decompressed list.
 *
 * Return the decompressed list.
 *
 * Example
 * =======
 *
 * nums = [1, 2, 3, 4]
 *
 * >>> [2, 4, 4, 4]
 */

function decompressRLElist(nums) {
  var answer = [];

  let freq;
  let val;

  while (nums.length !== 0) {
    freq = nums.shift();
    val = nums.shift();

    answer = [...answer, ...(new Array(freq).fill(val))];
  }

  return answer;
}

var nums = [1, 2, 3, 4];

var answer = decompressRLElist(nums);

console.log(answer);
