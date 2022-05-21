// const div = document.getElementById('div');
// const para = document.getElementById('para');






// document.documentElement.style.setProperty('--main-theme', 'yellow');

// console.log('hse');



// let num = 1522225559;
// let ans = [];

// let arr = [...num.toString()].sort((a, b) => a - b);
// var numCount = arr.reduce(function (obj, num) {
//     if (!obj[num]) {
//         obj[num] = 1;
//     } else {
//         obj[num]++;
//     }
//     return obj;
// }, {});
// for (let i = 0; i < Object.values(numCount).length; i++) {
//     if (Object.entries(numCount)[i][1] === Math.max(...Object.values(numCount))) {
//         ans.push(parseInt(Object.entries(numCount)[i][0]));
//     }
// }

// console.log(ans);




// P A R S E R

// let inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark";

// function addPropertyChain(chain, val, obj) {
//     var propChain = chain.split(".");
//     if (propChain.length === 1) {
//         obj[propChain[0]] = val;
//         return;
//     }
//     var first = propChain.shift();
//     if (!obj[first]) {
//         obj[first] = {};
//     }
//     addPropertyChain(propChain.join("."), val, obj[first]);
// }

// function queryObjectify(str) {
//     var obj = {};
//     str = str.replace("%20", " ");
//     str = str.split('&');
//     str = str.map(elem => {
//         return elem.split('=');
//     });
//     console.log(str);
//     for (let i = 0; i < str.length; i++) {
//         addPropertyChain(str[i][0], str[i][1], obj);
//     }
//     return obj;
// }

// console.log(queryObjectify(inData));


// S I N G L E L I N K E D L I S T
// import LinkedList from './modu.js'

// function init() {
//     const list = new LinkedList();

//     list
//         .append('a')
//         .append('b')
//         .append('c')
//         .append('d');


//     list.insertAfter('x', list.find('c'));

//     list.delete('x');

//     return list;
// }

// console.log(init().toString());


// let words = ['banana', 'grapefruit', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana', 'grapefruit', 'grapefruit'];

// let set = [...new Set(words)];

// let wordsCount = words.reduce(function (obj, elem) {
//     if (!obj[elem]) {
//         obj[elem] = 1;
//     } else {
//         obj[elem]++;
//     }
//     return obj;
// }, {})
// console.log(wordsCount);


// for (let i = 0; i < set.length; i++) {
//     for (let j = 0; j < set.length; j++) {
//         if (wordsCount[`${set[i]}`] > wordsCount[`${set[j]}`]) {
//             let tmp = set[i];
//             set[i] = set[j];
//             set[j] = tmp;
//         }
//     }
// }

// console.log(set);


// const mySuperSort = (array) => {

//     const temp = array.reduce((acc, cur) => {
//         acc[cur] = (acc[cur] || 0) + 1;
//         return acc;
//     }, {})

//     const keys = Object.keys(temp);
//     return keys.sort((a, b) => {
//         return temp[b] - temp[a];
//     })
// }

// console.log(mySuperSort(words));



// var validPalindrome = function (s) {
//     let flag = false;
//     if (s.length < 3) {
//         return true;
//     }
//     for (let j = 0; j < s.length; j++) {
//         let tmp = s.slice(0, j) + s.slice(j + 1);
//         for (let i = 0; i < Math.floor(tmp.length / 2); i++) {
//             if (tmp[i] != tmp[tmp.length - i - 1]) {
//                 flag = false;
//                 break;
//             }
//             flag = true;
//         }
//         if (flag) {
//             flag = true;
//             return flag;
//         }
//     }
//     return flag;
// };
// console.log(validPalindrome("yd")); // true
// console.log(validPalindrome("ydyypp")); // true
// console.log(validPalindrome("abca")); // true
// console.log(validPalindrome("abc")); // false



// for (var a = [], i = 0; i < 3; ++i) a[i] = i;

// function shuffle(array) {
//     var tmp, current, top = array.length;
//     if (top)
//         while (--top) {
//             current = Math.floor(Math.random() * (top + 1));
//             tmp = array[current];
//             array[current] = array[top];
//             array[top] = tmp;
//         }
//     return array;
// }

// a = shuffle(a);

// console.log(a);


// let grid1 = [
//     ['1', '1', '1', '1', '0'],
//     ['1', '1', '0', '1', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '0', '0', '0']
// ];

