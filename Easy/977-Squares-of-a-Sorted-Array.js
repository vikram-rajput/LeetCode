/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    nums
  var n = [];
   for(let i in nums){
   n.push(nums[i]*nums[i])
  } 
  return n.sort((a,b)=>a-b);
};