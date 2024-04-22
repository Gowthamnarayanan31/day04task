//a.print odd no in array;
const odd = arr => {
    let oddarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddarr.push(arr[i]);
        }
    }
    return oddarr;
};

console.log(odd([1, 2, 3, 4, 5, 6])); 

//b. convert all the strings to title caps in a string array;
const titleCase = str => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

console.log(titleCase("gowthem at guvi")); 
//c.sum of all no in an array;
const add = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(add([1, 2, 3, 4, 5, 6])); 
//d.Return all the prime numbers in an array
const findPrimes = arr => {
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
//e.Return all the palindromes in an array;
const findPalindromes = arr => {
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

console.log(findPalindromes(["madam", "racecar", "hello", "level", "world", "rotor"])); // Output in arrow function



