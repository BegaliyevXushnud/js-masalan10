

// 59-masala

// function nthSmallest(arr, n) {
// arr.sort( (a, b) => a-b);
//     return arr[n - 1]
// }
//
// // Test case
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 4)); // Output: 10



// 60-masala

// function mostFrequent(arr) {
//     let result = [];
//     let sne = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         let res = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i] == arr[j]) {
//                 res++;
//             }
//         }
//         if(res < result){
// result = res;
// sne = result
//         }
//     }
//     return sne
// }
//
// // Test case
// console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
// console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3




// 61-masala
// function mostFrequentChar(str) {
//     const frequencyMap = [...str].reduce((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         if (!acc.max || acc[char] > acc[acc.max]) {
//             acc.max = char;
//         }
//         return acc;
//     }, {});
//
//     return frequencyMap.max;
// }
//
// // Test case
// console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
// console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"



// 62-masala
// function firstMissingPositive(nums) {
//     nums.sort((a, b) => a - b); // Massivni saralash
//     let smallestPositive = 1; // Eng kichik musbat sonni 1 ga o'rnatish
//
//     for (let num of nums) {
//         if (num === smallestPositive) {
//             smallestPositive++; // Agar son `smallestPositive` ga teng bo'lsa, uni oshirish
//         }
//     }
//
//     return smallestPositive;
// }
//
// // Test case
// console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
// console.log(firstMissingPositive([1, 2, 0])); // Output: 3




// 63-masala
// function printCharsInLine(s) {
//    s = s.split("").join(" ");
//    return s;
// }
//
// // Test case
// console.log(printCharsInLine("hello")); // Output: "h e l l o"




// 64-masala
// function longestCommonPrefix(strs) {
//    let arr = strs[0]
//     for (let i = 0; i < arr.length; i++) {
//         for(let item of strs) {
// if(item[i] !== arr[i]) {
//     return item.slice(0,i)
// }
//         }
//     }
// }
//
// // Test case
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""


// 65-masala
// function maxSumSubmatrix(matrix) {
//    let max_count = 0
//     let result = null
//     for (let i = 0; i < matrix.length; i++) {
//         let total = 0
//         for (let j = 0; j < matrix[i].length; j++) {
//             total += matrix[i][j]
//         }
//         if(total > max_count) {
//             max_count = total
//             result = matrix[i]
//         }
//     }
//     return result
// }
//
// // Test case
// console.log(maxSumSubmatrix([
//     [10, 2, 3],
//     [4, 11, 6],
//     [7, 8, 9]
// ])); // [7, 8, 9]






// 66-masala
// function intersection(nums1, nums2) {
//     for(let item of nums1) {
//         if(nums2.includes(item)){
//             return item;
//         }
//     }
// }
//
// // Test case
// console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]







// 67-masala
// function twoSumPairs(nums, target) {
//     let result =[];
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 result.push([nums[i], nums[j]]);
//             }
//         }
//     }
//     return result;
// }
//
// // Test case
// console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
// console.log(twoSumPairs([3, 2, 4], 6)); // Output: [[2, 4]]





// 68-masala
// function charFrequency(s) {
//   let result = {};
//   for(let item of s) {
//       result[item] = (result[item] || 0) + 1;
//   }
//   return result;
// }
//
// // Test case
// console.log(charFrequency("aabbcc")); // Output: { a: 2, b: 2, c: 2 }
// console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }







// 69-masala
// function deepestValue(obj) {
//     let result = null
//     let total = 0;
//     let arr = [{value:obj,step:1}]
//     for (let i = 0; i < arr.length; i++) {
//         let {value,step} = arr[i]
//         for(let key in value){
//             if(typeof value[key] === "object"){
//                 arr.push({value:value[key],step:step + 1})
//             }else if(step > total){
//                 total =step
//                 result = value[key]
//             }
//         }
//     }
//     return result
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(deepestValue(obj)); // Output: 4




