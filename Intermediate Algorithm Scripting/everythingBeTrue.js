//Question-  Check if the predicate(second argument) is truthy on all elements of a collection(first argument).
// In other words, you are given an array collection of objects.The predicate pre will be an object property and you need to return true if its value is truthy.Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
//Remember, you can access object properties through either dot notation or[] notation.

//Solution 1 basic approach
function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre])
            return false;
    }
    return true

}
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"))


//Solution 2 Using every
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
}

truthCheck(
    [
        { user: "Tinky-Winky", sex: "male" },
        { user: "Dipsy", sex: "male" },
        { user: "Laa-Laa", sex: "female" },
        { user: "Po", sex: "female" }
    ],
    "sex"
);
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"))