
// // function comp(array1, array2) {

// //   const newA1 = array1.map(el => el * el)
// //   console.log(JSON.stringify(newA1.sort()) === JSON.stringify(array2.sort()))

// //   console.log(newA1.sort())

// // }

// // a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// // a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

// // comp(a1, a2);



// // const birthYear = 1998;

// // //Function declaration
// // const calcAge = (birthYear) => {
// //   return 2037 - birthYear;

// // }

// // console.log(calcAge(1998))


// //Function expression
// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // }



// // const retiremnetAge = (age, firstName) => {

// //   const ageLeftToRetire = 2037 - age;
// //   const ageLeft = 65 - ageLeftToRetire
// //   console.log(calcAge2(1998))
// //   return `${firstName} retire at ${ageLeft}`
// // }


// // console.log(retiremnetAge(1995, 'Nabham'));




// // function findEvenIndex(arr) {


// //   function sum(arr) {
// //     return arr.reduce((previousVal, currentVal) => { return previousVal + currentVal }, 0)
// //   }

// //   return arr.findIndex((el, i, arr) => { return sum(arr.slice(0, i)) === sum(arr.slice(i + 1, arr.length)) })

// // }


// // // (findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
// // // (findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
// // // (findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
// // // (findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");
// // // });


// // console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))



// // const calcAverage = (a, b, c) => {
// //   return (a + b + c) / 3;
// // }

// // const avgDolphins = calcAverage(85, 54, 41);
// // const avgKolas = calcAverage(23, 34, 27);

// // console.log(avgDolphins, avgKolas)

// // const checkWinner = (avgDolphins, avgKolas) => {
// //   if (avgDolphins >= 2 * avgKolas) console.log(`Dolphins wins ( ${avgDolphins} vs ${avgKolas})`);
// //   else if (avgKolas >= 2 * avgDolphins) console.log(`Kolas wins ( ${avgKolas} vs ${avgDolphins})`)
// //   else {
// //     console.log('No team wins')
// //   }
// // }


// // checkWinner(avgDolphins, avgKolas)


// // function findEvenIndex(arr) {
// //   let leftSum = 0;
// //   let rightSum = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //     rightSum += arr[i]
// //   }
// //   console.log(rightSum)
// //   for (let j = 0; j < arr.length; j++) {
// //     rightSum -= arr[j]
// //     console.log(rightSum)
// //     if (leftSum === rightSum) {
// //       return j;
// //     }
// //     leftSum += arr[j]
// //     console.log('left', leftSum)
// //   }
// //   return -1;
// // }



// // console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))

// // const array1 = [1, 30, 39, 29, 10, 13];


// // const currentThreshold = value => {
// //   return value < 40;
// // }

// // console.log(array1.every(currentThreshold))


// // function solution(str) {
// //   let newStr = [...str];
// //   let modifiedStr = [];
// //   if (newStr.length % 2 !== 0) {
// //     newStr.push('_')
// //   }
// //   for (let i = 0; i < newStr.length; i = i + 2) {
// //     modifiedStr.push(newStr[i] + newStr[i + 1])
// //   }
// //   return modifiedStr;
// // }


// // solution('abc') // should return ['ab', 'c_']
// // solution('abcdef') // should return ['ab', 'cd', 'ef']

// // function solution(number) {
// //   const romanValues = {
// //     I: '1',
// //     V: '5',
// //     X: '10',
// //     L: '50',
// //     C: '100',
// //     D: '500',
// //     M: '1,000'
// //   }

// //   console.log(romanValues.)
// //   let newVal = [...String(number)]

// //   console.log(newVal.length)
// // }

// // let romanValue = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },

// // function solution(number) {

// //   let romanValue = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
// //     newVal = '';

// //   for (let i in romanValue) {
// //     console.log(romanValue[i])
// //     while (number >= romanValue[i]) {
// //       newVal += i
// //       number -= romanValue[i]
// //       console.log(newVal, number)
// //     }
// //   }
// //   return newVal

