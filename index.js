// CHALLENGE 1: Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
// If n === 0 return 1

const factorialize = (num) => {
  const arr = [];
  let result = 0;
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    result = arr.reduce((acc, currNum) => {
      return acc * currNum;
    });

    // console.log(result)
    return result;
  } else {
    return 1;
  }
};

factorialize(5);

// CHALLENGE 2
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
// "abc" === "abcabcabc"

const repeatStringNumTimes = (str, num) => {
  const arr = [];
  let result = '';

  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      arr.push(str.split(' '));
    }
  }

  result = arr.join('');
  return result;
};

const result = repeatStringNumTimes('abc', 3);
// console.log(result)

// CHALLENGE 3
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

const convertToF = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const result2 = convertToF(30);
// console.log(result2)

// CHALLENGE 4
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

const findElement = (arr, func) => {
  const result = arr.find((val) => func(val));
  return result;
};

const result3 = findElement([1, 2, 3, 4], (num) => num % 2 === 0);
// console.log(result3)

// CHALLENGE 5
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

const largestOfFour = (arr) => {
  const res = arr.map((subArr) => {
    return Math.max(...subArr);
  });

  return res;
};

const result4 = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
// console.log(result4)

// CHALLENGE 6

//Basic Algorithm Scripting: Find the Longest Word in a String
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

const findLongestWordLength = (str) => {
  const arr = str.split(' ');

  const result = arr.sort((a, b) => b.length - a.length);
  return result[0].length;
};
const result5 = findLongestWordLength(
  'The quick brown fox jumped over the lazy dog'
);
// console.log(result5)

// << -------------------------------------------------------------- DONE ---------------------------------------------------------------------------- >> //

// CHALLENGE 7
// Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

const result6 = reverseString('hello');
// console.log(result6)

// CHALLENGE 8
// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

const confirmEnding = (str, target) => {
  // whatever the length of second parameter
  // subtracting the string length from the second argument, target to confrim the ending.
  return str.substring(str.length - target.length) === target;
};

const result7 = confirmEnding('Bastian', 'n');
// console.log(result7)

// CHALLENGE 9
// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

const truncateString = (str, num) => {
  let newStr;
  if (str.length > num) {
    newStr = str.slice(0, num) + '...';
  } else {
    newStr = str;
  }
  return newStr;
};

const result9 = truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length
);
// console.log(result9)

// CHALLENGE 10
// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

const booWho = (bool) => {
  if (bool !== true && bool !== false) {
    return false;
  } else {
    return true;
  }
};

const result10 = booWho(NaN);
// console.log(result10)

// CHALLENGE 11
// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((value) => {
      return value[0].toUpperCase() + value.substring(1);
    })
    .join(' ');
};

const result11 = titleCase("I'm a little tea pot");
// console.log(result11)

// CHALLENGE 12
// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

const frankenSplice = (arr1, arr2, n) => {
  const newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
};

const result12 = frankenSplice([1, 2], ['a', 'b'], 1);
// console.log(result12)

const example = ['claw', 'tentacle'];
const example2 = ['head', 'shoulders', 'knees', 'toes'];
const n = 2;
example2.splice(n, 0, ...example);

// console.log('example', example2)

// CHALLENGE 13
// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

const bouncer = (arr) => {
  return arr.filter((item) => {
    return Boolean(item) !== false;
  });
};

const result13 = bouncer([7, 'ate', '', false, 9]);
// console.log(result13)

// CHALLENGE 14
// Where do I Belong
// Return the lowest index at which a value (second argument) should be
// inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like
// [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

const getIndexToIns = (arr, num) => {
  const newArr = [...arr, num];
  newArr.sort((a, b) => a - b);
  const x = newArr.findIndex((val) => val === num);
  return x;
};

const result14 = getIndexToIns([40, 60], 50);
// console.log(result14)

// CHALLENGE 15
// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string
// in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in
// the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

const mutation = (arr) => {
  const el1 = arr[0].toLowerCase().split('');
  const el2 = arr[1].toLowerCase().split('');

  return el2.every((item) => el1.includes(item));
};

const result15 = mutation(['Noel', 'Ole']);
// console.log('result15', result15)

// CHALLENGE 16
// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

