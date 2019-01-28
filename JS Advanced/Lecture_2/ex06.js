"use strict"


//Create objects with IIFE



//Declare class

const User = (function(){
    //private
    let firstName;
    let lastName;

    //private methods
    function show(){
        console.log(`${firstName} ${lastName}`);
    }

    function register(fname,lname){
        firstName = fname;
        lastName = lname;
    }

    //Public
    return function(fname,lname){
        register(fname,lname);

        this.print = show;
        this.setName = register;

        this.isRegistered = function(){
            return firstName !== undefined && lastName !== undefined;
        }
        console.log('Store User');
       
        
    };

})();

//create object ( this is used when we want only one instance of an object during the program execution)

const john = new User('John','Doe');
john.print();

const maria = new User('Maria','Anders');
 if(maria.isRegistered()){
    maria.print();
 }
