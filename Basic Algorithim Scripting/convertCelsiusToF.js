//Question- The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9 / 5, plus 32.You are given a variable celsius representing a temperature in Celsius.Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

//Solution Basic approach
function convertToF(celsius) {
    var fahrenheit = celsius * (9 / 5) + 32;
    if (typeof fahrenheit !== "undefined") {
        return fahrenheit;
    } else {
        return "fahrenheit not defined";
    }
}
console.log(convertToF(30));