"use strict"

const array = [12,3,4,5,6,8,7,9];

let n = array.filter(function(value,index){
	console.log(`value=${value} index=${index}`);
	return(value % 2) === 0;
});

// returns new array
console.log('n: ',n);