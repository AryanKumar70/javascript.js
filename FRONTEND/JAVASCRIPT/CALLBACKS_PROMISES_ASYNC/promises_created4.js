const pr = new Promise(() =>{ //  1.new se object create hoga and uska protyping promise ke saath hoga
//     console.log("Executor callback triggered by promise constructor");
    for(let i =0;i<10000000;i++){

    }

});

console.log("created the promise object");
console.log(pr);