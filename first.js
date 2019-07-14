let myArr = [4, 5, 6, 7];

// Array type one
console.log(`Array of type one`);
myArr.forEach((element) => {
    console.log(element);
});

// O/P : 4 5 6 7

// Array type two
console.log(`Array of type two`);
for (let val of myArr) {
    console.log(val);
}

// O/P : 4 5 6 7

// Array of type three
console.log(`Array of type three`);
for (let key in myArr) {
    console.log(myArr[key]);
}



