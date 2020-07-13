//Question- Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

//Solution 1 Loop approach
function titleCase(str) {
    let newStr = str.toLowerCase().split(" ")
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = (newStr[i][0].toUpperCase() + newStr[i].slice(1))
    }
    newStr = newStr.join(" ")
    return newStr;
}
console.log(titleCase("I'm a liTtle tea pot"));

// Solution 2 Basic approach
function titleCase(str) {
    var word = str.toLowerCase().split(" ")
    word[0] = word[0].toUpperCase();
    str = word.join(' ');
    return str;
}
console.log(titleCase("I'm a liTTle tea pot"));

//Solution 3 map approach
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

//Solution 4 RegExp approach
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase("I'm a little tea pot"));