//Question- A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


//Solution 1 Basic approach
function sumPrimes(num) {
    let i = 1;
    let sum = 0;
    while (i <= num) {
        if (isPrime(i)) {
            sum += i;
        }
        i++;
    }
    return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
}
console.log(sumPrimes(7));

//Solution 2 using reduce
function sumPrimes(max) {
    var store = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!store[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                store[j] = true;
            }
        }
    }
    return primes.reduce((a, b) => a + b);
}
console.log(sumPrimes(10));