const chunkArrayInGroups = (arr, size) => {
  const newArr = [];

  arr.forEach((val) => {
    const last = newArr[newArr.length - 1];
    if (!last || last.length === size) {
      newArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return newArr;
};

const result16 = chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
// console.log(result16)

// CHALLENGE 17
// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

const sumAll = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let total = 0;
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    total = total + i;
  }
  return total;
};

const result17 = sumAll([4, 1]);
// console.log(result17)

// CHALLENGE 18
// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

const destroyer = (arr, ...rest) => {
  return arr.filter((val) => !rest.includes(val));
};

const result18 = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// console.log('hereeee', result18)

// CHALLENGE 19
// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
//  In other words, return the symmetric difference of the two arrays.
// Note
// You can return the array with its elements in any order.

const diffArray = (arr1, arr2) => {
  const x = arr1.filter((val) => !arr2.includes(val));
  const y = arr2.filter((val) => !arr1.includes(val));
  return x.concat(y);
};

const result19 = diffArray(
  ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);
// console.log('result19', result19)

// CHALLENGE 20
// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

const myReplace = (str, before, after) => {
  const newStr = str.split(' ');
  const target = newStr.findIndex((val) => val === before);

  before.substring(0, 1) === before.substring(0, 1).toUpperCase()
    ? newStr.splice(
        target,
        1,
        after.substring(0, 1).toUpperCase() + after.substring(1)
      )
    : newStr.splice(target, 1, after.toLowerCase());

  return newStr.join(' ');
};

const result20 = myReplace('I think we should look up there', 'up', 'Down');
// console.log('result20', result20)

// CHALLENGE 21
// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

const uniteUnique = (arr, ...rest) => {
  // set turns it into an object of unique values -> when you put it inside of an array it comes back as an array instead of an object
  const newArr = [...new Set(arr.concat(...rest))];
  return newArr;
};

const result21 = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// console.log('result21', result21)

// CHALLENGE 22
// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// const steamrollArray = (arr) => {
// const x = [].concat(...arr)
// const newArr = [].concat(...x)
// const newNewArr = [].concat(...newArr)
// return newNewArr

const steamrollArray = (arr, d = Infinity) => {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? steamrollArray(val, d - 1) : val),
        []
      )
    : arr.slice();
};

const result22 = steamrollArray([1, {}, [3, [[4]]]]);
// console.log('result22', result22)

// CHALLENGE 23
// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

const fearNotLetter = (str) => {
  let compare = str.charCodeAt(0); // tells you were current letter is -> google definition
  let missing;

  str.split('').map((letter, i) => {
    if (str.charCodeAt(i) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
};

const result23 = fearNotLetter('abce');
// console.log('result23', result23)

// CHALLENGE 24
// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2.
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

const sumPrimes = (num) => {
  let total = 0;

  function checkPrime(x) {
    for (let j = 2; j < x; j++) {
      if (x % j === 0) {
        // false means the function carries on -> so in this case false means it is a prime number
        return false;
      }
    }
    // else exit function it is not a prime number
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      // current vale of total + add i (prime numbers) each time
      total += i;
    }
  }
  return total;
};

const result24 = sumPrimes(977);
// console.log('result24', result24)

// CHALLENGE 25
// ADD ALL
const addAll = (...nums) => {
  // console.log('nums', nums)
  return nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

const result25 = addAll(2, 5, 6, 8, 9);
// console.log('result25', result25)

// CHALLENGE 26
// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

const smallestCommons = (arr) => {
  const newArr = arr.sort((a, b) => a - b);
  const arr2 = [];

  for (let i = newArr[0]; i <= newArr[1]; i++) {
    for (let j = 1; j <= 10000; j++) {
      if (j % i === 0 && j % newArr[i - 1] === 0) {
        arr2.push(j);
        // console.log('testingtesting', i)
      }
    }
  }
  // console.log('arr2', arr2.slice(0, 5))
};

const result26 = smallestCommons([1, 5]);
// console.log('result26', result26)

// CHALLENGE 27
// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether(one, two) {
  // if there's only one argument
  if (typeof one !== 'number') {
    return undefined;
  }
  // checks for there's more than one argument and the second argument is a number
  if (arguments.length > 1 && typeof two !== 'number') {
    return undefined;
  }
  // if there's only one argument...
  if (arguments.length === 1) {
    return function sumTwoAnd(three) {
      if (typeof three !== 'number') {
        return undefined;
      } else {
        return three + one;
      }
    };
  }
  return one + two;
}

const result27 = addTogether(2)([3]);
// console.log('result27', result27)

// CHALLENGE 28
// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects.
// The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

const truthCheck = (collection, pre) => {
  const check = collection.every((item) => item[pre]);
  // console.log('check', check)
};

const result28 = truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex'
);
// console.log('result28', result28)

// CHALLENGE 29
// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index)
// until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

const dropElements = (arr, func) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (func(arr[i])) {
      //slicing at i -> first element with func(arr[i]) value
      return arr.slice(i);
      // else if it's at the last index and hasn't found anything -> return empty array
    } else if (i === arr.length - 1) {
      return [];
    }
  }
};