// // }

// // solution(1000)


// // function solution(str) {

// //   const newStr = [...str]
// //   const newVal = newStr.map((el) => {

// //     if (el === el.toUpperCase()) {
// //       el = ' ' + el
// //     }
// //     return el

// //   }

// //   )

// //   return newVal.join('')


// // }


// // solution('camelCasingTest')




// // function findOutlier(integers) {
// //   let tempVar = 0;
// //   let arrStatus;
// //   let val;
// //   for (i in integers) {

// //     if (integers[i] % 2 === 0) {
// //       tempVar += 1
// //     }

// //   }
// //   tempVar >= 2 ? arrStatus = 'even' : arrStatus = 'odd'
// //   if (arrStatus === 'even') {
// //     for (i in integers) {
// //       if (integers[i] % 2 !== 0) {
// //         val = integers[i]
// //       }

// //     }
// //   }

// //   if (arrStatus === 'odd') {
// //     for (i in integers) {
// //       if (integers[i] % 2 === 0) {
// //         val = integers[i]
// //       }

// //     }
// //   }
// //   return val
// // }

// // function findOutlier(integers) {
// //   const even = integers.filter(int => int % 2 === 0);
// //   const odd = integers.filter(int => int % 2 !== 0);
// //   console.log(even, odd)
// //   return even.length === 1 ? even[0] : odd[0];
// // }


// // // (findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// // findOutlier([160, 3, 1719, 19, 11, 13, -21])


// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

// // function productFib(prod, fibs = [0, 1]) {

// //   let check = checkProd(fibs, prod);
// //   if (check === 'match') {
// //     return [fibs[fibs.length - 2], fibs[fibs.length - 1], true]

// //   }
// //   else if (check === 'over') {
// //     return [fibs[fibs.length - 2], fibs[fibs.length - 1], false]

// //   }
// //   else {
// //     fibs = addFibs(fibs);
// //     return productFib(prod, fibs)
// //   }

// //   function checkProd(fibs, prod) {
// //     let fib1 = fibs[fibs.length - 2],
// //       fib2 = fibs[fibs.length - 1],
// //       trueProd = fib1 * fib2

// //     if (trueProd === prod) {
// //       return "match";;
// //     }
// //     else if (trueProd > prod) {
// //       return "over"
// //     }
// //     return
// //   }

// //   function addFibs(fibs) {
// //     let num1 = fibs[fibs.length - 2],
// //       num2 = fibs[fibs.length - 1];

// //     fibs.push(num1 + num2);
// //     return fibs;
// //   }

// // }


// // 13
// // 0, 1, 1, 2,

// //   function productFib(prod) {
// //     let [a, b] = [0, 1];
// //     while (a * b < prod) [a, b] = [b, a + b];
// //     return [a, b, a * b === prod];
// //   }


// // var moveZeros = function (arr) {
// //   let arrCopy = [];
// //   let newCopy = arr;
// //   (arr.map((el, index) => {
// //     if (el === 0) {
// //       arrCopy.push(index)
// //     }
// //   }))


// //   for (let i in arrCopy) {
// //     arrCopy[i], arrCopy.length
// //     newCopy.splice(arrCopy[i] - i, 1)
// //   }

// //   for (i in arrCopy) {
// //     newCopy.push(0)
// //   }

// //   console.log(newCopy)

// // }
// // moveZeros([false, 1, 0, 1, 2, 0, 0, 0, 0, 1, 3, "a"])



// // function validBraces(braces) {
// //   let storeBraces = [];
// //   let arr = [...braces];
// //   console.log(arr.length)
// //   for (let i = 0; i < arr.length; i++) {

// //     if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
// //       storeBraces.push(arr[i]);

// //     }

// //     else {
// //       if (storeBraces.length === 0) return false;
// //       let lastValue = arr[arr.length - 1];
// //       if ((arr[i] === ']' && lastValue === '[') || (arr[i] === '}' && lastValue === '{') || (arr[i] === ')' && lastValue === '(')) {
// //         storeBraces.pop();
// //       }
// //       else {
// //         break;
// //       }