// 70-masala
// function concatStrings(obj) {
//     let result = '';
//     let stack = [obj];
//
//     while (stack.length > 0) {
//         let current = stack.pop();
//
//         for (let key in current) {
//             if (typeof current[key] === 'object' && current[key] !== null) {
//                 stack.push(current[key]);
//             } else if (typeof current[key] === 'string') {
//                 result += current[key];
//             }
//         }
//     }
//
//     return result;
// }
//
// // Test case
// const obj = {
//     a: "Hello",
//     b: {
//         c: " ",
//         d: {
//             e: "World",
//             f: {
//                 g: "!"
//             }
//         }
//     }
// };
// console.log(concatStrings(obj)); // Output: "Hello World!"




// 71-masala
// function sortByLength(s) {
//     return s
//         .split(' ')
//         .sort((a, b) => a.length - b.length)
//         .join(' ');
// }
//
// // Test case
// console.log(sortByLength("short longest medium")); // Output: "short medium longest"
// console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"







// 72-masala
// function findNumbers(obj) {
//     const numbers = [];
//     const stack = [obj];
//
//     while (stack.length > 0) {
//         const current = stack.pop();
//
//         for (let key in current) {
//             if (typeof current[key] === 'object' && current[key] !== null) {
//                 stack.push(current[key]);
//             } else if (typeof current[key] === 'number') {
//                 numbers.push(current[key]);
//             }
//         }
//     }
//
//     return numbers;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(findNumbers(obj)); // Output: [1, 2, 3, 4]


// 73-masala
// function longestWord(s) {
//   let str  = s.split(' ');
//   let long =  0;
//   let word = null;
//   for(let i = 0; i <= str.length -1; i++) {
//       if(long < str[i].length) {
//           long = str[i].length;
//           word = str[i];
//       }
//   }
//   return word
// }

// console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
// console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"



// 74-masala

// function reverseUpperCase(s) {
// s = s.toUpperCase();
// return s;
// }

// console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
// console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"



// 75-masala
// function extractNumbers(s) {
//     return s.split(/\D+/).filter(Boolean).map(Number)
// }
// console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
// console.log(extractNumbers("123 Main St.")); // Output: [123]


// izoh : "split(/\D+/)." stckoverflowdan copy qildim






// 76-masala

// function valueTypes(obj) {
//     const types = [];
//     const stack = [obj];
//
//     while (stack.length > 0) {
//         const current = stack.pop();
//
//         for (let key in current) {
//             const value = current[key];
//             types.push(typeof value);
//
//             if (value && typeof value === 'object') {
//                 stack.push(value);
//             }
//         }
//     }
//
//     return types;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: "string",
//     c: true,
//     d: {
//         e: 3.14,
//         f: null,
//         g: {
//             h: undefined,
//             i: [1, 2, 3]
//         }
//     }
// };
// console.log(valueTypes(obj));
// // Output: ["number", "string", "boolean", "object", "number", "object", "undefined", "object"]








// 77-masala
// function invertObject(obj) {
//     const result = {};
//     const stack = [obj];
//
//     while (stack.length > 0) {
//         const current = stack.pop();
//
//         for (let key in current) {
//             const value = current[key];
//
//             if (typeof value === 'object' && value !== null) {
//                 stack.push(value);
//             } else {
//                 result[value] = key; // Agar qiymat takrorlansa, oxirgi qiymatni saqlaydi
//             }
//         }
//     }
//
//     return result;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(invertObject(obj)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }




// 78-masala
// function isPalindrome(s) {
//    let clen = s.toLowerCase().replace(/[^a-z0-9]/g, '');
//    return clen === clen.split('').reverse().join('')
// }
//
// // Test case
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("Hello, World!")); // Output: false



// 79-masala
// function sumNumbers(obj) {
//     let sum = 0;
//
//     function traverse(value) {
//         if (typeof value === 'number') {
//             sum += value;
//         } else if (typeof value === 'object' && value !== null) {
//             for (let key in value) {
//                 traverse(value[key]);
//             }
//         }
//     }
//
//     traverse(obj);
//     return sum;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(sumNumbers(obj)); // Output: 10




// 80-masala
// function capitalizeWords(s) {
//     var splitStr = s.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     return splitStr.join(' ');
// }
//
// // Test case
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"
