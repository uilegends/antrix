// Arrow/Fat  function

let myArr = [4, 5, 6, 8];

console.log('Arrow function');
myArr.forEach(_ => console.log(_));

// Note for single element no need  {} and function brakets ()

// Map function 
console.log('Map fucntion');
let mapValues = myArr.map((ele) => ele * 2);
console.log(mapValues);
// o/p : [ 8, 10, 12, 16 ]
/* Note: Mapped value again in array format and will be evaluated each value
  from Array.
*/

// Filter function 
console.log('Filter fucntion');
let mapValuesFilter = myArr.filter((ele) => ele > 5);
console.log(mapValuesFilter);
// o/p : [ 6, 8 ]
/* Note: Filter value again in array format and will be evaluated each value
  from Array.
*/


// Some function 
console.log('Some fucntion : To check any value matches Returns True or False');
let mapValuesSome = myArr.some((ele) => ele > 5);
console.log(mapValuesSome);

/* Note: Some value again in array format and will be evaluated each value
  from Array.
*/

// Reduce function 
console.log('Reduce function');
let mapValuesSum = myArr.reduce((ele, sum) => (ele + sum), 0);
console.log(mapValuesSum);

/* Note: Add array values again in array format and will be evaluated each value
  from Array.
*/

// Rest operator

function classes(...classNames) {
    console.log('classNames will Rest and get an Array');
    for (let singleValue of classNames) {
        console.log(singleValue);
    }
}
classes('first class', 'Second class', 'third class', 'fourth class');


// Spread operator
function mySpread(...spreadValues) {
    console.log('Menu name will Spread and get an Array');
    for (let singleValue of spreadValues) {
        console.log(singleValue);
    }
}
let spreadArr = ['Paneer', 'Masroom', 'pulses', 'Rajma rice', 'Masala rice'];
mySpread(...spreadArr);









