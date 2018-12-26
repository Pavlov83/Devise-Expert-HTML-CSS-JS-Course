"use strict"

function createUser(user,plan){
	if(typeof user !== 'string'){
		throw Error('Missing parameter:user');

	}

	console.log(`User: ${user} plan:${plan}`);
}

let plan;// this variable is not initialized and the
		 // result is undefined


createUser('Walter','chemist');
createUser('Jessy') ;    // will be undefined
createUser('Mike');    //wil be undefined


//the following example shows default paramater of function
function createDefault(user,plan = 'developer'){

	if(typeof user !== 'string'){
		throw Error('Missing parameter:user');
	}

	console.log(`User:${user} plan:${plan}`);
}

createDefault('Pinkman');