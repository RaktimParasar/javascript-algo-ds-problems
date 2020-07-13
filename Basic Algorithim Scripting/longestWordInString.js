//Question - Return the length of the longest word in the provided sentence. Your response should be a number.

//Solution Basic approach
function findLongestWordLength(str) {
    //split the string to make it an array
    let words = str.split(" ");
    //declare 0 to compare with the every word length
    let maxLength = 0;
    //loop through the given string
    for (let i = 0; i < words.length; i++) {
        //compare with each stored value on the declared variable
        if (words[i].length > maxLength) {
        //if condition is true we get a new maxLength to compare with next words[i]
            maxLength = words[i].length;
        }
    }
    return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));