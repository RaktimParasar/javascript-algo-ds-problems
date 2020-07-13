//Question- Flatten a nested array.You must account for varying levels of nesting.
//     Ex - steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].


//Solution 1 Basic approach
var newArr = [];
function steamrollArray(arr) {

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (Array.isArray(arr[i])) {
            steamrollArray(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

//Solution 2 Using forEach
function steamrollArray(arr) {
    var oneArr = []
    flatten(arr);
    function flatten(arr) {
        arr.forEach(arr2 => {
            if (!Array.isArray(arr2)) {
                oneArr.push(arr2);
            }
            else {
                flatten(arr2);
            }
        });
    } return oneArr
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

//Solution 3 Ternary
function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));