// let grid2 = [
//     ['1', '1', '0', '0', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '1', '0', '0'],
//     ['0', '0', '0', '1', '1']
// ];

// let grid3 = [
//     ['1', '0', '0', '0', '1'],
//     ['0', '0', '0', '0', '0'],
//     ['0', '0', '0', '0', '0'],
//     ['1', '0', '0', '0', '1']
// ];

// let grid4 = [
//     ['1', '0', '1', '0', '1'],
//     ['0', '1', '0', '1', '0'],
//     ['1', '0', '1', '0', '1'],
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0']
// ];

// let grid5 = [
//     ['0', '0', '0', '0', '0'],
//     ['0', '0', '0', '0', '0'],
//     ['0', '0', '0', '0', '0'],
//     ['0', '0', '0', '0', '0']
// ];

// let grid6 = [
//     ['1', '1', '1', '1', '1'],
//     ['1', '1', '1', '1', '1'],
//     ['1', '1', '1', '1', '1'],
//     ['1', '1', '1', '1', '1']
// ];

// let grid7 = [
//     ['1', '0', '1', '0', '1'],
//     ['1', '0', '1', '0', '1'],
//     ['1', '0', '1', '0', '1'],
//     ['1', '0', '1', '0', '1']
// ];

// let grid8 = [
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0'],
//     ['0', '1', '0', '1', '0']
// ];

// console.log(grid4.length * grid4[0].length)

// // 

// let numIslands = function (grid) {
//     if (grid.length === 0) return 0
//     let rowsL = grid.length;
//     let colsL = grid[0].length;
//     let counter = 0;

//     function markNeighbours(binaryMatrix, R, C) {
//         binaryMatrix[R][C] = '6';
//         if (binaryMatrix ? . [R - 1] ? . [C] === '1') {
//             markNeighbours(binaryMatrix, R - 1, C)
//         }
//         if (binaryMatrix ? . [R + 1] ? . [C] === '1') {
//             markNeighbours(binaryMatrix, R + 1, C)
//         }
//         if (binaryMatrix[R][C - 1] === '1') {
//             markNeighbours(binaryMatrix, R, C - 1)
//         }
//         if (binaryMatrix[R][C + 1] === '1') {
//             markNeighbours(binaryMatrix, R, C + 1)
//         }
//     }

//     for (let R = 0; R < rowsL; R++) {
//         for (let C = 0; C < colsL; C++) {

//             if (grid[R][C] === '1') {
//                 counter++;
//                 markNeighbours(grid, R, C);
//             }
//         }
//     }
//     console.dir(grid);
//     return counter;
// };

// console.log(numIslands(grid3));



// const checkKvasChange = bills => {
//     let [five, ten] = [0, 0];

//     let isValid = true;
//     bills.forEach((b) => {
//         switch (b) {
//             case 5:
//                 five += 1;
//                 break;

//             case 10:
//                 five -= 1;
//                 ten += 1;
//                 break;

//             default:
//                 if (ten > 0) {
//                     ten -= 1;
//                     five -= 1;
//                 } else {
//                     five -= 3;
//                 }
//                 break;
//         }

//         if (Math.min(five, ten) < 0) {
//             isValid = false;
//         }
//     });

//     return isValid;


// }


// console.log(checkKvasChange([5, 5, 5, 10, 20])); // true
// console.log(checkKvasChange([5, 5, 10, 10, 20])); // false
// console.log(checkKvasChange([5, 10, 20, 10, 5])); // false
// console.log(checkKvasChange([5, 10, 5, 20, 5, 5])); // false


// -- -- -- -- -- -- -- -- -- -- -- -- - Задача - про - конвертацию - из - арабских - в - римские-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//     Дано натуральное число, необходимо преобразовать его в римскую запись.
// Римские цифры представлены семью разными символами:
//     I - 1,
//     V - 5,
//     X - 10,
//     L - 50,
//     C - 100,
//     D - 500,
//     M - 1000

// Справка: римские цифры обычно пишутся от наибольшего к наименьшему слева направо.
// Однако цифра четыре - это не IIII.Вместо этого число четыре записывается как IV.
// Поскольку единица стоит перед пятью, мы вычитаем ее и получаем четыре.
// Тот же принцип применяется к числу девять, которое записывается как IX.

// Вычитание используется в шести случаях:

