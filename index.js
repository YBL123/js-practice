// CHALLENGE 1: Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
// If n === 0 return 1

const factorialize = (num) => {
  const arr = []
  let result = 0
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      arr.push(i)
    }
  
    result = arr.reduce((acc, currNum) => {
      return acc * currNum
    })
  
    // console.log(result)
    return result
  } else {
    return 1
  }

}

factorialize(5)

// CHALLENGE 2
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
// "abc" === "abcabcabc"

const repeatStringNumTimes = (str, num) => {
  const arr = []
  let result = ''

  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      arr.push(str.split(' '))
    }
  }

  result = arr.join('')
  return result

}

const result = repeatStringNumTimes('abc', 3)
// console.log(result)

// CHALLENGE 3
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

const convertToF = (celsius) => {
  return (celsius * 9 / 5 ) + 32
}

const result2 = convertToF(30)
// console.log(result2)

// CHALLENGE 4
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

const findElement = (arr, func) => {
  const result = arr.find(val => func(val))
  return result
}

const result3 = findElement([1, 2, 3, 4], num => num % 2 === 0)
// console.log(result3)

// CHALLENGE 5
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

const largestOfFour = (arr) => {
  const res = arr.map(subArr => {
    return Math.max(...subArr)
  })
  
  return res
}

const result4 = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// console.log(result4)


//CHALLENGE 6

//Basic Algorithm Scripting: Find the Longest Word in a String
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

const findLongestWordLength = (str) => {
  const arr = str.split(' ')

  const result = arr.sort((a, b) => b.length - a.length)
  return result[0].length

}
const result5 = findLongestWordLength('The quick brown fox jumped over the lazy dog')
// console.log(result5)


module.exports = {
  factorialize, 
  repeatStringNumTimes,
  convertToF,
  findElement,
  largestOfFour,
  findLongestWordLength
}