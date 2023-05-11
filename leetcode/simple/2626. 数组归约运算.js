/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init
    nums.forEach((num) => {
        result = fn(result, num)
    })
    return result
};

var nums = [1,2,3,4]
var fn = function sum(accum, curr) { return accum + curr * curr; }
var init = 100

console.log(reduce(nums, fn, init))
