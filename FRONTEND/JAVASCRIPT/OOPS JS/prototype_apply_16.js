const obj ={
    firstName : 'Amit',
    greet : function (msg1 ,msg2){
        console.log("hello, my name is " ,this.firstName , msg1 ,msg2);
    }
}

console.log(obj.greet()) ; 

const newobj ={firstName: 'sanket'};  
console.log(obj.greet.apply(newobj,["how are You?" , "How can i help you"])) ;// 1.here 'apply' method is used which takes 2 argument first is newlyobj and 2nd is Array so indie array give multi parameter



 