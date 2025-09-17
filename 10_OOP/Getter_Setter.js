class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Ansh`
    }

    set password(value){
        this._password = value
    }

    // _ is used before the variable name in getter and setter function to avoid the stack limit exceed error
    // If you write this.email = value inside the set email(),
    // it will call the setter again, because this.email is bound to the getter/setter itself. amd it will leads to infinite recursion
}

const Ansh = new User("Ansh@gmail.com", "abc")
console.log(Ansh.email);
console.log(Ansh.password);
