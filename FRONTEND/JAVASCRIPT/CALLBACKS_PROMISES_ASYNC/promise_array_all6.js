console.log("start");   // Execution of whole components of promise

setTimeout(function timerCB()  {
    console.log("timer 1 done");

} ,1000); //timer for 1 sec

const pr = new Promise(function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor");
    setTimeout(function prCB()  {
        const randomNumber = Math.floor(Math.random()*100);  // math random 0 and 1 ke bich ka random no dega and after multp with 100 math floor decimal hta ke interger result me dega 
        console.log(randomNumber);
        if(randomNumber%2 === 0){
            // if random no is even so call resolver(res) and "onfulfillment" ka first function(f,h) print 
            res(randomNumber); // so resolve mtlb state is fuilfilled 
        }
        else{ // if randomno is odd jo so call rejector(rej) and "onrejector" ka second function(g,i) print
            rej(randomNumber); // rej means state is rejected 
        }

    } ,2000); 
});

pr.then(function f() {console.log("executing f") } , function g() {console.log("executing g") }  );
pr.then(function h() {console.log("executing h") } , function i() {console.log("executing i") }  );

for(let i =0; i<100000; i++){}
for(let i =0; i<100000; i++){}
console.log("end");