//     -I можно поставить перед V(5) и X(10), чтобы получилось 4 и 9. -
//     X можно поставить перед L(50) и C(100), чтобы получилось 40 и 90. -
//     C можно поставить перед D(500) и M(1000), чтобы получилось 400 и 900.

// Входные данные: n - натуральное число от 1 до 3000.

// Вывод: римская запись числа n.

// const convertIntToRoman = n => {
//     if (n >= 1000) return 'M' + convertIntToRoman(n - 1000);

//     if (n >= 500) return n >= 900 ?
//         'CM' + convertIntToRoman(n - 900) :
//         'D' + convertIntToRoman(n - 500);

//     if (n >= 100) return n >= 400 ?
//         'CD' + convertIntToRoman(n - 400) :
//         'C' + convertIntToRoman(n - 100);

//     if (n >= 50) return n >= 90 ?
//         'XC' + convertIntToRoman(n - 90) :
//         'L' + convertIntToRoman(n - 50);

//     if (n >= 10) return n >= 40 ?
//         'XL' + convertIntToRoman(n - 40) :
//         'X' + convertIntToRoman(n - 10);

//     if (n >= 5) return n == 9 ? 'IX' : 'V' + convertIntToRoman(n - 5);

//     if (n > 0) return n == 4 ? 'IV' : 'I' + convertIntToRoman(n - 1);

//     return '';
// }

// console.log(convertIntToRoman(3)); // III
// console.log(convertIntToRoman(58)); // LVIII
// console.log(convertIntToRoman(1994)); // MCMXCIV

// console.log(convertIntToRoman(3)); // III
// console.log(convertIntToRoman(4)); // IV
// console.log(convertIntToRoman(9)); // IX
// console.log(convertIntToRoman(58)); // LVIII
// console.log(convertIntToRoman(647)); // DCXLVII
// console.log(convertIntToRoman(1994)); // MCMXCIV
// console.log(convertIntToRoman(4999)); // MM CM XC IX

// Входные данные: n - натуральное число от 1 до 3000.


//     -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача - о - днях - и - билетах-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//     1 DAY = 2 $
// 7 DAY = 7 $
// 30 DAY = 25 $

// var mincostTickets = function (days, costs) {
//     let point, pointIndex = 0;
//     let arr = [];
//     let budget = 0;

//     if (days.length === 0) return 0;

//     if (days.length == 1) return 1;

//     for (let i = 0; i < days.length; i++) {

//         if (days ? . [i + 1]) {
//             point = days[pointIndex];
//             if (days[i + 1] - point <= 6) {} else {
//                 if (i + 1 - pointIndex > 3) {
//                     budget += costs[1];
//                     arr.push(costs[1]);
//                     pointIndex = i + 1;
//                     continue;
//                 } else {
//                     budget += (i + 1 - pointIndex) * costs[0];
//                     arr.push((i + 1 - pointIndex) * costs[0]);
//                     pointIndex = i + 1;
//                     continue;
//                 }
//             }
//         } else {
//             if (pointIndex == i) {
//                 budget += costs[0];
//                 arr.push(costs[0]);
//             } else {
//                 if (i + 1 - pointIndex > 3) {
//                     budget += costs[1];
//                     arr.push(costs[1]);
//                 } else {
//                     budget += (i + 1 - pointIndex) * costs[0];
//                     arr.push((i + 1 - pointIndex) * costs[0]);
//                 }
//             }
//         }
//     }

//     if (budget > costs[2]) budget = costs[2];
//     return budget;
// };

// console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]));

// console.log('#1', mincostTickets([1, 2, 3, 4, 13, 21, 30], [2, 7, 25])); // 13$
// console.log('#2', mincostTickets([1, 2, 3, 17, 18, 19, 20, 27, 28, 29, 30], [2, 7, 25])); // 20$ 
// console.log('#3', mincostTickets([1, 9, 19, 29], [2, 7, 25])); // 8$
// console.log('#4', mincostTickets([1, 3, 5, 7, 8, 9, 10, 11, 19, 20, 21, 22, 28, 29, 30], [2, 7, 25])); // 25$ 
// console.log('#5', mincostTickets([1, 2, 4, 5, 7, 21, 30], [2, 7, 25])); // 11$
// console.log('#6', mincostTickets([1, 4, 5, 6, 7, 8, 9, 15, 22, 24, 25, 26, 27, 30], [2, 7, 25])); // 22$
// console.log('#7', mincostTickets([1, 3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [2, 7, 25])); // 25$ !!!!!!!!
// console.log('#8', mincostTickets([1, 3, 7], [2, 7, 25])); // 6$


// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача - о - декодировании - строки-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


//     const decodeString = s => {
//         let lettersToMultiply;
//         let times = 0;
//         let index = 0;
//         while (/\d/.test(s)) {
//             if (!isNaN(parseInt(s[index]))) {
//                 lettersToMultiply = s.match(/\[(.*?)\]/)[1];
//                 if (/\[/.test(lettersToMultiply)) {
//                     lettersToMultiply += ']';
//                 }
//                 times = parseInt(s[index]);
//                 s = s.slice(0, index) + s.slice(index + 1);
//                 s = s.replace(s.match(/\[(.*?)\]/)[0], '*');
//                 s = s.replace('*', lettersToMultiply.repeat(times));
//             }
//             index++;

//         }
//         s = s.replace(/\]/, '');
//         return s;
//     }

// Решение из интернета

// const decodeString = (s) => {
//     const replace = (str) =>
//         /\[+/.test(str) ?
//         replace(
//             str.replace(/(\d+)\[(\w+)\]/, (_, num, group) => group.repeat(num))
//         ) :
//         str;

//     return replace(s);
// };




// console.log('#1', decodeString('3[a]2[bc]'));
// // 'aaabcbc' ✅

// console.log('#2', decodeString('3[a2[c]]'));
// // 'accaccacc'

// console.log('#3', decodeString('2[abc]3[cd]ef'));
// // // 'abcabccdcdcdef' ✅

// console.log('#4', decodeString('abc3[cd]xyz'));
// // 'abccdcdcdxyz' ✅

// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача - о - декодировании - строки-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//     const tests = ["(())(){[}]", "{}", "[({})[", "({[]})", "", "{()}[]", "{(})[]", "{()[]}", "{})([]"];

// const checkBrackets = (str) => {
//     let counter = 0;

//     if (str.length === 0) return true;
//     if (str.length === 1) return false;
//     if (str.length % 2 !== 0) return false;

//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '(') {
//             stack.push(')');
//             counter++;
//         } else if (str[i] == '{') {
//             stack.push('}');
//             counter++;
//         } else if (str[i] == '[') {
//             stack.push(']');
//             counter++;
//         } else {

//             if (str[i] == ')') {
//                 let check = stack.pop();
//                 if (check != str[i]) return false;
//                 counter--;
//             }
//             if (str[i] == ']') {
//                 let check = stack.pop();
//                 if (check != str[i]) return false;
//                 counter--;
//             }
//             if (str[i] == '}') {
//                 let check = stack.pop();
//                 if (check != str[i]) return false;
//                 counter--;
//             }

//         }


//     }
//     if (counter != 0) return false;
//     return true;
// }

// // Решение из интернета
// // const checkBrackets = (str) =>
// //   !str.split("").reduce((acc, curr) => !acc ? curr : "[]{}()".includes(acc.slice(-1)[0] + curr) ? acc.substring(0, acc.length - 1) : acc + curr, "");

// console.log('#1', checkBrackets(tests[0])); // false
// console.log('#2', checkBrackets(tests[1])); // true
// console.log('#3', checkBrackets(tests[2])); // false
// console.log('#4', checkBrackets(tests[3])); // true
// console.log('#5', checkBrackets(tests[4])); // true
// console.log('#6', checkBrackets(tests[6])); // true
// console.log('#7', checkBrackets(tests[7])); // false
// console.log('#8', checkBrackets(tests[8])); // true
// console.log('#9', checkBrackets(tests[9])); // false

// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача - переверунтое - целочисленное - число-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


//     const tests = [321, -321, 0, 120, 4270, 901000, 1534236469];

// var reverse = function (x) {

//     if (x <= Math.pow(-2, 31) || x >= (Math.pow(2, 31) - 1)) {
//         return 0;
//     }

//     let sign = 1;
//     let result = 0;

//     if (x === 0) return 0;

//     if (x < 0) {
//         sign = -1;
//         x = Math.abs(x);
//     }

//     while (x != 0) {

//         if (x % 10 == 0 && result != 0) {
//             x /= 10;
//         }


