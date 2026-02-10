// function fun(){
//     console.log(x); // value print hoga(undefined) as function scope h 
//     var x = 10;  // as 'var' h so function scope and funct scope is always accessible before declaration of variable
//     console.log(x);
// }
// fun();

function fun(){
    console.log(x);  // Errror (Temporal Dead zone)
    let x = 10;  // as 'let' so block scope h and is always accessible after the declaration of variable
    console.log(x);
}
fun();