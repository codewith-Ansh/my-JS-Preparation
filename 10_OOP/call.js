function setUsername(username){
    this.username = username;
}

function Username(username, id, age){
    // setUsername(username)   // Username { id: 22, age: 19 }
    setUsername.call(this, username);   // Username { username: 'Ansh', id: 22, age: 19 }

    this.id = id;
    this.age = age;
}

const user1 = new Username("Ansh", 22, 19)
console.log(user1);

// setUsername.call(this, username); - lets us reuse another function’s code inside a constructor while keeping this bound to the current object being created.