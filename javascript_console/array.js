// Definition of Array
// An array is a data structure that stores multiple values in a single variable, allowing efficient
// organization, retrieval, and manipulation of data.

// Why Use Arrays
// ● To store multiple values without creating separate variables.
// ● To organize related data in one structured format.
// ● To easily update, insert, remove, or search data.
// ● To perform operations on a list of items using loops or array methods.

// Where Arrays Are Used
// ● Managing a list of students.
// ● Product lists in e-commerce applications.
// ● Messages in chat applications.
// ● Image galleries.
// ● To-do applications.

let attendanceList = ["seelro" , "rehman" , "abdul"];
console.log(attendanceList);

let a = [10 , 11 , 12]
let b = a.map(c => c*1.1)
console.log(b);

let d = a.map(e => + (e*1.1).toFixed(2))
console.log(d);
let f = a.map(g => (g*1.1).toFixed(6))
console.log(f);