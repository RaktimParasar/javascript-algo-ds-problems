//Question Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!. For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 . Only integers greater than or equal to zero will be supplied to the function. 

//Solution 1 Recursion Method
function factorialize(num) {
    if (num <= 0) return 1;
    else {
        return num * factorialize(num - 1);
    }
}
console.log(factorialize(5));

//Solution 2 Iterate Method
function factorialize(num) {
    for (var product = 1; num > 0; num--) {
        product = product *= num;
    }
    return product;
}
console.log(factorialize(5));