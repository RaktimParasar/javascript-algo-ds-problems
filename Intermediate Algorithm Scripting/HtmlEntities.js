//Question Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
/*

case & : &amp
case < : &lt
case > : &gt
case " : &quot
case ' : &apos

*/

//Solution 1 Basic approach
function convertHTML(str) {

    var index = str.split("")

    for (var i = 0; i < index.length; i++) {
        if (index[i] === "&") {
            index[i] = "&amp;"
        }
        if (index[i] === "<") {
            index[i] = "&lt;"
        }
        if (index[i] === ">") {
            index[i] = "&gt;"
        }
        if (index[i] === "'") {
            index[i] = "&apos;"
        }
        if (index[i] === '"') {
            index[i] = "&quot;"
        }
    }
    return index.join("");
}

console.log(convertHTML("Dolce & Gab<bana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));


//Solution 2 using regex
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
convertHTML("Dolce & Gabbana");