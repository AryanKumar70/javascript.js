function test(){
   let x = 10;
   x += 2;
   return 12;
}
let ans = test();
console.log(ans); 

// Default parameter in function

function add(x, y = 5, z){ // default parameter ka value hi lege 'y' and x , z lega actual value
    console.log(x);
    console.log(y);
    console.log(z);
    return x+y+z;
}
console.log(add(10,55,3));



// Unlimited value in parameter
function fun(...value){  // ...value= represents unlimited values
     console.log(value);
}
fun(10,20,30,40,50);