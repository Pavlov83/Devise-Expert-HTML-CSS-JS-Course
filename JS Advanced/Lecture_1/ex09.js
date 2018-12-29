"use strict"

const array = [12,4,5];

const sum =(a,b,c)=> a + b + c;

console.log('sum', sum(array[0],array[1],array[2]));

//we can unpack the array with '...'


//here we can include the array into the other array

const nums = [100, ...array,200];

console.log('nums',nums);

