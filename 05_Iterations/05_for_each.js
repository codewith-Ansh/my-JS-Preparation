// for each loop
const lang = ["js", "py", "go", "swift", "c++", "c"]

lang.forEach( (item) => {
    console.log(item);
});

// or

lang.forEach( function (val){
    console.log(val);
});

// or

function printMe(values){
    console.log(values);
}

lang.forEach(printMe);

// all will work finely

// ------
// we can also give many types of arguements to the functions not only just value

lang.forEach( (item, index, lang) => {
    console.log(item, index, lang); // index will print index and the name of the array will print the whole array
});

// for each loop for the array of objects

const arr = [
    {
        name: "Ansh",
        age: "19"
    },
    {
        name: "Jay",
        age: "18"
    },
    {
        name: "Yash",
        age: "20"
    },
    {
        name: "Dhaval",
        age: "19.5"
    }
]

arr.forEach( (item) => {
    console.log(item.name, ": ", item.age);
})