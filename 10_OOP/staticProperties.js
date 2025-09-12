class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const ansh = new User("ansh")
// console.log(ansh.createId())     // error as object tries to call the static method

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const ansh1 = new Teacher("ansh1", "ansh1@gmail.com")
// console.log(ansh1.createId());   // error again as object tries to call the static method

console.log(User.createId())    // means static is independent of object and we can access it by using the class name