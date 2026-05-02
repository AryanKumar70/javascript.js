const obj ={
    firstName : 'Aryan',
    greet : function (){
        console.log("hello, my name is " ,this.firstName);
    }
 }
const newobj ={firstName: 'sarthak'};
console.log(obj.greet()) ;  //1. "obj.greet" is define in 'obj' so call site me point kr rha h bcoz greet function is define in call site that is 'obj' so "Aryan" hi print hoga 
console.log(obj.greet.call(newobj)) ; //2.  yha call site me point nhi hoaga "newobj" me point krega "call" so uske inside "sarthak" h so print 


// const obj ={
//     firstName : 'Amit',
//     greet : function (welcomeMessage){
//         console.log("hello, my name is " ,this.firstName , welcomeMessage);
//     }
//  }

// console.log(obj.greet()) ; 

// const newobj ={firstName: 'sanket'};  
// console.log(obj.greet.call(newobj,"how are You?")) ;  //3.  "hello, my name is sanket how are You?" // call use me parameter bhi de skte h 





// var name = 'abcd';
// const obj ={
//     firstName : 'Amit',
//     greet : function (){
//         console.log("hello" ,this.firstName);
//     }
// }

// console.log(obj.greet.call()) ; // here in call method no parameter is passed and we call greet function so global scope se 'abcd' print ho ga
