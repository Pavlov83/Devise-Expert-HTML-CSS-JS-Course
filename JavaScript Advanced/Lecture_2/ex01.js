"use strict"

const User = {
    uname: 'Walter',
    email: 'heisenberg@dea.com'
}; //this object is very limiting,we cannot multiply

//bad practice
User.uname ='Hank';//allows to change key but we can receive many errors if the access is uncontrolled

/* In JavaScript the classes are declared as functions */

   /*  Declaring Classes */

function User(){

    //data(field)
    //private(not accessible froum outside) are using 'let'
    let firstName = 'John';
    let lastName = '';

    //public modifiers(accessible from outside) are with 'this'
    this.age = 30;
    //function(methods)

    //public method(public methods are forming the interface(those functions that are communicating with the other parts of the code))
    this.show = ()=>{
        console.log(`###User ${firstName} Age:${this.age}###`)
        );
    foo();
    };
    //private method
    function foo(){
        console.log('function foo');
    };
}   

       /* Creating Objects */

/*Difference between class and object is that class is general and object is particluar instance with specific properties.   */

const Mike = new User();
console.log('Age:', Mike.age);//we can access age because it is public(uses this) 
console.log('First Name:',john.firstName);//undefined