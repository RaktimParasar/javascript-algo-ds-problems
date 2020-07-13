//Question- Create a function that looks through an array(first argument) and returns the first element in the array that passes a truth test(second argument).If no element passes the test, return undefined.

//Solution 1 Basic approach
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        //The pre-defined function already checks each number for us, so if it is “true”, we return that num.
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

//Solution 2 using find method
function findElement(arr, func) {
    return arr.find(func);
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));