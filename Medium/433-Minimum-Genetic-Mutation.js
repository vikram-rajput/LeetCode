/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
 var minMutation = function(start, end, bank) {
    let queue = [start], n = bank.length;
 let used = Array(n).fill(0), steps = 0;
 
 while (queue.length) {
   for (let i = queue.length; i > 0; i--) {
     let str = queue.shift();
     if (str === end) return steps;
     for (let j = 0; j < n; j++) {
       if (!used[j] && isOneCharDiff(str, bank[j])) {
         used[j] = 1;
         queue.push(bank[j]);
       }
     }
   }
   steps++;
 }
 return -1;
 
 function isOneCharDiff(str1, str2) {
   let diff = 0;
   for (let i = 0; i < str1.length; i++) {
     if (str1[i] !== str2[i]) diff++;
   }
   return diff === 1;
 }
};