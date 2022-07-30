/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
 var wordSubsets = function(words1, words2) {
    let words2freq = new Int8Array(26), cmax = 0,
         check = new Int8Array(26), ans = []
     for (let i = 0; i < words2.length; i++, check.fill()) {
         let word = words2[i]
         for (let j = 0; j < word.length; j++)
             check[word.charCodeAt(j) - 97]++
         for (let j = 0; j < 26; j++) {
             let diff = check[j] - words2freq[j]
             if (diff > 0) cmax += diff, words2freq[j] += diff
             if (cmax > 10) return []
         }
     }
     for (let i = 0; i < words1.length; i++, check.fill()) {
         let word = words1[i], j
         if (word.length < cmax) continue
         for (j = 0; j < word.length; j++)
             check[word.charCodeAt(j) - 97]++
         for (j = 0; j < 26; j++)
             if (check[j] < words2freq[j]) break
         if (j === 26) ans.push(word)
     }
     return ans 
 };