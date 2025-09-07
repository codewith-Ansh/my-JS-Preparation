class User {
    constructor(username, id, password){
        this.username = username;
        this.id = id;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

let ansh = new User("Ansh", 22, "ansh1234");    // use let or const not the class name

console.log(ansh.encryptPassword());    // ansh1234abc
console.log(ansh.changeUsername());     // ANSH

// ------ Behind the scene ------

function Userr(username, id, password){
    this.username = username;
    this.id = id;
    this.password = password;
}

Userr.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

Userr.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

let anshu = new Userr("Anshu", 22, "anshu1234");
console.log(anshu.encryptPassword());    // anshu1234abc
console.log(anshu.changeUsername());     // ANSHU