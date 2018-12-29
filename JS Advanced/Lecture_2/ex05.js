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
    return {
        print:show,
        setNames:register,
        isRegistered:function(){
            return firstName !== undefined && lastName !== undefined;
        }
        
    };

})();

//create object ( this is used when we want only one instance of an object during the program execution)

User.setNames('Larry', 'Graham');
if(User.isRegistered()){
    //User
    User.show();
}