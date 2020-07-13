//Question-  The DNA strand is missing the pairing element.Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG.Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C", "G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//Solution 1 Basic approach
function pairElement(str) {
    var newPair = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "G") {
            newPair.push(["G", "C"])
        }
        else if (str[i] === "C") {
            newPair.push(["C", "G"])
        }
        else if (str[i] === "A") {
            newPair.push(["A", "T"])
        }
        else if (str[i] === "T") {
            newPair.push(["T", "A"])
        }
    }
    return newPair;
}
console.log(pairElement("GCG"));

//Solution 2 Using Switch
function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];

    // Function to check with strand to pair.
    var search = function (char) {
        switch (char) {
            case "A":
                paired.push(["A", "T"]);
                break;
            case "T":
                paired.push(["T", "A"]);
                break;
            case "C":
                paired.push(["C", "G"]);
                break;
            case "G":
                paired.push(["G", "C"]);
                break;
        }
    };

    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
        search(str[i]);
    }

    return paired;
}
console.log(pairElement("GCG"));

//Solution 3 Objects and Map
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}
console.log(pairElement("GCG"));