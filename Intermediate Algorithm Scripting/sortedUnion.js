//Question- Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

//Solution 1 Basic approach
function uniteUnique(arr) {
    //create an empty array
    var newArr = []
    //loop through the arguments
    for (var i = 0; i < arguments.length; i++) {
        var newArgs = arguments[i];
        //loop through the array of arguments
        for (var j = 0; j < newArgs.length; j++) {
            var finalArgs = newArgs[j]
            //check if the value is already on newArr if not then push
            if (newArr.indexOf(finalArgs) < 0) {
                newArr.push(finalArgs);
            }
        }
    }
    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


//Solution 2 Gives a sorted result in ascending order
function union(arra1) {
    var newArr = []
    for (var i = 0; i < arguments.length; i++) {
        newArr = newArr.concat(arguments[i]);
    }
    var obj = {};

    for (var i = arra1.length - 1; i >= 0; --i)
        obj[arra1[i]] = arra1[i];

    for (var i = newArr.length - 1; i >= 0; --i)
        obj[newArr[i]] = newArr[i];

    var res = [];

    for (var n in obj) {

        if (obj.hasOwnProperty(n))
            res.push(obj[n]);
    }

    return res;

}
console.log(union([1, 3, 2], [5, 2, 1, 4], [2, 1]));


