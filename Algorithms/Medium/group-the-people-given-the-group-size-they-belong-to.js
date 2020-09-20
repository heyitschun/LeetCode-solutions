/**
 * There are n people that are split into some unknown number of groups.
 * Each person is labeled with a unique ID from 0 to n-1.
 *
 * You are given an integer array `groupSizes`, where `groupSizes[i]` is the
 * size of the group that person `i` is in. For example, groupSizes[1] = 3,
 * then person 1 must be in a group of size 3.
 *
 * Return a list of groups such that each person i, is in a group
 * of size groupSizes[i].
 *
 * Each person should appear in exactly one group, and every person must be
 * in a group. If there are multiple answers, return any of them. It is
 * guaranteed that there will be at least one valid solution for the input.
 *
 * Example
 * =======
 *
 * groupSizes = [3, 3, 3, 3, 3, 1, 3];
 *
 * >>> [ [5], [0, 1, 2], [3, 4, 6] ]
 */

function groupThePeople(groupSizes) {
  var groupMap= {};
  var groups = [];
  
  for(let i = 0; i < groupSizes.length; i++) {
    if (groupMap[groupSizes[i]] === undefined) {
      groupMap[groupSizes[i]] = [i];
    } else {
      groupMap[groupSizes[i]] = [i, ...groupMap[groupSizes[i]]];
    };

    if (groupMap[groupSizes[i]].length === groupSizes[i]) {
      groups.push(groupMap[groupSizes[i]]);
      groupMap[groupSizes[i]] = undefined;
    };
  }

  return groups;
}

var groupSizes = [2,1,3,3,3,2];

var answer = groupThePeople(groupSizes);

console.log(answer);

/**
 * Have a hashmap with group size
 *
 * If group size is full, pop it from the hashmap and append to answer array.
 */
