//Question-  Pig Latin is a way of altering English Words.The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin.Input strings are guaranteed to be English words in all lowercase.

//Solution Basic approach
function translatePigLatin(str) {
    var firstVowel = str.match(/[aeiou]/)
    console.log(firstVowel)
    var firstVowelPosition = str.indexOf(firstVowel)

    if (firstVowelPosition > 0) {
        return str.slice(firstVowelPosition) + str.slice(0, firstVowelPosition) + "ay";
    }
    else if (firstVowel === null) {
        return str + "ay"
    } else {
        return str + "way"
    }
}
console.log(translatePigLatin("algorithm"));
