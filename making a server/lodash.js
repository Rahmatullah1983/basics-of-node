const _ = require('lodash');
// how to split an array in chunks using lodash
const newArr = _.chunk(['a', 'b', 'c', 'd', 'e'], 2);
console.log(newArr);
// remove The values false, null, 0, "", undefined, and NaN are falsey
const newArr1 = _.compact([1, "a", false, 'c', 0, "", NaN]);
console.log(newArr1);
//Creates a new array concatenating array with any additional arrays and/or values.
const other = _.concat(newArr1, 2, [3], [[4]]);
console.log(other);
// returns a new arry with the values wich are not present in second arry
const arr = _.difference(['a', 'b'], [1, 2]);
console.log(arr);
//Compares values based on a transformation (iteratee)
const arr1 = _.differenceBy([1.2, 2.3, 3.2], [2.1, 1.5], Math.floor);
console.log(arr1);


const arry1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const arry2 = [
    { id: 2, name: 'Bob' }
];

// Using a custom comparator function to compare by id
const result = _.differenceWith(arry1, arry2, (a, b) => a.name === b.name);

console.log(result);

//drop eilments from first of array
const arr2 = [1, 2, 3, 4, 5];
const result1 = _.drop(arr2, 3);

console.log(result1);

// drop elements from the end of arry

const arr3 = [1, 2, 3];
const result2 = _.dropRight(arr3, 2);

console.log(result2);

