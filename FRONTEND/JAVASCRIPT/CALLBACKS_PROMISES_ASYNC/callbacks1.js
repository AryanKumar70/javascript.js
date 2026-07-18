const arr= [1,2,3,4,5];

function myMap(arr,fn){ // 1. myMap is higher order function which take another function as an argument 
        let result = []; // 2.creating new array for storing result as (myMap function is always return array)
    for(let i =0; i<arr.length;i++){
        result.push(fn(arr[i]))  
    }
    return result;
}

console.log(myMap(arr,function g(element){ //3.here 'g' function is (callbacks) function which is passed as an argument to highere order function
    return element**2;    //4. callbacks ka advantages h runtime pe according to need argument pass kr skte h 
}))

