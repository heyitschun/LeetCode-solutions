/**
 * Given an array `candies` and integer `extraCandies`, where candies[i]
 * represents the number of candie that the ith kid has,
 * return an array that indicates for each kid if receiving all of the
 * extraCandies will make them have at least as many candies as the kid
 * with the most candies in the starting array.
 *
 * Example:
 *
 * Input:
 * candies = [2,3,5,1,3]
 * extra = 3
 *
 * Output:
 * [true, true, true, false, true]
 */

function kidsWithCandies(candies, extraCandies) {
  var max = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) candies[i] = true
    else candies[i] = false;
  }

  return candies;
}

var candies = [2, 3, 5, 1, 3];
var extraCandies = 3;

var answer = kidsWithCandies(candies, extraCandies);

console.log(answer);
