/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  for (const num of nums) {
    init = fn(init, num);
  }
  return init;
};
nums = [1, 2, 3, 4];

fn = function sum(accum, curr) {
  return accum + curr;
};
init = 0;

console.log(reduce(nums, fn, init));