//         let tmp = x % 10 // 1
//         result = (result * 10) + tmp; // 1
//         x = Math.trunc(x / 10); // 90



//     }
//     if (result <= Math.pow(-2, 31) || result >= (Math.pow(2, 31) - 1)) {
//         return 0;
//     }
//     return result * sign;
// };

// console.log(reverse(tests[0]))
// console.log(reverse(tests[1]))
// console.log(reverse(tests[2]))
// console.log(reverse(tests[3]))
// console.log(reverse(tests[4]))
// console.log(reverse(tests[5]))
// console.log(reverse(tests[6]))


//     -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача - число - палиндром-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//     let tests = [121, -121, 10];

// var isPalindrome = function (x) {

//     if (x === 0) return true;

//     if (x <= Math.pow(-2, 31) || x >= (Math.pow(2, 31) - 1)) {
//         return false;
//     }

//     if (x < 0) return false;

//     x = x.toString();

//     for (let i = 0; i < Math.trunc(x.length / 2); i++) {
//         if (x[i] != x[x.length - 1 - i]) return false;
//     }

//     return true;
// };

// console.log(isPalindrome(tests[0]));
// console.log(isPalindrome(tests[1]));
// console.log(isPalindrome(tests[2]));


// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача - о - медиане - двух - отсортированныз - массивов-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


//     var findMedianSortedArrays = function (nums1, nums2) {
//         if (nums1.length > 1000 || nums2.length > 1000) return 0;
//         let nums = [...nums1, ...nums2].sort((a, b) => a - b);
//         return nums.length % 2 !== 0 ? nums[Math.trunc(nums.length / 2)] : (nums[nums.length / 2] + nums[(nums.length / 2) - 1]) / 2;
//     };

// console.log(findMedianSortedArrays([1, 3], [2])); // 2
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5


// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача - о - самой - длинной - подстроке - из - непвторяющейся - последовательности - символов-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -



//     var lengthOfLongestSubstring = function (s) {
//         let [container, max, startIndex] = ['', 0, 0];

//         for (let i = 0; i < s.length; i++) {
//             if (!container.includes(s[i])) {
//                 container += s[i];
//             } else {
//                 startIndex = i - container.length;
//                 container = '';
//                 i = startIndex;
//             }
//             if (container.length > max) {
//                 max = container.length;
//             }
//         }
//         return max;
//     };

// console.log('#1', lengthOfLongestSubstring("bwf")); // 3✅
// console.log('#2', lengthOfLongestSubstring("bbbbb")); // 1✅
// console.log('#3', lengthOfLongestSubstring("aab")); // 2✅
// console.log('#4', lengthOfLongestSubstring("abcabcbb")); // 3✅ 
// console.log('#5', lengthOfLongestSubstring("pwwkewww")); // 3✅
// console.log('#6', lengthOfLongestSubstring("dkvdfd")); // 4✅
// console.log('#7', lengthOfLongestSubstring("jbpnbwwd")); // 4
// console.log('#8', lengthOfLongestSubstring("dvdf")); // 3✅
// console.log('#9', lengthOfLongestSubstring("bbtablud")); // 6✅


// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача: -5. - Longest - Palindromic - Substring-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//     function validPalindrome(str) {
//         return [...str.split('')].reverse().join('') == str ? true : false;
//     }

// var longestPalindrome = function (s) {
//     if (s.length === 0) return 0;
//     if (s.length === 1) return s;
//     // if (validPalindrome(s)) return s;

//     let [resultArr, startIndex, curr] = [
//         [], 0, ''
//     ];

//     for (let i = 0; i < s.length; i++) {
//         curr = s.substring(i, startIndex);
//         // console.log('string',curr,'startIndex',startIndex,'i', i);
//         if (validPalindrome(curr) && curr != "" && curr.length != 1) {
//             resultArr.push(s.substring(startIndex, i));
//         }
//         if (i === s.length - 1) { // 3 - 1 = 2

//             // console.log(s.substring(1,3) ,startIndex, i);
//             if (validPalindrome(s.substring(i + 1, startIndex)) && s.substring(i + 1, startIndex) != "" && s.substring(i + 1, startIndex).length != 1) {
//                 resultArr.push(s.substring(startIndex, i + 1));
//             }
//             startIndex++;
//             i = startIndex;
//         }

