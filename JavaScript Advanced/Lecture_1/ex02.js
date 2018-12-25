'use strict'

//Global variable
 var message = 'Hello Nodejs';

 function showMessage(){
 	//local variable-we can access it only in the function scope
 	let a = 10;

 	if(true){
 		var b = 1;
		console.log('1. b=', b);
 	}
 	console.log(message);
 	console.log('a=',a,'b=',b);
 	//Error! b is not visible here
 	//console.log('2. a=',a,'b=',b);
 }

 showMessage();