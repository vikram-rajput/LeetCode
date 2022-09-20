/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    let n = nums1.length, m = nums2.length;
 let dp = Array(n), maxLen = 0;
 for (var i = 0; i < n; i++) dp[i] = Array(m).fill(0);
 for (i = 0; i < n; i++) {
   for (var j = 0; j < m; j++) {
     if (nums1[i] === nums2[j]) {
       let prev = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0; // get longest subarray length ending at nums1[i - 1] and nums2[j - 1]
       dp[i][j] = prev + 1;
       maxLen = Math.max(maxLen, dp[i][j]);
     }
   }
 }
 return maxLen;
};