// //     }
// //   }
// //   return storeBraces.length === 0
// // }
// // validBraces("()")

// // if ("(" == ")") {
// //   console.log('true')
// // }


// // function validBraces(braces) {
// //   let tracer = []
// //   console.log(braces)
// //   for (let i = 0; i < braces.length; i++) {
// //     if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
// //       tracer.push(braces[i])
// //     } else {
// //       if (tracer.length === 0) return false
// //       let lastValue = tracer[tracer.length - 1]
// //       if ((braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(')) {
// //         tracer.pop()
// //       } else {
// //         break;
// //       }
// //     }
// //   }
// //   return tracer.length === 0
// // }



// // function count(string) {

// //   const uniq = [...new Set(string)];


// //   let a = []
// //   console.log(uniq)
// //   for (let i in uniq) {
// //     let tempVal = {
// //       ...uniq
// //     }
// //     let i = 0;
// //     if (uniq[i] === string[i]) {
// //       console.log(tempVal.uniq[i])
// //     }
// //     console.log(tempVal)

// //   }
// //   console.log(a)
// //   return {};
// // }
// // let b = {}['a'] = 1
// // b = {}['b'] = 2;
// // console.log(b)

// // function count(string) {
// //   // return string.split('').reduce(function (counts, char) {
// //   //   console.log(char)
// //   //   counts[char] = (counts[char] || 0) + 1;
// //   //   console.log(counts);

// //   //   return counts
// //   // }, {});
// //   console.log(string.split('').reduce(function (counts, char) {
// //     console.log(counts, char)
// //     counts[char] = (counts[char] || 0) + 1
// //     return counts
// //   }, {}))
// // }

// // count("ABCA")
// // for (let j = 0; j < string.length; j++) {
// //   console.log('My string is' + string[i])
// //   if (string[i] === string[j] && string[i] === 'a') {
// //     myArr += 1;

// //   }

// // console.log({} + count['a'] : 1)



// // function isValidWalk(walk) {
// //   let [initialPosition, NR, ST, EA, WE] = [0, 5, -5, -5, 5]

// //   const north = walk.filter((el, index) => {
// //     return el === 'n'
// //   }).length

// //   const east = walk.filter((el, index) => {
// //     return el === 'e'
// //   }).length

// //   const west = walk.filter((el, index) => {
// //     return el === 'w'
// //   }).length

// //   const south = walk.filter((el, index) => {
// //     return el === 's'
// //   }).length


// //   if (walk.length === 10 && (north === south) && (east === west)) {

// //     walk.map(el => {
// //       if (el === 'n') {
// //         // console.log(initialPosition + NR)
// //         initialPosition += NR
// //         // console.log(initialPosition)
// //       }
// //       if (el === 's') {
// //         initialPosition += ST
// //       }
// //       if (el === 'e') {
// //         initialPosition += EA
// //       }
// //       if (el === 'w') {
// //         initialPosition += WE;
// //       }
// //     })

// //     if (initialPosition === 0) {
// //       return true;
// //     }

// //     else {
// //       return false
// //     }


// //   }

// //   return false

// // }


// // isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
// // isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
// // isValidWalk(['e', 's', 'e', 's', 'e', 's', 'e', 's', 'e', 's'])
// // isValidWalk(['w', 's', 'w', 's', 'w', 's', 'w', 's', 'w', 's'])




// // let [initialPosition, NR, ST, EA, WE] = [0, 5, -5, -5, 5]
// // ['w', 's', 'w', 's', 'w', 's', 'w', 's', 'w', 's']

// // function zeros(n) {

// //   // console.log(n)
// //   let storeVal = 0;
// //   let againVal = 0;
// //   let newVal = 0;
// //   // console.log(againVal)


// //   function calcFac(n) {

