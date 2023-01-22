// /* Write a function that takes an array of integers and returns the second highest number in the array */
// let arr = []
// function secondHighestNumber(arr){

// let highest = 0;
//     for(let k of arr){
//         highest = Math.max(highest, k);

//     }


// }

// secondHighestNumber(arr); // 3

// function secondHighest(arr) { 
//     let highest = arr[0]; 
//     let secondHighest = arr[0]; 
//     for (let i = 1; i < arr.length; i++) 
//     { 
//         if (arr[i] > highest) { secondHighest = highest; highest = arr[i]; } 
//         else if (arr[i] > secondHighest && arr[i] < highest) { secondHighest = arr[i];
//      } 
// } return secondHighest; } 


// console.log(secondHighest([1, 2, 3, 4, 5])); // 4
// console.log(secondHighest([10, 20, 30, 40, 50, 60])); // 50

// Write a function that takes a string and returns the most common letter in the string.


// hello world


/* 

{
    h:1
    e:1
    l:3
    o:2
    w:1
    r:1
    d:1
}

[1,1,3,2,1,1,1]
max

*/

function mostCommonLetter(string){
// turn sting to array
// converty hashMap
// check values for max

let str = string;
let mostCount = 0;
let mostCountLetter;
let hashMap = {};
for(let i= 0; i<str.length; i++){
    if(hashMap[str[i]] == undefined){
        hashMap[str[i]] = 1;
    } else{
        hashMap[str[i]] = hashMap[str[i]] + 1;
    }
}

for(let k in hashMap){
    // console.log(hashMap[k])
 mostCount = Math.max(mostCount, hashMap[k])
 
}


for(let k in hashMap){
   if(hashMap[k] == mostCount){
    mostCountLetter = k;
   }
     
}
console.log(mostCountLetter);
return mostCountLetter;


}

mostCommonLetter('hello world');


function mostCommonLetter(str) {
    const charCount = {};
    let maxChar = "";
    let maxCount = 0;
    for (let char of str) {
      charCount[char] = charCount[char] + 1 || 1;
      if (charCount[char] > maxCount) {
        maxChar = char;
        maxCount = charCount[char];
      }
    }
    return maxChar;
  }
  console.log(mostCommonLetter("hello world")); // 'l'
  console.log(mostCommonLetter("This is a test")); // 't'