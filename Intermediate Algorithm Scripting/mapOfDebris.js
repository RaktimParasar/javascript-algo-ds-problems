//Question- Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format { name: 'name', avgAlt: avgAlt }.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number.The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s - 2.


//Solution Basic approach
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var result = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));
        newArr.push({ name: arr[i].name, orbitalPeriod: result })
    }
    return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));
