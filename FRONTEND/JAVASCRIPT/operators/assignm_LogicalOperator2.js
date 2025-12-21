let x = 10;
x +=10;
console.log(x);  //'+=' is assignment operator so on ...
x *=5;
console.log(x);
x /= 5;
console.log(x);

// BOOLEAN operator 
console.log(false && false); // AND operator me agar pahla false so overall false hoga 2nd wla check bhi nhi krta h js
console.log(true && false); // AND operator me agar pahla true so 2nd wla result hi final result bnta h (true && false = false)
console.log(false && true);
console.log(true && true);

console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(!true);
console.log(!false);

// SHORT CIRCUITING 
console.log(10 && 30); // "AND" operator used so agar first value true so return 2nd value (ANS=30) 
console.log(0 && 30);  // "AND" operator used so agar first value False so return  False 2nd value of check bhi nhi krega
console.log(10 && null);
console.log("" && -0);

console.log(10 || 30);  // "OR" operator used so first value is 'True' so return first value 2nd wla check mt kro
console.log(0 || 30);   // "OR" operator used so first value is 'False' so return 2nd value
console.log(10 || null);
console.log("" ||-0);