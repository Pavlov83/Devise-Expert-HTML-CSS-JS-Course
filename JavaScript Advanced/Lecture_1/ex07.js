"use strict"


/*example generator functions sign * is used before the name
instead of return(which goes out of the function), yield awaits for
second call */

function *generateNumbers(){
	let i = 0;
	while(true){
		i++;
		yield i;
		console.log(`after yield i = ${i}`);

	}
}

const nums = generateNumbers();
//after every function call the function returns value
console.log(`value = ${ nums.next()}`); 
console.log(`value = ${ nums.next()}`); 
console.log(`value = ${ nums.next()}`); 