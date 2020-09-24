/**
 * There are n solders standing in a line. Each soldier is assigned a unique
 * rating value.
 *
 * You have to form a team of 3 solders amongst them under the following rules:
 *
 * 1. Choose 3 soldiers with index (i, j, k) with rating r (r[i], r[j], r[k]).
 * 2. A team is valid if (r[i] > r[j] > r[k]) or (r[i] < r[j] < r[k]) where
 *    (0 <= 1 < j < k < n).
 *
 * Check the number of teams you can form given the conditions.
 *
 * Note that soldiers can be part of multiple teams!
 *
 * Example
 * =======
 *
 * rating = [2,5,3,4,1]
 *
 * >>> 3
 *
 * Explanation
 * ===========
 *
 * Three teams can be formed given the conditions:
 *
 * (2,3,4)
 *
 * (5,4,1)
 *
 * (5,3,1)
 */

function numTeams(ratings) {
  var answer = 0;

  var n = ratings.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < i) continue;
      for (let k = 0; k < n; k++) {
        if (j < k) {
          if (ratings[i] < ratings[j] && ratings[j] < ratings[k]) {
            answer++;
          } else if (ratings[i] > ratings[j] && ratings[j] > ratings[k]) {
            answer++;
          }
        }
      }
    }
  }

  return answer;
}

var ratings = [2, 5, 3, 4, 1];

var answer = numTeams(ratings);

console.log(answer);
