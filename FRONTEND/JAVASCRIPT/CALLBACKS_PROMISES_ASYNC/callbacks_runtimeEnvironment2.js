function createTimer(Time , Timerid){                         //1.first function skip hoga line 1 and go to line 10 then 11 so function call hua 
    console.log("Creating a new timer with a id " , Timerid);//2. so "setTimeout" is not native so run in "runtimeEnvironment" with Time=2000 and Timerid= 1
    setTimeout(() =>{         // again another setTimeout run with Time=0 and Timeid=2 in runtimeEnvironment and for loop in stack as this is native
        console.log(`Timer with id ${Timerid} is done`); // then pahle time=0 print and then time=2000 print

    } ,Time );
    console.log("Successfully created a new timer with id ",Timerid);
}

console.log("starting the code");
createTimer(2000,1);
createTimer(0,2);

console.log("starting a loop");
for(let i =0; i<10000000; i++){
    // something is going on 
}
console.log("Loop is done");
console.log("Last line of code is done");
