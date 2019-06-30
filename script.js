//first class functions 

var years = [1990, 1965, 1937, 2005, 1998];

//lets create a new empty array 

function arrayCalc (arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);