// Immediately Invoked Functions Expressions (IIFE)

/* It’s a function that runs as soon as it is defined. */
( function demoFunc() {
    console.log("Hello world!");
}) ();  // to end IIFE we need to use ';' otherwise next function will throw error

( function demoFunc2() {
    console.log("Hello world! 2");
}) ();

// with arguement
( function (name) {
    console.log(`${name} just logged in!`);
}) ("Ansh");    // Ansh just logged in!

// arrow iife
(() => {
    console.log("Arrow IIFE");
})();

/*  NOTE: It avoid polluting the global scope,
    Variables defined inside IIFE are not accessible outside.   */
