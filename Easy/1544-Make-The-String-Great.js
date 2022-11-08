/**
 * @param {string} 
 * @return {string}
 */
 var makeGood = function(s) {
    let stack = [];
     for (let char of s) {
       stack.push(char);
       while (stack.length >= 2 && isBad(stack[stack.length - 2], stack[stack.length - 1])) {
         stack.pop();
         stack.pop();
       }
     }
     return stack.join("");
   };
     
   function isBad(char1, char2) {
     return Math.abs(char1.charCodeAt() - char2.charCodeAt()) === 32;
   }