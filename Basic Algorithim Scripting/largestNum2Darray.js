//Question- Return an array consisting of the largest number from each provided sub - array. For simplicity, the provided array will contain exactly 4 sub - arrays. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//Solution Basic approach
function largestOfFour(arr) {
    //store the output array
    let results = [];
    //loop through outer array
    for (var i = 0; i < arr.length; i++) {
        //assign with the 1st item of inner array to compare with other items
        var largestNumber = arr[i][0];
        //loop through the inner array
        for (var ii = 1; ii < arr[i].length; ii++) {
            //compare all items with 1st item to get the largestNumber
            if (arr[i][ii] > largestNumber) {
                //largestNumber becames the new greaterNumber
                largestNumber = arr[i][ii];
            }
        }
        //push the largestNumber to results array
        results.push(largestNumber);
    }

    return results;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));