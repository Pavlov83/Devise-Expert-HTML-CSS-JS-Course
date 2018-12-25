"use strict"

const app_config = {

	title: 'Web App',
	url: 'http://localhost',
	path: '/site/'

};

console.log(app_config);

app_config.title = 'Blog'; //change value
console.log(app_config);

app_config.imagePath = '/images/'; //add key
console.log(app_config);

delete app_config.url;//delete key
console.log(app_config);

app_config = {		    //this gives an error because we are	
	width = 900;		// trying to change the object(constant type)
	height = 600;
};