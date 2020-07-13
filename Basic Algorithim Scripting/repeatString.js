//Question-Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

//Solution 1 using for-loop
function repeatStringNumTimes(str, num) {
    var newStr = "";
    for (var i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}
console.log(repeatStringNumTimes("abc", 3));

//Solution 2 using while-loop
function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
}
console.log(repeatStringNumTimes("abc", 3));

//Solution 3 Ternary Recursion
function repeatStringNumTimes(str, num) {

    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
console.log(repeatStringNumTimes("abc", 3));