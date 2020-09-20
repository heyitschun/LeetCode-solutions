/**
 * Given two non-negative integers low and high, return the count of odd
 * numbers between low and high (inclusive).
 *
 * Example
 * -------
 * 
 * low = 3
 * high = 7
 *
 * >>> 3
 */

function countOdds(low, high) {

  if (low % 2 === 1) {
    return (Math.ceil((high+1-low)/2))
  } else {
    return (Math.floor((high+1-low)/2))
  }

}

var low = 1;
var high = 5;

var answer = countOdds(low, high);

console.log(answer);
