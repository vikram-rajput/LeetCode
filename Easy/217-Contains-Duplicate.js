/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    var arrMap = {};
    // nums.sort((a,b)=>b-a);
    for(let idx of nums ){
        if(arrMap[idx] !== undefined) return true;
        arrMap[idx]= true;
    }
    return false;
};