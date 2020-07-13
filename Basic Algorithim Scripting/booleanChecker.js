//Question - Check if a value is classified as a boolean primitive.Return true or false.
//Hint- Boolean primitives are true and false.

//Solution 1 Basic approach
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }
    return false;
}
console.log(booWho());


//Solution 2 one-liner approach
function booWho(bool) {
    return (bool === true || bool === false)
}
console.log(booWho(false));


//Solution 3 Using typeof
function booWho(bool) {
    return typeof bool === "boolean";
}
console.log(booWho(null));