//Question- Convert a string to spinal case.Spinal case is all-lowercase-words-joined-by-dashes.


//Solution Basic approach
function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join('-')
        .toLowerCase()
}
console.log(spinalCase('ThisIsSpinalTap'));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('This_Is_Spinal_Tap'));