//Question- We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.

//Solution 1 Basic approach using reduce function
function sumAll(arr) {
    let newArr = []
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        newArr.push(i)
    }
    const sumOfArr = newArr.reduce((sum, num) => sum + num, 0)
    return sumOfArr;
}
console.log(sumAll([4, 1]));

//Solution 2 without reduce function
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}
console.log(sumAll([4, 1]));