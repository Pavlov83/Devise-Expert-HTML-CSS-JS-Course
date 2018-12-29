function User(fname = '',lname = '',age = 0){
    console.log('Constructor');

    let firstName = upper(fname);
    let lastName = upper(lname);

    this.age = age;

    this.show = ()=>{
        console.log(`User:${firstName} ${lastName} Age:${this.age})`);
    };

    function upper(text){
        return text.toUpperCase();
    }
}

const Jesse = new User('Jesse','Pinkman',20);
Jesse.show();

const Walt = new User('Walter','White',50);
Walt.show