// //     if (n % 5 === 0) {
// //       newVal = n / 5;
// //       storeVal += newVal
// //       calcFac(newVal)
// //     }

// //     else if (newVal % 5 === 0) {
// //       calcFac(newVal)
// //     }
// //     else {
// //       return;
// //     }

// //   }

// //   function calcFac2(n) {

// //     if (n > 0 && n < 25) {
// //       storeVal += Math.floor(n / 5);
// //     }
// //     else {
// //       storeVal += Math.floor(n / 5) + 1;
// //     }

// //   }





// //   if (n % 5 === 0) {
// //     againVal = n / 5;
// //     if (againVal % 5 === 0 && againVal >= 5) {

// //       newVal = againVal / 5;
// //       storeVal = newVal + againVal
// //       console.log(storeVal)
// //       calcFac(newVal);
// //       console.log(newVal)
// //       if (newVal % 5 !== 0) {
// //         calcFac2(newVal)
// //       }
// //       console.log(newVal)
// //     }

// //     else if (againVal % 5 !== 0 && againVal >= 5) {
// //       newVal = againVal % 5
// //       storeVal = againVal + newVal
// //     }
// //     else {
// //       storeVal = againVal
// //     }


// //   }
// //   else if (n > 5 && n < 25) {
// //     storeVal = Math.floor(n / 5);
// //   }
// //   else if (n > 25) {
// //     storeVal = Math.floor(n / 5) + 1;
// //   }
// //   else {
// //     storeVal = 0
// //   }

// //   console.log(storeVal)
// // }





// // zeros(1000000000)


// // function incrementString(string) {
// //   let newStore;
// //   let strArr = [];
// //   let numArr = [];

// //   for (i = 0; i < string.length; i++) {
// //     if (string[i] != Number(string[i])) {
// //       strArr.push(string[i])
// //     }
// //     else if (string[i] == Number(string[i])) {
// //       numArr.push(string[i])
// //     }
// //   }



// //   if (numArr[0] != 0 || numArr[1] == 9) {
// //     newStore = strArr.join('') + String(Number(numArr.join('')) + 1)

// //   }

// //   else if (numArr[0] == 0 && numArr[numArr.length - 1] == 0) {
// //     numArr[0] = 1
// //     console.log(strArr.join('') + String((numArr.join('')) + 1))
// //     newStore = strArr.join('') + String(Number(numArr.join('')) + 1)
// //     num

// //   }


// //   else if (string.length == 0) {
// //     return 1;

// //   }
// //   else {
// //     return 1;
// //   }

// //   console.log(newStore)
// // }



// // // incrementString('foobar000')


// function removeNb(n) {
//   let newSumArr = [];
//   let a, b;
//   let newVal;

//   sum = 0;
//   product = 0;

//   for (let i = 0; i <= n; i++) {
//     sum = sum + i
//   }

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       product = i * j;
//       if (product === sum - i - j) {
//         a = i;
//         b = j;


//         newSumArr.push([a, b])

//       }

//     }


//   }

//   return newSumArr

// }


// removeNb(26);

// // removNb(26) should return [(15, 21), (21, 15)]
// // or
// // removNb(26) should return { {15, 21}, {21, 15} }
// // or
// // removeNb(26) should return [[15, 21], [21, 15]]
// // or
// // removNb(26) should return [ {15, 21}, {21, 15} ]
// // or
// // removNb(26) should return "15 21, 21 15"


// // expected '[ [ 15  21 ], [ 21  15 ]]' to deeply equal

// // [[15, 21], [21, 15]]


// // function removeNb(n) {

// //   const sum = (n * (n + 1)) / 2;
// //   const result = [];

// //   for (let b = n; b > 0; b--) {
// //     const a = (sum - b) / (b + 1)
// //     console.log(a)
// //     if (a < n && Number.isInteger(a)) {
// //       console.log(a)
// //       result.push([a, b])
// //     }

// //   }
// //   return result
// // }

// // removeNb(26);






















// function removeNb(n) {
//   let newSumArr = [];


