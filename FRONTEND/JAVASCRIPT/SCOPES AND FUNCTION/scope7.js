// Function expression = function jisko kisi variable ke inside me declare and first word(token) is not 'function ' 

const myFun = function fun(x){  // 1.Named function expression (myfun ke inside fun create)
    console.log("calling...",x);

}

const myFun = function (x){  // 2.anonymous function expression 
    console.log("calling...",x);

}

const myFun = () => {  // 3. arrow function / arrow function expression
    console.log("calling...",x);

}

(function fun(x){  // 4. IIFE -(Immediately invoked function expression)
    console.log("calling...",x);

})(10)