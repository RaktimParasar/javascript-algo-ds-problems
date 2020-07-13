//Question- Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. The arguments["hello", "hey"] should return false because the string "hello" does not contain a "y". Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

//Solutin 1 Basic approach
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    console.log(target.indexOf())
    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0)
            return false;
    }
    return true;
}
console.log(mutation(["hello", "hkelo"]));

//Solution 2 Declarative approach
function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every(function (letter) {
            return arr[0].toLowerCase().indexOf(letter) != -1;
        });
}
console.log(mutation(["hello", "hkelo"]))
