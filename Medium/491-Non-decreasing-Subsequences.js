/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let res = [], n = nums.length;
  backtrack(0, []);
  return res;
  
  function backtrack(start, arr) {
    if (arr.length > 1) res.push([...arr]);
    
    let used = new Set();
    for (let i = start; i < n; i++) {
      if (used.has(nums[i]) || (arr.length > 0 && arr[arr.length - 1] > nums[i])) continue;
      
      arr.push(nums[i]);
      backtrack(i + 1, arr);
      arr.pop();
      
      used.add(nums[i]);
    }
  }  
};