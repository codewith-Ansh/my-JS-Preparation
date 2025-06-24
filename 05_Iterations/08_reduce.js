// reduce

const array1= [1, 2, 3, 4, 5]

// const sum = array1.reduce( (acc, curval) => {
//     console.log(`accumalator value: ${acc} and current value: ${curval}`);
//     return acc + curval;
// }, 0)
// console.log(sum);

const sum = array1.reduce( (acc, curval) => {
    console.log(`accumalator value: ${acc} and current value: ${curval}`);
    return acc + curval;
}, 5)
console.log(sum);

// this can be also written as

const anothersum = array1.reduce( (acc, curval) => acc + curval, 0)
console.log(anothersum);

// for the array of objects

const arr = [
    {
        coursename: "Python course",
        price: 999
    },
    {
        coursename: "Web dev course",
        price: 3999
    },
    {
        coursename: "Data science course",
        price: 4999
    },
    {
        coursename: "Machine learning course",
        price: 9999
    }
]

const totalPrice = arr.reduce( (acc, item) => acc + item.price, 0);
console.log(totalPrice);