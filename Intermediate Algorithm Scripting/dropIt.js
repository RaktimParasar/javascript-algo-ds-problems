//Question- Given the array arr, iterate through and remove each element starting from the first element(the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


//Solution 1 using shift
function dropElements(arr, func) {
    while (!func(arr[0])) {
        return arr.shift()
    }
    return result;
}
console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));

//Solution 2 Basic approach
function dropElements(arr, func) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return result;
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));