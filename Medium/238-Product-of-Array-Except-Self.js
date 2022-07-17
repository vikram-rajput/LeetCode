/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    console.clear();
    var len = nums.length;
    var output = []; 
    if(len < 1){
      return output;
    }
    let prod  = 1;
    for(var i = 0; i< len; i++){
      prod *= nums[i];
      output.push(prod);
    }
    prod = 1; 
    for(let i = len-1; i>0; --i){ 
      output[i] = output[i-1]*prod; 
      prod *= nums[i];
    }
    output[0] = prod;
   return output;
  };