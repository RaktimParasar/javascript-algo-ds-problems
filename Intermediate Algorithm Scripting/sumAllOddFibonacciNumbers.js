//Question- Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

//Solution 1 Easy approach
function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num <= 0) return 0;

    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;

    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }

    // We filter the array to get the odd numbers and reduce them to get their sum.
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}
console.log(sumFibs(4));

//Solution 2 Basic approach
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
            console.log(result)
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;

    }

    return result;
}
console.log(sumFibs(4));