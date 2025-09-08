class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);    // super calls the parent constructor
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const ansh = new Teacher("Ansh", "ansh@123.com", "ansh1234");
ansh.addCourse();   // A new course was added by Ansh

const yash = new Teacher("Yash", "yash@123.com", "yash1234");
yash.addCourse();   // A new course was added by Yash

console.log(ansh === yash);     // false
console.log(yash == Teacher);   // false
console.log(ansh instanceof Teacher);   // true
console.log(ansh instanceof User);      // true


// Inheritance in JS lets objects share properties and methods via constructors
// instanceof checks an object’s relationship to its parent