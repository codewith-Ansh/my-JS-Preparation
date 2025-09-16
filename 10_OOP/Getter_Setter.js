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
}

const Ansh = new User("Ansh@gmail.com", "abc")
console.log(Ansh.email);
console.log(Ansh.password);
