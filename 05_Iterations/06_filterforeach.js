// forEach doesn't return anything (undefined)

const lang = ["js", "py", "go", "swift", "c++", "c"]

const value = lang.forEach( (item) => {
    // console.log(item);
    return item;
});

console.log(value); // undefined

// filter() method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter((num) => (num % 2) === 0);
const greater = numbers.filter((num) => {
    return num > 5;
});

console.log(evenNumbers);   // [ 2, 4, 6, 8, 10 ]
console.log(greater);       // [ 6, 7, 8, 9, 10 ]

// this can also be done as the below method
const myNums = [];
numbers.forEach((num) => {
    if(num > 5){
        myNums.push(num);
    }
});
console.log(myNums);        // [ 6, 7, 8, 9, 10 ]

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  { title: 'Book Ten', genre: 'Fiction', publish: 2005, edition: 2015 }
];

const myBooks = books.filter( (bk) => bk.publish > 2000)
console.log(myBooks);