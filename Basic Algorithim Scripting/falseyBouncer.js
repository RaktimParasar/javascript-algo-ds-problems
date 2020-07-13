//Question- Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Hint: Try converting each value to a Boolean.

//Solution 1 boolean function
function bouncer(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(bouncer([7, "ate", "", false, 9]));

//Solution 2 without boolean function
function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}
console.log(bouncer([7, "ate", "", false, 9]));

//Solution 3 filter function
function bouncer(arr) {
    return arr.filter(Boolean);
}
console.log(bouncer([7, "ate", "", false, 9]));