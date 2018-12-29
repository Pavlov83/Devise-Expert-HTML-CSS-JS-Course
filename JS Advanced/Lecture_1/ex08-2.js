"use strict"


const array = [12,3,4,5,6,8,7,9];

//lambda expression allows us to remove 'function' but we use =>
const n = array.filter((value)=>(value % 2) === 0);


// returns new array
console.log('n: ',n);