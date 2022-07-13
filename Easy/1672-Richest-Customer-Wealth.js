/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let maximumWealthSoFar = 0;
    for(var i = 0; i< accounts.length; i++ ){
        let currentCustomerWealth = 0;
        for(var j = 0; j< accounts[i].length; j++){
            currentCustomerWealth += accounts[i][j];
        }
        maximumWealthSoFar = Math.max(maximumWealthSoFar,currentCustomerWealth)
    }
    return maximumWealthSoFar;
};