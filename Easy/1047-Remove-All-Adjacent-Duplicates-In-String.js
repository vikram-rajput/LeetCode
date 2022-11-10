/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    const queue = []
   for(let i = 0; i < s.length; i++) {
     if(queue.length > 0 && queue[queue.length - 1] === s[i]) {
        queue.pop()
     } else {
       queue.push(s[i])
     }
   }
   return queue.join('') 
 };