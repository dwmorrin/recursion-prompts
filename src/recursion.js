/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    if (n < 0) {
        return null
    }
    if (n == 0 || n == 1) {
        return 1
    }
    return n * factorial(n - 1)
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    if (array.length == 0) {
        return 0
    }
    if (array.length == 1) {
        return array[0]
    }
    const slice = array.slice()    
    const a = slice.shift()
    slice[0] += a
    return sum(slice)
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    if (array.length == 0) {
        return 0
    }
    if (array.length == 1) {
        if (Array.isArray(array[0])) {
            return arraySum(array[0])
        }
        return array[0]
    }
    const slice = array.slice()
    const a = Array.isArray(slice[0]) ? arraySum(slice[0])
                                      : slice[0]
    const b = Array.isArray(array[1]) ? arraySum(slice[1])
                                      : slice[1]
    slice.shift()
    slice[0] = a + b
    return arraySum(slice)
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n < 0) {
        n = -n
    }
    if (n === 0) {
        return true
    }
    if (n === 1) {
        return false
    }
    return isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n == 0) {
        return 0
    }
    const sign = n < 0 ? -1 : 1
    return n - sign + sumBelow(n - sign)
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    if (x == y || y - x == 1 || x - y == 1) {
        return []
    }
    const sign = (y - x > 0) ? 1 : -1
    x = x + sign
    y = y - sign
    const array = range(x, y)
    array.unshift(x)
    if (x !== y) {
        array.push(y)
    }
    return array
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp == 0) {
        return 1
    }
    if (exp == 1) {
        return base
    }
    if (exp < 0) {
        return 1 / (base * exponent(base, -exp - 1))
    }
    return base * exponent(base, exp - 1)
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n == 1) {
        return true
    }
    if (n < 1 || Math.floor(n) != n) {
        return false
    }
    return powerOfTwo(n / 2)
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if (string.length == 1) {
        return string
    }
    const split = string.split("")
    const last = split.pop()
    return last + reverse(split.join(""))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    if (string.length <= 1) {
        return true
    }
    const split = string.toLowerCase().replace(/\s/, "").split("")
    const a = split.shift()
    const b = split.pop()
    if (a !== b) {
        return false
    }
    return palindrome(split.join(""))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0) {
        return NaN
    }
    const negative = x < 0 ^ y < 0
    const diff = negative ? x + y : x - y
    if (diff === 0) {
        return 0
    }
    if (x > 0 && diff < 0 || x < 0 && diff > 0) {
        return x
    }
    return modulo(diff, y)
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    if (x == 0 || y == 0) {
        return 0
    }
    const negative = y < 0 ? true : false
    return (negative ? -x : x) + multiply(x, y - (negative ? -1 : 1))
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
    if (y === 0) {
        return NaN
    }
    if (x === 0) {
        return 0
    }
    const negative = x < 0 ^ y < 0
    const diff = negative ? x + y : x - y
    if (diff === 0) {
        return 1
    }
    if (x > 0 && diff < 0 || x < 0 && diff > 0) {
        return 0
    }
    return (negative ? -1 : 1) + divide(diff, y)
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0) {
        return null
    }
    if (x > y) { // swap x and y
        x ^= y; y ^= x; x ^= y
    }
    const r = y % x
    if (r == 0) {
        return x
    }
    return gcd(r, x)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    // TODO check if this is a bug: checking length is not allowed, short circuits the recursion
