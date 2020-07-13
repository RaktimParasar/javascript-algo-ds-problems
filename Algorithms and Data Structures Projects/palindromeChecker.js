//Question- Return true if the given string is a palindrome.Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note:
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

//Solution 1 Basic approach
function palindrome(str) {
    var letters = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    let str1 = letters.split("").reverse().join()
    let str2 = letters.split("").join()
    if (str1 === str2) {
        return true
    }
    return false
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));

//Solution 2
//This solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why.
function palindrome(str) {
    //assign a front and a back pointer
    let front = 0;
    let back = str.length - 1;

    //back and front pointers won't always meet in the middle, so use (back > front)
    while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        if (str[front].match(/[\W_]/)) {
            front++;
            continue;
        }
        //decrements back pointer if current character doesn't meet criteria
        if (str[back].match(/[\W_]/)) {
            back--;
            continue;
        }
        //finally does the comparison on the current character
        if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
        front++;
        back--;
    }

    //if the whole string has been compared without returning false, it's a palindrome!
    return true;
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));

//Solution 3 One-liner approach
function palindrome(str) {
    return (
        str.replace(/[\W_]/g, "").toLowerCase() ===
        str
            .replace(/[\W_]/g, "")
            .toLowerCase()
            .split("")
            .reverse()
            .join("")
    );
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));