//a.print odd no in array;
const odd=function(arr){
    let oddarr=[];
    for( let i=0;i<arr.length;i++){
     //[1,2,3,4,5,6,67]
      if(arr[i]%2!=0) {
        oddarr.push(arr[i])
      } 
    }
    return oddarr
}
console.log(odd([1,2,3,4,5,6]))
//iife
const odd = (function() {
    return function(arr) {
        let oddarr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                oddarr.push(arr[i]);
            }
        }
        return oddarr;
    };
})();

console.log(odd([1, 2, 3, 4, 5, 6])); 
//b. convert all the strings to title caps in a string array;
const titleCase = function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

console.log(titleCase("gowthem at guvi"));
//iife
const titleCase = (function() {
    return function(str) {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    };
})();

console.log(titleCase("gowthem at guvi")); 
//c.sum of all no in an array;
const add = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(add([1, 2, 3, 4, 5, 6])); 

//iife
const d = (function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
})([1,2,3,4,5,6]);

console.log(d); 

//d.Return all the prime numbers in an array
const findPrimes = function(arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isPrime = true;
        
        if (num <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
};

console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
//iife
const findPrimes = (function() {
    return function(arr) {
        const primes = [];
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            let isPrime = true;

            if (num <= 1) {
                isPrime = false;
            } else {
                for (let j = 2; j <= Math.sqrt(num); j++) {
                    if (num % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime) {
                primes.push(num);
            }
        }
        return primes;
    };
})();

console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//e.Return all the palindromes in an array
const findPalindromes = function(arr) {
    const palindromes = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let reversedWord = word.split('').reverse().join('');

        if (word === reversedWord) {
            palindromes.push(word);
        }
    }

    return palindromes;
};

console.log(findPalindromes(["madam", "racecar", "hello", "level", "world", "rotor"])); 
//iife
const findPalindromes = (function() {
    return function(arr) {
        const palindromes = [];

        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
            let reversedWord = word.split('').reverse().join('');

            if (word === reversedWord) {
                palindromes.push(word);
            }
        }

        return palindromes;
    };
})();

console.log(findPalindromes(["madam", "racecar", "hello", "level", "world", "rotor"])); 


//f.Return median of two sorted arrays of the same size.

const MedianOfSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const n = mergedArray.length;
    if (n % 2 === 0) {
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    } else {
        return mergedArray[Math.floor(n / 2)];
    }
};

console.log("Median of 2 sorted arrays is:", MedianOfSortedArrays([1, 2, 3], [4])); 
//iife
const MedianOfSortedArrays = (function() {
    return function(nums1, nums2) {
        const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
        const n = mergedArray.length;
        if (n % 2 === 0) {
            return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
        } else {
            return mergedArray[Math.floor(n / 2)];
        }
    };
})();

console.log("Median of 2 sorted arrays is:", MedianOfSortedArrays([1, 2, 3], [4])); 


//e.remove duplicate from array 
const removeDuplicates = function(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
};

const array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array)); 
//iife
const removeDuplicates = (function() {
    return function(arr) {
        const uniqueArray = [];

        for (let i = 0; i < arr.length; i++) {
            let isDuplicate = false;
            for (let j = 0; j < uniqueArray.length; j++) {
                if (arr[i] === uniqueArray[j]) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) {
                uniqueArray.push(arr[i]);
            }
        }

        return uniqueArray;
    };
})();

const array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array)); 
//f.Rotate an array by k times
const rotateArraySplice = function(nums, k) {
    const n = nums.length;
    k = k % n;
    const removed = nums.splice(-k);
    for (let i = removed.length - 1; i >= 0; i--) {
        nums.unshift(removed[i]);
    }
    return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArraySplice(nums.slice(), 3));
//iife
const rotateArraySplice = (function() {
    return function(nums, k) {
        const n = nums.length;
        k = k % n;
        const removed = nums.splice(-k);
        for (let i = removed.length - 1; i >= 0; i--) {
            nums.unshift(removed[i]);
        }
        return nums;
    };
})();

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArraySplice(nums.slice(), 3)); 


