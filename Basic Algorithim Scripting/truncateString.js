//Question- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//Solution 1 Basic approach with join function
function truncateString(str, num) {
    var newStr = [];
    for (var i = 0; i < num; i++) {
        if (num >= str.length) {
            return str;
        }
        else { newStr.push(str[i]) }
    }
    newStr = newStr.join("")
    newStr += "..."
    return newStr;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Solution 2 Ternary approach with slice function
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));