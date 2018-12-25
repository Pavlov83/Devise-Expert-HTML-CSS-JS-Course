"use strict"

const title = 'Web App';

let x = 5,
	y = 6;

let output = `<h1>${title}</h1>
  	<div>Random number: ${Math.random() * 100}</div>
  	<div>x + y = ${x + y}</div>`;
 	
 		console.log(output);
         //smart quotes allows us 
		//to avoid concatentation and helps us to format text

		//Template literals also allows to use expressions e.g."${5+6}"