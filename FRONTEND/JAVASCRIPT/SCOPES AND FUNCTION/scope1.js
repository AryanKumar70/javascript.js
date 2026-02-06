let x = 10; // [ Global Scope is "x" ] = yha se khi bhi value of x is accessible so called global variable
function fun(){
    console.log(x);
}
function gun(){
    for(let i=0;i<x;i++){

    }
}
fun();
gun();

function cake(){
    let z = 99; // [ Function Scope is "z" ] = only inside this function z is accessible not outside
    console.log(z);
}
cake(); // function call to hi value print hoga

{
    let y = 55;
    console.log(y);  //  [Block Scope is "y"] = bcoz curley braket ke inside me y so block hua and andar me hi accessible not outside
}