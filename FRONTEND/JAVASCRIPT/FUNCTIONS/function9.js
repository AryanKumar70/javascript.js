//In js function can be returned from a function and function can be passed as an argument to another function
function someFunction() {
    // computation
    return function x() {
       return 10; 
    }
}

function anotherfunction(f1){
    f1();
    console.log("called f1");
}

function hello(){
    console.log("hellow");
}
anotherfunction(hello);