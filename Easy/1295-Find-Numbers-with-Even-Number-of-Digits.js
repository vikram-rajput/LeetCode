/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    var ans = [];
    var temp = 0;
    for(n of nums){
        while(n != 0){
            n /=10;
            temp++
        }
        if(temp % 2 == 1){
            ans.push(n);
        }
    }
    return ans.length;
};