//     }
//     console.log(resultArr);
//     return resultArr.sort((a, b) => a.length - b.length)[resultArr.length - 1];
// };




// var longestPalindrome = function (s) {
//     if (s.length === 0) return 0;
//     if (s.length === 1) return s;

//     let [resultArr, startIndex, curr] = [
//         [], 0, ''
//     ];

//     for (let i = 1; i < s.length; i++) {
//         curr = s.substring(i, startIndex);
//         if ([...curr.split('')].reverse().join('') == curr && curr != "") {
//             resultArr.push(curr);
//         }
//         if (i === s.length - 1) {
//             if ([...s.substring(i + 1, startIndex).split('')].reverse().join('') == s.substring(i + 1, startIndex)) {
//                 resultArr.push(s.substring(startIndex, i + 1));
//             }
//             startIndex++;
//             i = startIndex;
//         }
//     }
//     return resultArr.sort((a, b) => a.length - b.length)[resultArr.length - 1];
// };

// console.log('#1', longestPalindrome("babad")); // bab, aba
// console.log('#2', longestPalindrome("cbbd")); // bb
// console.log('#3', longestPalindrome("abcazacf")); // cazac, aza
// console.log('#4', longestPalindrome("ffcrlaalq")); // laal, ff

// console.log('#5', longestPalindrome("abba")); // abba

// console.log('#6', longestPalindrome("abb")); // bb
// console.time();
// console.log('#6', longestPalindrome("jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx")); // bb
// console.timeEnd();
// 1725.178 ms

// //                                   012

// let arrrr = "moonlight";
// console.log(arrrr.substring(1, 1));


// console.log("zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir".length);



// 1

// let dk = "abcdefg";
// let newDk = '';
// for (let i = 0; i < dk.length; i++) {
//     newDk += dk[dk.length - 1 - i]

// }
// // 0.009ms

// // 2

// console.time();
// let newDk2 = '';
// newDk2 = [...dk.split('')].reverse().join('');
// console.timeEnd();
// //0.025ms

// console.log(newDk2);


// function reverse(s) {
//     let word = '';
//     for (let i = 0; i < s.length; i++) {
//         word += s[s.length - 1 - i]

//     }
//     return word;
// }


// var longestPalindrome = function (s) {
//     if (s.length === 0) return 0;
//     if (s.length === 1) return s;

//     let [resultArr, startIndex, curr] = [
//         [], 0, ''
//     ];

//     for (let i = 1; i < s.length; i++) {
//         curr = s.substring(i, startIndex);
//         if (reverse(curr) == curr && curr != "") {
//             resultArr.push(curr);
//         }
//         if (i === s.length - 1) {
//             if (reverse(s.substring(i + 1, startIndex)) == s.substring(i + 1, startIndex)) {
//                 resultArr.push(s.substring(startIndex, i + 1));
//             }
//             startIndex++;
//             i = startIndex;
//         }
//     }
//     return resultArr.sort((a, b) => a.length - b.length)[resultArr.length - 1];
// };



// var longestPalindrome = function (s) {
//     let currentLongest = [0, 1];

//     for (let i = 1; i < s.length; i++) {
//         const odd = expandAroundCenter(s, i - 1, i + 1); // treating the given letter as a center and checking its surrounding letters 
//         const even = expandAroundCenter(s, i - 1, i); // checking if the  center is between the given letter and the previous letter
//         const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; // choosing the longest palindrome between odd and even
//         currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest // comparing the longest to the current longest palindrome and updating current longest accordingly
//         console.log('odd', odd, 'even', even, 'longest', longest, 'currentLongest', currentLongest);
//     }
//     // console.log(currentLongest[0], currentLongest[1]);
//     return s.slice(currentLongest[0], currentLongest[1]);
// };

// function expandAroundCenter(s, leftIdx, rightIdx) {
//     while (leftIdx >= 0 && rightIdx < s.length) {
//         if (s[leftIdx] !== s[rightIdx]) break;
//         leftIdx--;
//         rightIdx++;
//     }
//     return [leftIdx + 1, rightIdx]
// }
// console.log('#4', longestPalindrome("nagga")); // laal, ff


// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача: -13. - Roman - to - Integer-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//     var romanToInt = function (s) {
//         if (s[0] === 'M') return 1000 + romanToInt(s.substring(1, s.length));

