//Array sort in ES6

let myArr = [34, 66, 63, 87, 10];
let sortedArry = myArr.sort((a, b) => a > b ? 1 : -1);
console.log(sortedArry);


// Array unique value find 

myMixedArray = [23, 45, 54, 64, 90, 90, 23, 34, 45];

let uniqueValues = [...new Set(myMixedArray)];
console.log(uniqueValues);

// O/P : [ 23, 45, 54, 64, 90, 34 ]
