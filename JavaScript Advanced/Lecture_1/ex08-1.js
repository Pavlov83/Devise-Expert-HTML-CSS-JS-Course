"use strict"


const array = [12,3,4,5,6,8,7,9];

//lambda expression allows us to remove 'function' but we use =>
let n = array.filter((value,index)=>{
		return(value % 2) === 0;
});

// returns new array
console.log('n: ',n);