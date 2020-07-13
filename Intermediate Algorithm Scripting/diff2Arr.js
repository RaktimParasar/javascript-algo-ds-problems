//Question- Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.
// Note:
// You can return the array with its elements in any order.


//Solution 1 Basic approach
function diffArray(arr1, arr2) {
    var newArr = [];

    function newFnc(newArr1, newArr2) {
        for (var i = 0; i < newArr1.length; i++) {
            if (newArr2.indexOf(newArr1[i]) < 0) {
                newArr.push(newArr1[i]);
            }
        }
    }
    newFnc(arr1, arr2);
    newFnc(arr2, arr1);

    return newArr;
}
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


//Solution 2 Declarative approach
function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));