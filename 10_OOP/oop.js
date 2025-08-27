const user = {
    username: "Ansh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);

// A function declared with function can act as a constructor when called with new; new creates a new object, sets this to it, and assigns properties like this.username from the function parameters, so the object stores those values even without separate variables.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);