//         if (s[0] === 'C') return s[1] === 'M' ?
//             900 + romanToInt(s.substring(2, s.length)) :
//             (s[1] === 'D' ? 400 + romanToInt(s.substring(2, s.length)) : 100 + romanToInt(s.substring(1, s.length)));

//         if (s[0] === 'D') return 500 + romanToInt(s.substring(1, s.length));

//         if (s[0] === 'X') return s[1] === 'C' ?
//             90 + romanToInt(s.substring(2, s.length)) :
//             (s[1] === 'L' ? 40 + romanToInt(s.substring(2, s.length)) : 10 + romanToInt(s.substring(1, s.length)));

//         if (s[0] === 'L') return 50 + romanToInt(s.substring(1, s.length));

//         if (s[0] === 'V') return 5 + romanToInt(s.substring(1, s.length));

//         if (s[0] === 'I') return s[1] === 'X' ?
//             9 + romanToInt(s.substring(2, s.length)) :
//             (s[1] === 'V' ? 4 + romanToInt(s.substring(2, s.length)) : 1 + romanToInt(s.substring(1, s.length)));
//         return 0;
//     }

// console.log(romanToInt('III')); // 3
// console.log(romanToInt('LVIII')); // 58
// console.log(romanToInt('MCMXCIV')); // 1994


// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача: -11. - Container - With - Most - Water-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//     var maxArea = function (height) {
//         let maxContainer = 0;
//         let [L, R] = [0, height.length - 1];
//         while (L != R) {
//             let square = Math.min(height[L], height[R]) * (R - L);
//             if (square > maxContainer) maxContainer = square;

//             height[L] < height[R] ? L++ : R--;

//         }
//         return maxContainer;
//     };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));




// -- -- -- -- -- -- -- -- -- -- -- -- -- --Задача: -14. - Longest - Common Prefix-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//     var longestCommonPrefix = function (strs) {
//         let acc = '';
//         let result = '';
//         let g = 0;

//         strs.sort((a, b) => a.length - b.length);

//         while (true) {
//             for (let i = 0; i < strs.length; i++) {
//                 acc += strs[i][g];
//             }

//             console.log(acc);
//             // acc - aa
//             let check = [...new Set(acc.split(''))]; // [a]
//             if (check.length == 1) {
//                 result += check[0];
//                 // console.log(check);
//                 acc = '';
//                 console.log(acc);
//             } else {
//                 return result;
//             }


//             if (result.length > strs[0].length) break;
//             g++;
//         }
//     };


// // console.log('#1', longestCommonPrefix(['flow', 'flight', 'flower']));
// // console.log('#2', longestCommonPrefix(["dog","racecar","car"]));
// console.log('#3', longestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
// console.log('------------');
// console.log('#4', longestCommonPrefix(['aa', 'aa']));


//----------------------------Задача:-15.-3Sum-- ---------------------------------------

// var threeSum = function (nums) {
// const result = [];
// nums.sort((a, b) => a - b);

// for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] != nums[i - 1]) {
//         let L = i + 1;
//         let R = nums.length - 1;

//         while (L < R) {
//             const currentSum = nums[i] + nums[L] + nums[R];
//             if (currentSum === 0) {
//                 result.push([nums[i], nums[L], nums[R]]);
//                 while (nums[L] == nums[L + 1]) L++;
//                 while (nums[R] == nums[R - 1]) R--;
//                 L++;
//                 R--;
//             } else if (currentSum < 0) {
//                 L++;
//             } else if (currentSum > 0) {
//                 R--;
//             }
//         }
//     }
// }
// return result;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0]));
// console.log(threeSum([0, 0, 0, 0]));


//----------------------------Задача:-16.-3Sum-Closest- ---------------------------------------


