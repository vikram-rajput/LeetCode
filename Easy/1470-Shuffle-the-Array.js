/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let p1 = 0
   let p2 = n ;
   const result = []
   while(p1<n){
       result.push(nums[p1])
       result.push(nums[p2])
       p1++
       p2++
   }
   return result
};