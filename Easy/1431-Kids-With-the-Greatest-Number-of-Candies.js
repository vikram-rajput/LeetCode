/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    
    for(let i = 0; i< candies.length; i++)
        {
            max = candies[i] > max ? candies[i] : max;
        }
    
    let result = [];
    for(let i = 0; i< candies.length; i++)
        {
            if(candies[i] + extraCandies >= max)
                {
                    result[i] = true;
                }
            else{
                result[i] = false;
            }
        }
    return result;
};