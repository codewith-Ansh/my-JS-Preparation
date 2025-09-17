const User = {
    _email: "Ansh@gmail.com",
    _password: "1234",

    get email() {
        return this._email;
    },

    set email(email){
        this._email = email
    }
}

let ansh = Object.create(User);
console.log(ansh.email);