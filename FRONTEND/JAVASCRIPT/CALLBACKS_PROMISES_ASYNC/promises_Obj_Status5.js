const pr = new Promise(function exec(res,rej) {      // How executor function that is callbacks ka status decide ? 
    console.log("Executor callback triggered by promise constructor");
    const randomNumber = Math.floor(Math.random()*100);  // math random 0 and 1 ke bich ka random no dega and after multp with 100 math floor decimal hta ke interger result me dega 
    if(randomNumber%2 === 0){
        // random no is even so call resolver(res) bcoz yhi need tha
        res(); // so resolve mtlb state is fuilfilled 


    }
    else{ // randomno is odd jo nhi need tha so call rejector(rej)
       rej(); // rej means state is rejected 
    }

});

console.log("created the promise object");
console.log(pr);