//   const sum = (n * (n + 1)) / 2;



//   for (let b = n; b > 0; b--) {
//     const a = (sum - b) / (b + 1)

//     if (a < n && Number.isInteger(a)) {
//       console.log('Value of a and b', a, b)
//       newSumArr.push([a, b])
//     }

//   }
//   console.log(newSumArr)

// }

// removeNb(100)

// console.log(Number.isInteger(23.1))


// function nextSmaller(n) {

//   let finalValue,
//     lastVal;
//   const newVal = String(n);
//   finalValue = ([...newVal])
//   console.log(newVal)
//   let c, d;

//   if (newVal[finalValue.length - 2] > finalValue[finalValue.length - 1]) {
//     c = finalValue[finalValue.length - 1];
//     d = finalValue[finalValue.length - 2]
//     console.log('New Val of c', c)
//     finalValue[finalValue.length - 1] = d;
//     finalValue[finalValue.length - 2] = c;
//     console.log((Number(finalValue.join(''))))
//   }
//   if (newVal[finalValue.length - 2] < finalValue[finalValue.length - 1] && finalValue[finalValue.length - 3] != 0) {
//     let a, b, c;
//     // a=finalValue[finalValue-3]
//     b = finalValue[finalValue.length - 1]
//     finalValue[finalValue.length - 1] = finalValue[finalValue.length - 3]
//     finalValue[finalValue.length - 3] = b
//     console.log(finalValue[finalValue.length - 1])
//     console.log((Number(finalValue.join(''))))
//   }

//   if (newVal[finalValue.length - 0] < finalValue[finalValue.length - 1] && finalValue[finalValue.length - 3] != 0)



// }


// nextSmaller(414)
// nextSmaller(907)
// nextSmaller(531)
// nextSmaller(135)
// nextSmaller(2071)
// nextSmaller(1027)
// nextSmaller(414)

// Test.assertEquals(nextSmaller(21), 12)
// Test.assertEquals(nextSmaller(907), 790)
// Test.assertEquals(nextSmaller(531), 513)
// Test.assertEquals(nextSmaller(135), -1)       12
// Test.assertEquals(nextSmaller(2071), 2017)
// Test.assertEquals(nextSmaller(1027), -1)
// Test.assertEquals(nextSmaller(414), 144)



// function crop(matrix) {
//   // console.log(matrix[0], matrix[1])
//   matrix[0].filter(function (el, index, array) {
//     // console.log(el, index)
//     if (el !== 0) {
//       console.log(el)
//     }
//     else {
//       return []
//     }


//   }


//   )
//   console.log(matrix)

// }

// crop(
//   [
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 4, 5, 6, 7, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//   ]
// )


// function pigIt(str) {
//   // if( char.toUpperCase() != char.toLowerCase() ) 

//   const temp = str.split(' ')
//   let c;
//   let a = String(temp[0])
//   console.log(temp)
//   c = a[0];
//   a[0] = a[a.length - 1];
//   a[a.length - 1] = c
//   console.log(a)

// }

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');   

// const val = 'pig'
// const months = [...val];

// // months.splice(months[months.length - 1], 0, months[0])

// months[months.length] = months[0]

// console.log(months)
// console.log(months.shift())
// // replaces 1 element at index 4
// console.log(months);
// console.log(months.join('') + 'ay')


// const myArr = [];
// let conversionArr = (str) => {
//   const newVal = [...str];
//   newVal[newVal.length] = newVal[0];
//   newVal.shift()
//   console.log(newVal);
//   myArr.push(newVal.join('') + 'ay')
// }

// a('pig')
// console.log(myArr)


// function pigIt(str) {
//   const finalVal = [];
//   let conversionArr = (str) => {
//     const newVal = [...str];
//     newVal[newVal.length] = newVal[0];
//     newVal.shift()
//     finalVal.push(newVal.join('') + 'ay')
//   }
//   const temp = str.split(' ')

