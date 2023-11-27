//Do the below programs in Arrow function & IIFE
//a.Print odd numbers in an array
//arrow function
 const odd = (array) => array.filter((num) => num % 2 !== 0);
console.log(odd([3, 5, 7, 9]));

//b.Convert all the strings to title caps in a string array
//arrow function
const titlecase = (str) => {
    str = str.toLowerCase().split(" ");
    let resultArray = [];

    for (let i = 0; i < str.length; i++) {
        let result = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        resultArray.push(result);
    }

    return resultArray.join(' ');
};

console.log(titlecase("My name is gomathy"));


//c. Sum of all numbers in an array
//arrow function
const sumarray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const arr = [1, 3, 5, 6, 7, 9];
console.log(sumarray(arr));


//d.Return all the prime numbers in an array
//arrow function
const findPrimes = (arr) => {
    const primeNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;

        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && arr[i] > 1) {
            primeNumbers.push(arr[i]);
        }
    }

    return primeNumbers;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPrimes(numbers));


//e.Return all the palindromes in an array
//arrow function
const isPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
};

const getAllPalindromes = (arr) => {
    const palindromes = arr.filter((element) => isPalindrome(element));
    return palindromes;
};


const words = ["level", "hello", "radar", "world"];
console.log(getAllPalindromes(words));
