const promise1 = new Promise((resolved, rejected) => {
    // Do some async task
    // DB Calls, cryptography, network

    setTimeout(function(){
        console.log("Async task completed");
        resolved();
    }, 2000)
})

promise1.then(function(){
    console.log("Promise consumed");
})

new Promise((done, rejected) => {
    // console.log("Hello");
    // done();

    setTimeout(function(){
        console.log("Async task 2 completed")
        done()
    }, 1000)
    
}).then(() => {
    console.log("resolved");
})
