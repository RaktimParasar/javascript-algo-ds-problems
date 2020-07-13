//Question- Check if a string(first argument, str) ends with the given target string(second argument, target). This challenge can be solved with the.endsWith() method, which was introduced in ES2015.But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

//Solution 1 RegExp approach
function confirmEnding(str, target) {
    //constructor regExp is used to test with target
    //'$' refers to end string
    //'i' refers to iFlag use to find a-z & A-Z
    let testRegex = new RegExp(target + '$', 'i');
    return testRegex.test(str);
}
console.log(confirmEnding("Bastian", "n"));

//Solution 2 Declarative approach
function confirmEnding(str, target) {
    //slice fuction copies the string then total length of string is substract the target length, compares the result with target, if true returns true, else false
    return (str.slice(str.length - target.length) === target);
}
console.log(confirmEnding("He has to give me a new name", "name"));