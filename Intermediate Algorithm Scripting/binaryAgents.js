//Question- Return an English translated sentence of the passed binary string. The binary string will be space separated.

//Solution 1 Basic approach
function binaryAgent(str) {
    var newBin = str.split(" ");
    var binCode = [];

    for (var i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


//Solution 2 Using map
function binaryAgent(str) {
    let array = str.split(' ');
    array = array.map(item => { return String.fromCharCode(parseInt(item, 2)); });
    return array.join('');
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


