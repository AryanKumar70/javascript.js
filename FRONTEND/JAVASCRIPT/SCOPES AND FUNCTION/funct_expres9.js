arr.map(function factorial(n){ // here to call funct recursively we know function name so "name function" is more important
    if(n==1) return 1;
    return n*factorial(n-1);
})

arr.map(function (n){ 
    if(n==1) return 1;
    return n*(n-1); // here func have no name so it difficult to call fucntion recursively so "anonymous function" is not usable in recursion
})

// anonymous function ko call krne ka method recursively
arr.map(function (n){ 
    if(n==1) return 1;
    return n*arguments.callee(n-1);  // 'arguments.callee' function call
})

// Arrow function
const square = (x) => x*x; // yha square me return x*x hota single line me so using arrow func 'return' ke bina bhi run hoga 

// IIFE(Immediately invoked function expression)
(function square(x){ // one time implementation hota h so outer scope se again call hoga so no implement 
    return x*x;  // IIFE is used to reduce name conflict
})(10); 
