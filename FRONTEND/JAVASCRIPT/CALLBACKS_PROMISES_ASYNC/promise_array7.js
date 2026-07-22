const p1 = new Promise((res , rej ) =>{ //1.  line '1' me  ek object "p1" bnaaye and p1 object promise ka constructor ko call kiya and "Promise" constructor ek executor callback ko call kiya 
   console.log("Executor callback triggered by promise constructor : p1"); //2. this line sbse pahle print hoga
   setTimeout(()=> { //3. phir timeout runtime environment execute krega 5 millisec ke baad 
     console.log("Timer of p1 done");
     res(100);
   } , 500);
});
p1.then(function a() {console.log("a") } , function b() {console.log("b") }  ); //4. p1 ka onfulfillment array me fucntion "a" jayega and p1 ka onrejection array me function "b" jayega ye officially execute nhi hoga bss register ho gya 
// execute tb hoga jb pending state of promise change to fulfillment or rejected state tb 
setTimeout(function timerCB()  {
    console.log("timer 1 done");

} ,1000); //timer for 1 sec

const pr = new Promise(function exec(res, rej) { // 5. one more object "pr" in global scope me create hua in call stack me jiske initial me ( status:pending ,promise value:undefined , onfuilfullment:[empty] ,onrejcetion:[empty] )
    console.log("Executor callback triggered by promise constructor"); //6. second line print ye wla pahle wla ke baad 
    setTimeout(function prCB()  {   //7. again runtime environment me prCB ka timeout start for 2 millisec so go in line 31 .
        const randomNumber = Math.floor(Math.random()*100);  
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

pr.then(function f() {console.log("executing f") } , function g() {console.log("executing g") }  ); //8.  phir array me sara value note [f,h] and [g,i]
pr.then(function h() {console.log("executing h") } , function i() {console.log("executing i") }  );

for(let i =0; i<100000; i++){} //9. phir ye loop chalega call stack so single thread busy as 2 loop run ho  rha h 
for(let i =0; i<100000; i++){}
console.log("end");  //10. ab first timeoutCB ka callback "timerCB" macrotask me jayega then next timerPB go in macrotask me 
//11. then call stack me event loop check so wo free hua from for loop so ab macrotask ka callback ko call stack me dalega for final execution 
//12. then even no so onfilfllment array me pahla value jayega and odd so 2nd value