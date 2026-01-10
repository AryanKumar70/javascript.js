let arr1 = [];   // arrays in js is objects jisme (keys is = index) and (values is = arrays elements).
let arr2 = ["Sanket",true,-1,0,null];

console.log(arr1,arr2);

arr2[3] = 100;
console.log(arr2);

// Array declare methods 

let arr3 = new Array(10,20,30); //filled with 10,20,30
console.log(arr3);

let arr4 = new Array(3);  // filled with undefined  ==bcoz only size '3' declare h in array
console.log(arr4);

let arr5 = new Array(4).fill(-1); // filled with -1
console.log(arr5);