//    if (str1.length != str2.length) {
//        return false
//    }
    const a = str1.split(""), b = str2.split("")
    if (a.shift() !== b.shift()) {
        return false
    }
    if (a.length == 0 && b.length == 0) {
        return true
    }
    return compareStr(a.join(""), b.join(""))
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    if (str.length == 0) {
        return []
    }
    const split = str.split("") // kind of silly not to just return this... am I cheating here?
    const first = split.shift()
    const array = createArray(split.join(""))
    array.unshift(first)
    return array
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    if (array.length == 0) {
        return array 
    }
    const first = array.shift()
    const a = reverseArr(array)
    a.push(first)
    return a
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length == 0) {
        return []
    }
    const array = buildList(value, --length)
    array.push(value)
    return array
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
    if (n == 0) {
        return []
    }
    const array = fizzBuzz(n - 1)
    if (n % 5 == 0) {
        if (n % 3 == 0) {
            array.push("FizzBuzz")
        } else {
            array.push("Buzz")
        }
    } else if (n % 3 == 0) {
        array.push("Fizz")
    } else {
        array.push("" + n)
    }
    return array
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if (array.length == 0) {
        return 0
    }
    const check = array.shift()
    if (check === value) {
        return 1 + countOccurrence(array, value)
    }
    return countOccurrence(array, value)
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    if (array.length == 0) {
        return []
    }
    const slice = array.slice()
    const value = callback(slice.shift())
    const map = rMap(slice, callback)
    map.unshift(value)
    return map
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
    const keys = Object.keys(obj)
    if (keys.length == 0) {
        return 0
    }
    let count = 0
    keys.forEach((k) => {
        if (k === key) {
            ++count
        }
        if (typeof obj[k] === "object") {
            count += countKeysInObj(obj[k], key)
        }
    })
    return count
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
    const keys = Object.keys(obj)
    if (keys.length == 0) {
        return 0
    }
    let count = 0
    keys.forEach(key => {
        if (obj[key] == value) {
            ++count
        }
        if (typeof obj[key] === "object") {
            count += countValuesInObj(obj[key], value)
        }
    })
    return count
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
    const keys = Object.keys(obj)
    if (keys.length == 0) {
        return
    }
    keys.forEach(key => {
        if (key === oldKey) {
            obj[newKey] = obj[oldKey]
            delete obj[oldKey]
        }
        if (typeof obj[key] === "object") {
            replaceKeysInObj(obj[key], oldKey, newKey)
        }
    })
    return obj
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    if (n <= 0) {
        return null
    }
    if (n == 1) {
        return [0, 1]
    }
    const array = fibonacci(n - 1)
    const l = array.length
    array.push(array[l - 1] + array[l - 2])
    return array
};


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) {
        return null
    }
    if (n <= 1) {
        return n
    }
    return nthFibo(n - 1) + nthFibo(n - 2)
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    if (array.length == 0) {
        return []
    }
    let slice = array.slice()
    const word = slice.shift().toUpperCase()
    slice = capitalizeWords(slice)
    slice.unshift(word)
    return slice
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    if (array.length == 0) {
        return []
    }
    let slice = array.slice()
    const word = slice.shift()
    slice = capitalizeFirst(slice)
    slice.unshift(word.replace(/^./, firstLetter => firstLetter.toUpperCase()))
    return slice
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    const keys = Object.keys(obj)
    if (keys.length === 0) {
        return 0
    }
    let count = 0
    keys.forEach(key => {
        if (typeof obj[key] === "object") {
            count += nestedEvenSum(obj[key])
        } else {
            if (typeof obj[key] === "number" && isEven(obj[key])) {
                count += obj[key]
            }
        }
    })
    return count
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    const slice = []
    array.forEach(value => {
        if (Array.isArray(value)) {
            slice.push(...flatten(value))
        } else {
            slice.push(value)
        }
    })
    return slice
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
    if (str.length === 0) {
        return obj
    }
    const split = str.split("")
    const letter = split.shift().toLowerCase()
    if (! obj[letter]) {
        obj[letter] = 1
    } else {
        obj[letter]++
    }
    return letterTally(split.join(""), obj)
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
    if (list.length == 1) {
        return list
    }
    let slice = list.slice()
    const value = slice.shift()
    slice = compress(slice)
    if (slice[0] != value) {
        slice.unshift(value)
    }
    return slice
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    if (array.length == 0) {
        return []
    }
    let slice = array.slice()
    const a = slice.shift()
    a.push(aug)
    slice = augmentElements(slice, aug)
    slice.unshift(a)
    return slice
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length == 1) {
        return array
    }
    let slice = array.slice()
    const value = slice.shift()
    slice = minimizeZeroes(slice)
    if (value != 0 || slice[0] != value) {
        slice.unshift(value)
    }
    return slice
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    let slice = array.slice()
    if (array.length == 1) {
        if (slice[0] < 0) {
            slice[0] = -slice[0]
        }
        return slice 
    }
    let value = slice.pop()
    slice = alternateSign(slice)
    if (value < 0 ^ slice[slice.length -1] < 0) {
        slice.push(value)
    } else {
        slice.push(-value)
    }
    return slice
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    const tbl = [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ]
    const split = str.split(" ")
    let word = split.shift()
    if (/\d+/.test(word)) {
        word = tbl[+word]
    }
    if (split.length > 0) {
        return word + " " + numToText(split.join(" "))
    }
    return word
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = document) {
    tag = tag.toUpperCase()
    let count = 0
    count += node.tagName == tag ? 1 : 0 // count self
    if (node.hasChildNodes()) { // recursively search through childNodes
        const childNodes = node.childNodes
        for (let i = 0, l = childNodes.length; i < l; ++i) {
            count += tagCount(tag, childNodes[i])
        }
    }
    return count
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
    min = typeof min === "undefined" ? 0 : min
    max = typeof max === "undefined" ? array.length - 1 : max
    if (max < min) {
        return null
    }
    guess = Math.floor((max + min) / 2)
    if (array[guess] === target) {
        return guess
    }
    if (array[guess] < target) {
        ++min
    } else {
        --max
    }
    return binarySearch(array, target, min, max)
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
    if (array.length <= 1) {
        return array.slice()
    }
    const slice = array.slice()
    const mid = Math.floor(array.length / 2)
    const a = mergeSort(array.slice(0, mid))
    const b = mergeSort(array.slice(mid))
    let i = j = k = 0;
    while (k < a.length + b.length) {
        if (j >= b.length || a[i] < b[j]) {
            slice[k++] = a[i++]
        } else if (i >= a.length || a[i] > b[j]) {
            slice[k++] = b[j++]
        }
    }
    return slice
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
    const isArray = Array.isArray(input)
    const isObject = typeof input === "object"
    if (isArray) {
        const array = []
        input.forEach(item => array.push(clone(item)))
        return array
    } else if (isObject) {
        const keys = Object.keys(input)
        const obj = {}
        keys.forEach(key => {
            let value = input[key]
            if (typeof value === "object") {
                value = clone(value)
            }
            obj[key] = value
        })
        return obj
    } else {
        return input
    }
};