// var threeSumClosest = function (nums, target) {
//     nums.sort((a, b) => a - b);
//     let closestSum = Infinity;

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (nums[i] != nums[i - 1]) {
//             let L = i + 1;
//             let R = nums.length - 1;
//             while (L < R) {
//                 const currentSum = nums[i] + nums[L] + nums[R];
//                 if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
//                     closestSum = currentSum;
//                 }
//                 if (currentSum > target) {
//                     R--;
//                 } else {
//                     L++;
//                 }
//             }
//         }
//     }
//     return closestSum;
// };


// console.log('---------');
// console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
// console.log('---------');
// console.log(threeSumClosest([1, 2, 3, 4, -5], 10)); // 9
// console.log('---------');
// console.log(threeSumClosest([0, 1, 2], 3)); // 3
// console.log('---------');
// console.log(threeSumClosest([0, 1, 1, 1], -100)); // 2
// console.log('---------');

//----------------------------Задача:-17.-Letter-Combinations-of-a-Phone Number------------------------------------------

// var letterCombinations = function(digits) {

//     let resultArr = [];

//     const numbers = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

//     if (digits.length === 1) return [...numbers[parseInt(digits[0])-2]];

//     let count = [...digits].reduce((acc, item) =>
//     acc *= numbers[parseInt(item)-2].length
//     , 1)

//     console.log(count);
//     let it = count * digits.length;
//     // console.log(i);

//     let numberIndex = 0;
//     let subIndex = 0;
//     // let element;

//     let innerInd = 0;
//     // let subStr = [...(digits).substring(1, digits.length)].reduce((acc, item) =>
//     // acc *= numbers[parseInt(item)-2].length
//     // , 1)
//     // console.log((digits).substring(1, digits.length));
//     // console.log(subStr);
//     let flag = true;
//     while (digits.length !== numberIndex) {
//         subIndex++;

//         let subStr = [...(digits).substring(subIndex, digits.length)].reduce((acc, item) =>
//         acc *= numbers[parseInt(item)-2].length
//         , 1); 

//         // subStr = subStr === 1 ? numbers[parseInt(digits[digits.length-1])-2].length : subStr;


//         console.log('!!!', [...(digits).substring(subIndex, digits.length)], subStr)
//         console.log('subIndex', subIndex, 'subStr', subStr); // 1, 3 // 2, 3

//         for(let i = 1; i < count+1; i++) {
//             let element = numbers[parseInt(digits[numberIndex])-2][innerInd]; // a, a, a, b, b, b, c, c, c
//             console.log('element', element);
//             if ( flag ) {
//                 resultArr.push(element); // a, a, a, b, b, b, c, c, c
//             } else {
//                 resultArr[i-1] += element; // 
//             }
//             if ( i % subStr === 0 ) { console.log('$$$', i, subStr);
//                 // innerInd = resultArr.length % subStr;
//                 console.log('###', innerInd);
//                 // innerInd = innerInd ==
//                 if ( innerInd > subStr ) {
//                     innerInd = 0;
//                 } else {
//                     innerInd++;
//                 }
//                 // innerInd = innerInd > subStr-1 ? 0 : innerInd++;
//                 // innerInd++; // 1, 2, 3
//             }
//         }


//         flag = false;
//         numberIndex++;
//         innerInd = 0;
//     }


//     // while (it != 0) {
//     //     element = numbers[parseInt(digits[numberIndex])-2][subIndex];
//     //     for (let i = 0; i < array.length; i++) {
//     //         resultArr.push(element);
//     //     }
//     //     if ()

//     //     it--;

//     // }


//     return resultArr;
// };


//  --------------------NeetCode's Solution----------------------------


// var letterCombinations = function(digits) {

//     if ( digits.length === 0 ) return [];


//     let res = [];
//     const digitToChar = {
//         '2': 'abc',
//         '3': 'def',
//         '4': 'ghi',
//         '5': 'kjl',
//         '6': 'mno',
//         '7': 'prsq',
//         '8': 'tuv',
//         '9': 'wxyz'
//     };

//     function backtrack(i, currStr) {
//         if ( currStr.length == digits.length ) {
//             res.push(currStr);
//             return;
//         }

//         for (const item of digitToChar[digits[i]]) {
//             backtrack(i + 1, currStr + item);
//         }
//     }

//     backtrack(0, '');

//     return res;
// }


// СЛОЖНОСТЬ: O(n * n^4)


// console.log(letterCombinations('9'));
// console.log(letterCombinations('23'));
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations('234'));
// // ["ad","ae","af","ad","be","bf","cd","ce","cf"]
// console.log(letterCombinations('23'));

//----------------------------Задача из ТГ------------------------------------------

// const stringTransformer = str => {
//     return str = [...str.split(' ').reverse().join(' ')].reduce( (acc, elem) => acc += elem == elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase(), '')
// };

// console.log(stringTransformer('torininGEM THE bEst'));
// console.log(stringTransformer('JaaScript IS poor LANGUAGE'));
// console.log(stringTransformer('js   css html'));
