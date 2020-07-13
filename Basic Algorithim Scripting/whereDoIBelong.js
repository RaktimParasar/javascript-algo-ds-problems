//Question- Return the lowest index at which a value(second argument) should be inserted into an array(first argument) once it has been sorted. The returned value should be a number.For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1(index 0), but less than 2(index 1). Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like[3, 5, 20] and 19 is less than 20(index 2) and greater than 5(index 1).

//Solution 1 Basic approach
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i])
            return i;
    }
    return arr.length;
}
console.log(getIndexToIns([], 1));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

//Solution 2 using push() sort() indexOf()
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr.indexOf(num);
}
console.log(getIndexToIns([], 1));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

//Solution 3 using filter method
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}
console.log(getIndexToIns([], 1));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));