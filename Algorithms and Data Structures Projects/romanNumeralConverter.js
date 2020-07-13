//Question- Convert the given number into a roman numeral. All roman numerals answers should be provided in upper -case.

//Solution 1 Object approach
function convertToRoman(num) {
    var romanNumKeys = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = "";
    for (var key in romanNumKeys) {
        while (num >= romanNumKeys[key]) {
            roman += key;
            num -= romanNumKeys[key];
        }
    }
    return roman;
}

console.log(convertToRoman(36));


//Solution 2 -array Approach
var convertToRoman = function (num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    var romanized = "";

    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }

    return romanized;
};
console.log(convertToRoman(36));
