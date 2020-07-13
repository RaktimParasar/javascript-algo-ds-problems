//Question- You will be provided with an initial array(the first argument in the destroyer function), followed by one or more arguments.Remove all elements from the initial array that are of the same value as these arguments.
//Note:
// You have to use the arguments object.

//Solution 1 Basic approach
function destroyer(arr) {
    var args = Array.from(arguments);
    args.splice(0, 1);
    var target = args;
    console.log(target)
    var result = []
    for (var num of arr) {
        console.log(num)
        if (target.indexOf(num) === -1) {
            result.push(num);
        }
    }
    return result;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Solution 2 Filter function
function destroyer(arr) {
    var args = Array.from(arguments);
    args.splice(0, 1);
    var target = args;

    return arr.filter(num => target.indexOf(num) === -1);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));