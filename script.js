//  To compare two JSON objects in JavaScript without considering the order of properties
//  Convert both objects to strings.
//  Sort the properties of each object.
//  Compare the sorted strings.

let obj1 = {name: "person 1", age:5};
let obj2 = { age:5, name: "person 1"};

// Convert objects to strings and sort properties
let obj1String = JSON.stringify(obj1, Object.keys(obj1).sort());
let obj2String = JSON.stringify(obj2, Object.keys(obj2).sort());

// Compare the sorted strings
if (obj1String === obj2String) {
    console.log("The objects are equal disregarding property order.");
} else {
    console.log("The objects are not equal disregarding property order.");
}

// let obj1 = {name: "person 1", age:5};
// let obj2 = { age:5, name: "person 1"};

// // Sort object keys
// let sortedKeysObj1 = Object.keys(obj1).sort();
// let sortedKeysObj2 = Object.keys(obj2).sort();

// // Convert objects to strings using sorted keys
// let obj1String = JSON.stringify(obj1, sortedKeysObj1);
// let obj2String = JSON.stringify(obj2, sortedKeysObj2);

// // Compare the sorted strings
// if (obj1String === obj2String) {
//     console.log("The objects are equal disregarding property order.");
// } else {
//     console.log("The objects are not equal disregarding property order.");
// }