var question ='';

var question = window.prompt("What is your name?");



if(question === null || question === ''){
	question = 'Guest';

}
else{
	question = '<em style="color:red">' + question + '</em>';
}

	var view = document.write("<h1>Hello " + question );