//   for (let i = 0; i < temp.length; i++) {
//     let c = temp[i]
//     if (c.toUpperCase() != c.toLowerCase()) {
//       conversionArr(c)
//     }
//     else {
//       finalVal.push(c)
//     }

//   }

//   return finalVal.join(' ')

// }

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');

// function pigIt(str) {
//   var arrayWord = str.split(' ');
//   return arrayWord.map(function (word) {
//     var firstLetter = word.charAt(0);
//     return word.slice(1) + firstLetter + 'ay';
//   }).join(' ');
// }

// function pigIt(str) {
//   //Code here
//   return str.split(' ').map(word => {
//     return word.substring(1) + word[0] + 'ay';
//   }).join(' ');
// }



// function anagrams(word, words) {

//   // let newWord=(...words);

//   const newVal = [];

//   word = (word.split('').sort().join(''))

//   // words.filter(el =>)

//   // console.log(word);

//   const newWords = words.filter(el => {
//     if (el.split('').sort().join('') == word) {
//       newVal.push(el)
//     }
//   })

//   console.log(newVal)

// }



// // anagrams('laser', ['lazing', 'lazy', 'lacer'])
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])


//  ['carer', 'racer']


// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false



// var fibonacci = function (n) {
// let tempArr = [0, 1];
// if (n == 0 || n == 1)
//   return n;
// else {
//   for (let i = 2; i <= n; i++) {
//     const val = tempArr[i - 1] + tempArr[i - 2]
//     tempArr.push(val);
//   }
// }

// console.log(tempArr)

//   if (n > 0) {

//     console.log(n)
//   }
//   else {
//     return;
//   }


//   // if(n==0 || n == 1)
//   //     return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// fibonacci(10)



// var fibonacci = function (n) {
//   // if (n == 0 || n == 1)
//   //   return n;
//   let tempArr = [0, 1];


//   function newVal(vals) {

//     let previousVal = vals;
//     if (vals >= 0 && !tempArr[vals]) {
//       if (!tempArr[vals]) {
//         if (vals == 0 || vals == 1) { return vals; }
//         else {
//           for (let i = 2; i <= vals; i++) {
//             const val = tempArr[i - 1] + tempArr[i - 2]
//             tempArr.push(val);
//           }
//         }

//       }
//       else {
//         return tempArr[previousVal];
//       }
//     }

//     else {
//       return;
//     }


//     // 
//   }
//   newVal(n)

//   // console.log(tempArr)
//   // console.log(fibonacci(n - 1) + fibonacci(n - 2))
// }
// fibonacci(5)


// const billValue = [275, 40, 430];
// billValue.filter(el => {
//   el >= 50 && el <= 300 ? console.log(`The bill Vlaue was ${el} and the tip was ${el * .15}and the total value is ${el + (el * .15)}`) : console.log(`The bill Vlaue was ${el} and the tip was ${el * .20} and the total value is ${el + (el * .20)}`)

// })


const jonas = {
  a: 'Nabham',
  lastName: 'Sharma',
  birthYear: 1998,
  job: 'teacher', friends: ['Hi', 'There', 'Is'],
  hasDriverLicense: true,
  calcAge: function (birthYear) {
    return 2037 - birthYear
  }

}


// jonas.push('ab')
console.log(jonas['a'])
// console.log(jonas.calcAge(jonas.birthYear))
console.log(jonas['calcAge'](jonas.birthYear))



const mark = {
  name: 'Mark',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMImark = this.mass / (this.height ** 2)

    return this.BMImark;
  }

},
  john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.BMIJohn = this.mass / (this.height ** 2)
      return this.BMIJohn
    }
  }

mark.calcBMI();
john.calcBMI();

mark['BMIMark'] > john['BMIJohn'] ? console.log(`Mark BMI(${Math.round(mark.BMImark)}) has higher than John's (${(john.BMIJohn)})`) : console.log(`John BMI(${(john.BMIJohn)}) has higher than mark's (${Math.round(mark.BMImark)})`)
