//Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
//anonymous function
var odd = function(array) {
    array = [3, 5, 7, 9];
    return array.filter(function(num) {
      return num % 2 !== 0;
    });
  };
  console.log(odd([3, 5, 7, 9]));


  //IIFE
  (function odd(array) {
    array = [3, 5, 7, 9];
    var oddnumber = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddnumber.push(array[i]);
        }
    }
    console.log(oddnumber);
})([3, 5, 7, 9]);



  //b.Convert all the strings to title caps in a string array
//anonymous function
var titlecase = function(str){
    str = str.toLowerCase();
    str = str.split(" ");
    var resultarray = [];
    for(var i = 0;i<str.length;i++){
        var result = str[i].charAt(0).toUpperCase()+str[i].slice(1);
        resultarray.push(result)
        
    }
    return  resultarray.join(' ');
    
}
console.log(titlecase("My name is gomathy"));



//IIFE
 (function (str) {
    str = str.toLowerCase();
    str = str.split(" ");
    var resultarray = [];
    for(var i = 0;i<str.length;i++){
        var result = str[i].charAt(0).toUpperCase()+str[i].slice(1);
         resultarray.push(result)
    }
console.log(resultarray.join(' '));
 }("My name is gomathy"))




//c. Sum of all numbers in an array
//anonymous function
var sumarray = function (arr){
    var sum = 0;
    for (var i = 0 ; i<arr.length ; i++)
    {
        sum = sum + arr[i];
    }
    return sum ;
}
var arr = [1,3,5,6,7,9];
console.log(sumarray(arr));


//IIFE
(function sumarray(arr){
    var sum = 0;
    var array = [];
    for (var i = 0 ; i<arr.length ; i++)
    {
        sum = sum + arr[i];
    }
    console.log(sum);
    return sum;
})([2,3,4,5,6]);


//d.Return all the prime numbers in an array
//anonymous function
var findPrimes = function(arr) {
    var primeNumbers = [];

    for (var i = 0; i < arr.length; i++) {
        var isPrime = true;

        for (var j = 2; j < arr[i]; j++) {
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

var numbers = [1, -2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPrimes(numbers));


//IIFE
(function(arr){
    var primeNumbers = [];

    for (var i = 0; i < arr.length; i++) {
        var isPrime = true;

        for (var j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && arr[i] > 1) {
            primeNumbers.push(arr[i]);
        }
    }
    console.log(findPrimes(numbers));
    return primeNumbers;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//e.Return all the palindromes in an array
//anonymous function
var isPalindrome = function(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}

var getAllPalindromes = function(arr) {
    var palindromes = [];

    for (var i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }

    return palindromes;
}
console.log(getAllPalindromes(["malayalam", "car", "mom", "bus"]));

  //IIFE
  (function() {
    var isPalindrome = function(str) {
        var reversed = str.split("").reverse().join("");
        return str === reversed;
    }
        var getAllPalindromes = function(arr) {
        var palindromes = [];

        for (var i = 0; i < arr.length; i++) {
            if (isPalindrome(arr[i])) {
                palindromes.push(arr[i]);
            }
        }

        console.log(palindromes);
        return palindromes;
    };
    getAllPalindromes(["malayalam", "car", "mom", "bus"]);

})();


//f. Return median of two sorted arrays of the same size.
//anonymous function
var findMedian = function(arr1, arr2) {
    
    var mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    var length = mergedArray.length;
    var mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        
        return mergedArray[mid];
    }
};
var array1 = [1, 3, 5];
var array2 = [2, 4, 6];
console.log(findMedian(array1, array2));

//IIFE
var findMedian = (function() {
    return function(arr1, arr2) {
        var mergedArray = arr1.concat(arr2);
        mergedArray.sort(function(a, b) {
            return a - b;
        });
        var length = mergedArray.length;
        var mid = Math.floor(length / 2);

        if (length % 2 === 0) {
            
            return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        } else {
            
            return mergedArray[mid];
        }
    };
})();
var array1 = [1, 3, 5];
var array2 = [2, 4, 6];
console.log(findMedian(array1, array2));


//g.Remove duplicates from an array
//anonymous function
var removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

var originalArray = [1, 2, 3, 4, 2, 5, 6, 1];
var uniqueArray = removeDuplicates(originalArray);

console.log(uniqueArray);


//IIFE function
var uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})([1, 2, 3, 4, 2, 5, 6, 1]);

console.log(uniqueArray);


//h.Rotate an array by k times
//anonymous function
var rotateArray = function(arr, k) {
    for (var i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};

var myArray = [1, 2, 3, 4, 5];
console.log(rotateArray(myArray, 2));


//IIFE
var rotatedArray = (function(arr, k) {
    for (var i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArray);







 


  




  