/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let list = {};

  for (let i = 0; i < nums.length; i++) {
    let searchNum = target - nums[i];

    if (searchNum in list) {
      return [list[searchNum], i];
    }
    list[nums[i]] = i;
  }
  return null;
};
console.log(twoSum([2, 7, 11, 15], 9));