// const dropElements = (arr, func)  => {
//   const res = arr.map((ele, i) => {
//     if (func(ele)) {
//       console.log(ele)
//       return arr.slice(ele)
//     }
//   })
//   return res
// }

const result29 = dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
// console.log('result29', result29)

// CHALLENGE 30
// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

const spinalCase = (str) => {
  if (str.includes('_')) {
    return str.toLowerCase().split('_').join('-');
  }
  if (str.includes(' ') && str.includes('-')) {
    return str
      .split(/(?=[A-Z])/)
      .join(' ')
      .split('-')
      .join(' ')
      .replace('  ', ' ')
      .split(' ')
      .join('-')
      .toLowerCase();
  }
  if (!str.includes(' ')) {
    return str
      .split(/(?=[A-Z])/)
      .join('-')
      .toLowerCase();
  }
  return str.toLowerCase().split(' ').join('-');
};

const result30 = spinalCase('Teletubbies say Eh-oh');
// console.log('result30', result30)

// CHALLENGE 31
// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

const whatIsInAName = (collection, source) => {
  const collectionArr = collection.flat();

  let res = collectionArr.filter((obj) => {
    // console.log(obj)
    return Object.entries(obj)
      .toString()
      .includes(Object.entries(source).toString());
  });
  return res;
};

const result31 = whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
// console.log('result31', result31)

// CHALLENGE 32
// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// const sumFibs = (num) => {
//   var sum = 0;
//   var fib = 0;

//   while (sum <= num) {
//     var currentFib = fibo(fib);
//     if (currentFib % 2 === 1 && currentFib <= num) {
//       sum += currentFib;
//     }
//     fib++;
//   }
//   return sum;
// }

// function fibo(n) {
//   if (n <= 1) return n;
//   return fibo(n - 1) + fibo(n - 2);
// }

const sumFibs = (num) => {
  // starting off 1, 1
  let arr = [1, 1];
  // let = 2 -> starting after the second 1
  for (let i = 2; i < num + 1; i++) {
    // pushing at index i - 2  (to get to 0 and start from the beginning of array, + 1 -> 1 + 1 = 2 etc)
    // last 2 numbers added together to get to value of current number
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  // if n is less than or equal to num and is an odd number. reduce and sum of all odd fibonacci numbers.
  return arr.filter((n) => n <= num && n % 2 !== 0).reduce((acc, n) => acc + n);
};

const result32 = sumFibs(1000);
// console.log('result32', result32)

// CHALLENGE 33
// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
// B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z, and usually Y
// A, E, I, O, U and sometimes Y are not consonants.

const translatePigLatin = (str) => {
  const strArr = str.split('');
  console.log(strArr);
  const consonantsArr = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'z',
    'y',
  ];
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < strArr.length; i++) {
    // console.log(strArr[i])
    for (let j = 0; j < vowelArr.length; j++) {
      // console.log(vowelArr[j])
      if (strArr[0] === vowelArr[j]) {
        return str + 'way';
        // } else if (strArr.some(char => consonantsArr.includes(char) )) {
      } else if (strArr[0].includes('c')) {
        const cons = strArr.splice(0, 1).toString();
        const res = [...strArr, cons]
        console.log(res)
        return res.join('') + 'ay'
      }
    }
  }
  
};

const result33 = translatePigLatin('california');
console.log('result33', result33);

module.exports = {
  factorialize,
  repeatStringNumTimes,
  convertToF,
  findElement,
  largestOfFour,
  findLongestWordLength,
};
