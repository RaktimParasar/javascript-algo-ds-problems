//Question- One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase.Do not transform any non - alphabetic character(i.e.spaces, punctuation), but do pass them on.

//Solution Basic approach
function rot13(str) {
    let decodeStr = ""
    for (let i = 0; i < str.length; i++) {
        let lettersCode = (str[i].charCodeAt());
        if (lettersCode >= 65 && lettersCode <= 77) {
            decodeStr += String.fromCharCode(lettersCode + 13);
        } else if (lettersCode >= 78 && lettersCode <= 90) {
            decodeStr += String.fromCharCode(lettersCode - 13);
        } else {
            decodeStr += str[i];
        }
    }
    return decodeStr;
}
console.log(rot13("SERR PBQR PNZC"));